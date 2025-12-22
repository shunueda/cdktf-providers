// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#metadata DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata;
  /**
  * A ZooKeeper cluster stacklet. This resource is managed by the Stackable operator for Apache ZooKeeper. Find more information on how to use it and the resources that the operator generates in the [operator documentation](https://docs.stackable.tech/home/nightly/zookeeper/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#spec DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec;
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#annotations DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#labels DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#name DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#namespace DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication {
  /**
  * The [AuthenticationClass](https://docs.stackable.tech/home/stable/concepts/authentication) to use. ## mTLS Only affects client connections. This setting controls: - If clients need to authenticate themselves against the server via TLS - Which ca.crt to use when validating the provided client certs This will override the server TLS settings (if set) in 'spec.clusterConfig.tls.serverSecretClass'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#authentication_class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#authentication_class}
  */
  readonly authenticationClass: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_class: cdktf.stringToTerraform(struct!.authenticationClass),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_class: {
      value: cdktf.stringToHclTerraform(struct!.authenticationClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationClass = this._authenticationClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationClass = value.authenticationClass;
    }
  }

  // authentication_class - computed: false, optional: false, required: true
  private _authenticationClass?: string; 
  public get authenticationClass() {
    return this.getStringAttribute('authentication_class');
  }
  public set authenticationClass(value: string) {
    this._authenticationClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClassInput() {
    return this._authenticationClass;
  }
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList extends cdktf.ComplexList {
  public internalValue? : DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable

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
  public get(index: number): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference {
    return new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls {
  /**
  * The [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) to use for internal quorum communication. Use mutual verification between Zookeeper Nodes (mandatory). This setting controls: - Which cert the servers should use to authenticate themselves against other servers - Which ca.crt to use when validating the other server Defaults to 'tls'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#quorum_secret_class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#quorum_secret_class}
  */
  readonly quorumSecretClass?: string;
  /**
  * The [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) to use for client connections. This setting controls: - If TLS encryption is used at all - Which cert the servers should use to authenticate themselves against the client Defaults to 'tls'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#server_secret_class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#server_secret_class}
  */
  readonly serverSecretClass?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTlsToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quorum_secret_class: cdktf.stringToTerraform(struct!.quorumSecretClass),
    server_secret_class: cdktf.stringToTerraform(struct!.serverSecretClass),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTlsToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quorum_secret_class: {
      value: cdktf.stringToHclTerraform(struct!.quorumSecretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_secret_class: {
      value: cdktf.stringToHclTerraform(struct!.serverSecretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quorumSecretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.quorumSecretClass = this._quorumSecretClass;
    }
    if (this._serverSecretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSecretClass = this._serverSecretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quorumSecretClass = undefined;
      this._serverSecretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quorumSecretClass = value.quorumSecretClass;
      this._serverSecretClass = value.serverSecretClass;
    }
  }

  // quorum_secret_class - computed: false, optional: true, required: false
  private _quorumSecretClass?: string; 
  public get quorumSecretClass() {
    return this.getStringAttribute('quorum_secret_class');
  }
  public set quorumSecretClass(value: string) {
    this._quorumSecretClass = value;
  }
  public resetQuorumSecretClass() {
    this._quorumSecretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quorumSecretClassInput() {
    return this._quorumSecretClass;
  }

  // server_secret_class - computed: false, optional: true, required: false
  private _serverSecretClass?: string; 
  public get serverSecretClass() {
    return this.getStringAttribute('server_secret_class');
  }
  public set serverSecretClass(value: string) {
    this._serverSecretClass = value;
  }
  public resetServerSecretClass() {
    this._serverSecretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSecretClassInput() {
    return this._serverSecretClass;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig {
  /**
  * Authentication settings for ZooKeeper like mTLS authentication. Read more in the [authentication usage guide](https://docs.stackable.tech/home/nightly/zookeeper/usage_guide/authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#authentication DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#authentication}
  */
  readonly authentication?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable;
  /**
  * This field controls which type of Service the Operator creates for this ZookeeperCluster: * cluster-internal: Use a ClusterIP service * external-unstable: Use a NodePort service This is a temporary solution with the goal to keep yaml manifests forward compatible. In the future, this setting will control which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) will be used to expose the service, and ListenerClass names will stay the same, allowing for a non-breaking change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#listener_class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * TLS encryption settings for ZooKeeper (server, quorum). Read more in the [encryption usage guide](https://docs.stackable.tech/home/nightly/zookeeper/usage_guide/encryption).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#tls DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls;
  /**
  * Name of the Vector aggregator [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery). It must contain the key 'ADDRESS' with the address of the Vector aggregator. Follow the [logging tutorial](https://docs.stackable.tech/home/nightly/tutorials/logging-vector-aggregator) to learn how to configure log aggregation with Vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform, false)(struct!.authentication),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    tls: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTlsToTerraform(struct!.tls),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform, false)(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls",
    },
    vector_aggregator_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.vectorAggregatorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._listenerClass = undefined;
      this._tls.internalValue = undefined;
      this._vectorAggregatorConfigMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._listenerClass = value.listenerClass;
      this._tls.internalValue = value.tls;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // vector_aggregator_config_map_name - computed: false, optional: true, required: false
  private _vectorAggregatorConfigMapName?: string; 
  public get vectorAggregatorConfigMapName() {
    return this.getStringAttribute('vector_aggregator_config_map_name');
  }
  public set vectorAggregatorConfigMapName(value: string) {
    this._vectorAggregatorConfigMapName = value;
  }
  public resetVectorAggregatorConfigMapName() {
    this._vectorAggregatorConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorAggregatorConfigMapNameInput() {
    return this._vectorAggregatorConfigMapName;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation {
  /**
  * Flag to stop cluster reconciliation by the operator. This means that all changes in the custom resource spec are ignored until this flag is set to false or removed. The operator will however still watch the deployed resources at the time and update the custom resource status field. If applied at the same time with 'stopped', 'reconciliationPaused' will take precedence over 'stopped' and stop the reconciliation immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#reconciliation_paused DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#reconciliation_paused}
  */
  readonly reconciliationPaused?: boolean | cdktf.IResolvable;
  /**
  * Flag to stop the cluster. This means all deployed resources (e.g. Services, StatefulSets, ConfigMaps) are kept but all deployed Pods (e.g. replicas from a StatefulSet) are scaled to 0 and therefore stopped and removed. If applied at the same time with 'reconciliationPaused', the latter will pause reconciliation and 'stopped' will take no effect until 'reconciliationPaused' is set to false or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#stopped DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciliation_paused: cdktf.booleanToTerraform(struct!.reconciliationPaused),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciliation_paused: {
      value: cdktf.booleanToHclTerraform(struct!.reconciliationPaused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stopped: {
      value: cdktf.booleanToHclTerraform(struct!.stopped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconciliationPaused !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconciliationPaused = this._reconciliationPaused;
    }
    if (this._stopped !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopped = this._stopped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconciliationPaused = undefined;
      this._stopped = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconciliationPaused = value.reconciliationPaused;
      this._stopped = value.stopped;
    }
  }

  // reconciliation_paused - computed: false, optional: true, required: false
  private _reconciliationPaused?: boolean | cdktf.IResolvable; 
  public get reconciliationPaused() {
    return this.getBooleanAttribute('reconciliation_paused');
  }
  public set reconciliationPaused(value: boolean | cdktf.IResolvable) {
    this._reconciliationPaused = value;
  }
  public resetReconciliationPaused() {
    this._reconciliationPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationPausedInput() {
    return this._reconciliationPaused;
  }

  // stopped - computed: false, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#name DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#custom DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#product_version DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pull_policy DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pull_secrets DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#repo DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#stackable_version DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_version: {
      value: cdktf.stringToHclTerraform(struct!.productVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackable_version: {
      value: cdktf.stringToHclTerraform(struct!.stackableVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._productVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.productVersion = this._productVersion;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._stackableVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackableVersion = this._stackableVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._productVersion = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repo = undefined;
      this._stackableVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._productVersion = value.productVersion;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repo = value.repo;
      this._stackableVersion = value.stackableVersion;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
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

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // stackable_version - computed: false, optional: true, required: false
  private _stackableVersion?: string; 
  public get stackableVersion() {
    return this.getStringAttribute('stackable_version');
  }
  public set stackableVersion(value: string) {
    this._stackableVersion = value;
  }
  public resetStackableVersion() {
    this._stackableVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackableVersionInput() {
    return this._stackableVersion;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#node_affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#node_selector DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pod_affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinityToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinityToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#level DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#config_map DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#level DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#level DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#console DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#custom DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#file DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#loggers DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#containers DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#enable_vector_agent DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#max DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#min DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#limit DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#runtime_limits DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#key DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#operator DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#values DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#match_expressions DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#match_labels DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#capacity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#selectors DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#storage_class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#data DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#cpu DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#memory DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#storage DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu",
    },
    memory: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory",
    },
    storage: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#init_limit DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#init_limit}
  */
  readonly initLimit?: number;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#logging DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#myid_offset DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#myid_offset}
  */
  readonly myidOffset?: number;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#resources DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#sync_limit DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#sync_limit}
  */
  readonly syncLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#tick_time DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#tick_time}
  */
  readonly tickTime?: number;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    init_limit: cdktf.numberToTerraform(struct!.initLimit),
    logging: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingToTerraform(struct!.logging),
    myid_offset: cdktf.numberToTerraform(struct!.myidOffset),
    resources: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesToTerraform(struct!.resources),
    sync_limit: cdktf.numberToTerraform(struct!.syncLimit),
    tick_time: cdktf.numberToTerraform(struct!.tickTime),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_limit: {
      value: cdktf.numberToHclTerraform(struct!.initLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging",
    },
    myid_offset: {
      value: cdktf.numberToHclTerraform(struct!.myidOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources",
    },
    sync_limit: {
      value: cdktf.numberToHclTerraform(struct!.syncLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tick_time: {
      value: cdktf.numberToHclTerraform(struct!.tickTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._initLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.initLimit = this._initLimit;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._myidOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.myidOffset = this._myidOffset;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._syncLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncLimit = this._syncLimit;
    }
    if (this._tickTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickTime = this._tickTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._initLimit = undefined;
      this._logging.internalValue = undefined;
      this._myidOffset = undefined;
      this._resources.internalValue = undefined;
      this._syncLimit = undefined;
      this._tickTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._initLimit = value.initLimit;
      this._logging.internalValue = value.logging;
      this._myidOffset = value.myidOffset;
      this._resources.internalValue = value.resources;
      this._syncLimit = value.syncLimit;
      this._tickTime = value.tickTime;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // init_limit - computed: false, optional: true, required: false
  private _initLimit?: number; 
  public get initLimit() {
    return this.getNumberAttribute('init_limit');
  }
  public set initLimit(value: number) {
    this._initLimit = value;
  }
  public resetInitLimit() {
    this._initLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initLimitInput() {
    return this._initLimit;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // myid_offset - computed: false, optional: true, required: false
  private _myidOffset?: number; 
  public get myidOffset() {
    return this.getNumberAttribute('myid_offset');
  }
  public set myidOffset(value: number) {
    this._myidOffset = value;
  }
  public resetMyidOffset() {
    this._myidOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myidOffsetInput() {
    return this._myidOffset;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sync_limit - computed: false, optional: true, required: false
  private _syncLimit?: number; 
  public get syncLimit() {
    return this.getNumberAttribute('sync_limit');
  }
  public set syncLimit(value: number) {
    this._syncLimit = value;
  }
  public resetSyncLimit() {
    this._syncLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncLimitInput() {
    return this._syncLimit;
  }

  // tick_time - computed: false, optional: true, required: false
  private _tickTime?: number; 
  public get tickTime() {
    return this.getNumberAttribute('tick_time');
  }
  public set tickTime(value: number) {
    this._tickTime = value;
  }
  public resetTickTime() {
    this._tickTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickTimeInput() {
    return this._tickTime;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#enabled DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#max_unavailable DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
    }
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#node_affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#node_selector DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pod_affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#level DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#config_map DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#level DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#level DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#console DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#custom DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#file DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#loggers DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#containers DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#enable_vector_agent DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#max DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#min DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#limit DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#runtime_limits DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#key DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#operator DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#values DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#match_expressions DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#match_labels DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#capacity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#selectors DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#storage_class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#data DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#cpu DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#memory DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#storage DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#affinity DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#init_limit DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#init_limit}
  */
  readonly initLimit?: number;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#logging DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#myid_offset DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#myid_offset}
  */
  readonly myidOffset?: number;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#resources DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#sync_limit DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#sync_limit}
  */
  readonly syncLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#tick_time DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#tick_time}
  */
  readonly tickTime?: number;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    init_limit: cdktf.numberToTerraform(struct!.initLimit),
    logging: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToTerraform(struct!.logging),
    myid_offset: cdktf.numberToTerraform(struct!.myidOffset),
    resources: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToTerraform(struct!.resources),
    sync_limit: cdktf.numberToTerraform(struct!.syncLimit),
    tick_time: cdktf.numberToTerraform(struct!.tickTime),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_limit: {
      value: cdktf.numberToHclTerraform(struct!.initLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging",
    },
    myid_offset: {
      value: cdktf.numberToHclTerraform(struct!.myidOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources",
    },
    sync_limit: {
      value: cdktf.numberToHclTerraform(struct!.syncLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tick_time: {
      value: cdktf.numberToHclTerraform(struct!.tickTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._initLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.initLimit = this._initLimit;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._myidOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.myidOffset = this._myidOffset;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._syncLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncLimit = this._syncLimit;
    }
    if (this._tickTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickTime = this._tickTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._initLimit = undefined;
      this._logging.internalValue = undefined;
      this._myidOffset = undefined;
      this._resources.internalValue = undefined;
      this._syncLimit = undefined;
      this._tickTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._initLimit = value.initLimit;
      this._logging.internalValue = value.logging;
      this._myidOffset = value.myidOffset;
      this._resources.internalValue = value.resources;
      this._syncLimit = value.syncLimit;
      this._tickTime = value.tickTime;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // init_limit - computed: false, optional: true, required: false
  private _initLimit?: number; 
  public get initLimit() {
    return this.getNumberAttribute('init_limit');
  }
  public set initLimit(value: number) {
    this._initLimit = value;
  }
  public resetInitLimit() {
    this._initLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initLimitInput() {
    return this._initLimit;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // myid_offset - computed: false, optional: true, required: false
  private _myidOffset?: number; 
  public get myidOffset() {
    return this.getNumberAttribute('myid_offset');
  }
  public set myidOffset(value: number) {
    this._myidOffset = value;
  }
  public resetMyidOffset() {
    this._myidOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myidOffsetInput() {
    return this._myidOffset;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sync_limit - computed: false, optional: true, required: false
  private _syncLimit?: number; 
  public get syncLimit() {
    return this.getNumberAttribute('sync_limit');
  }
  public set syncLimit(value: number) {
    this._syncLimit = value;
  }
  public resetSyncLimit() {
    this._syncLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncLimitInput() {
    return this._syncLimit;
  }

  // tick_time - computed: false, optional: true, required: false
  private _tickTime?: number; 
  public get tickTime() {
    return this.getNumberAttribute('tick_time');
  }
  public set tickTime(value: number) {
    this._tickTime = value;
  }
  public resetTickTime() {
    this._tickTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickTimeInput() {
    return this._tickTime;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#cli_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#config DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#config_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#env_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pod_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#replicas DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
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
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#cli_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#config DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#config_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#env_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#pod_overrides DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#role_config DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#role_groups DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_config: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig",
    },
    role_groups: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._roleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleConfig = this._roleConfig?.internalValue;
    }
    if (this._roleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroups = this._roleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._roleConfig.internalValue = undefined;
      this._roleGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._roleConfig.internalValue = value.roleConfig;
      this._roleGroups.internalValue = value.roleGroups;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // role_config - computed: false, optional: true, required: false
  private _roleConfig = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleConfig) {
    this._roleConfig.internalValue = value;
  }
  public resetRoleConfig() {
    this._roleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigInput() {
    return this._roleConfig.internalValue;
  }

  // role_groups - computed: false, optional: false, required: true
  private _roleGroups = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec {
  /**
  * Settings that affect all roles and role groups. The settings in the 'clusterConfig' are cluster wide settings that do not need to be configurable at role or role group level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#cluster_config DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig;
  /**
  * [Cluster operations](https://docs.stackable.tech/home/nightly/concepts/operations/cluster_operations) properties, allow stopping the product instance as well as pausing reconciliation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#cluster_operation DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#cluster_operation}
  */
  readonly clusterOperation?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation;
  /**
  * Specify which image to use, the easiest way is to only configure the 'productVersion'. You can also configure a custom image registry to pull from, as well as completely custom images. Consult the [Product image selection documentation](https://docs.stackable.tech/home/nightly/concepts/product_image_selection) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#image DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#image}
  */
  readonly image: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage;
  /**
  * This struct represents a role - e.g. HDFS datanodes or Trino workers. It has a key-value-map containing all the roleGroups that are part of this role. Additionally, there is a 'config', which is configurable at the role *and* roleGroup level. Everything at roleGroup level is merged on top of what is configured on role level. There is also a second form of config, which can only be configured at role level, the 'roleConfig'. You can learn more about this in the [Roles and role group concept documentation](https://docs.stackable.tech/home/nightly/concepts/roles-and-role-groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#servers DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest#servers}
  */
  readonly servers?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers;
}

export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cluster_operation: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct!.clusterOperation),
    image: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    servers: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersToTerraform(struct!.servers),
  }
}


export function dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig",
    },
    cluster_operation: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct!.clusterOperation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation",
    },
    image: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage",
    },
    servers: {
      value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersToHclTerraform(struct!.servers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._clusterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOperation = this._clusterOperation?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._clusterOperation.internalValue = undefined;
      this._image.internalValue = undefined;
      this._servers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._clusterOperation.internalValue = value.clusterOperation;
      this._image.internalValue = value.image;
      this._servers.internalValue = value.servers;
    }
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cluster_operation - computed: false, optional: true, required: false
  private _clusterOperation = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperationOutputReference(this, "cluster_operation");
  public get clusterOperation() {
    return this._clusterOperation;
  }
  public putClusterOperation(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecClusterOperation) {
    this._clusterOperation.internalValue = value;
  }
  public resetClusterOperation() {
    this._clusterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationInput() {
    return this._clusterOperation.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServersOutputReference(this, "servers");
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecServers) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest k8s_zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest}
*/
export class DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest k8s_zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_zookeeper_stackable_tech_zookeeper_cluster_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SZookeeperStackableTechZookeeperClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
