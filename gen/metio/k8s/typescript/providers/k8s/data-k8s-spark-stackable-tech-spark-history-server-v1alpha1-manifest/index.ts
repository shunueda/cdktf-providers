// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#metadata DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata;
  /**
  * A Spark cluster history server component. This resource is managed by the Stackable operator for Apache Spark. Find more information on how to use it in the [operator documentation](https://docs.stackable.tech/home/nightly/spark-k8s/usage-guide/history-server).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#spec DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec;
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#annotations DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#labels DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#name DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#namespace DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig {
  /**
  * This field controls which type of Service the Operator creates for this HistoryServer: * cluster-internal: Use a ClusterIP service * external-unstable: Use a NodePort service * external-stable: Use a LoadBalancer service This is a temporary solution with the goal to keep yaml manifests forward compatible. In the future, this setting will control which ListenerClass <https://docs.stackable.tech/home/stable/listener-operator/listenerclass.html> will be used to expose the service, and ListenerClass names will stay the same, allowing for a non-breaking change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#listener_class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerClass = value.listenerClass;
    }
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
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#name DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#custom DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#product_version DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pull_policy DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pull_secrets DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#repo DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#stackable_version DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsList",
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
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
  private _pullSecrets = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope {
  /**
  * The listener volume scope allows Node and Service scopes to be inferred from the applicable listeners. This must correspond to Volume names in the Pod that mount Listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#listener_volumes DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#listener_volumes}
  */
  readonly listenerVolumes?: string[];
  /**
  * The node scope is resolved to the name of the Kubernetes Node object that the Pod is running on. This will typically be the DNS name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#node DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * The pod scope is resolved to the name of the Kubernetes Pod. This allows the secret to differentiate between StatefulSet replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * The service scope allows Pod objects to specify custom scopes. This should typically correspond to Service objects that the Pod participates in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#services DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerVolumes),
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listenerVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerVolumes = this._listenerVolumes;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerVolumes = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerVolumes = value.listenerVolumes;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // listener_volumes - computed: false, optional: true, required: false
  private _listenerVolumes?: string[]; 
  public get listenerVolumes() {
    return this.getListAttribute('listener_volumes');
  }
  public set listenerVolumes(value: string[]) {
    this._listenerVolumes = value;
  }
  public resetListenerVolumes() {
    this._listenerVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerVolumesInput() {
    return this._listenerVolumes;
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials {
  /**
  * [Scope](https://docs.stackable.tech/home/nightly/secret-operator/scope) of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#scope DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) containing the LDAP bind credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#secret_class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#secret_class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#web_pki DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#ca_cert DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#none DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#server DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#verification DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline {
  /**
  * Which access style to use. Defaults to virtual hosted-style as most of the data products out there. Have a look at the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#access_style DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#access_style}
  */
  readonly accessStyle?: string;
  /**
  * If the S3 uses authentication you have to specify you S3 credentials. In the most cases a [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) providing 'accessKey' and 'secretKey' is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#credentials DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials;
  /**
  * Host of the S3 server without any protocol or port. For example: 'west1.my-cloud.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#host DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Port the S3 server listens on. If not specified the product will determine the port to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#port DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Use a TLS connection. If not specified no TLS will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#tls DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_style: cdktf.stringToTerraform(struct!.accessStyle),
    credentials: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToTerraform(struct!.tls),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_style: {
      value: cdktf.stringToHclTerraform(struct!.accessStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    tls: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStyle = this._accessStyle;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStyle = undefined;
      this._credentials.internalValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStyle = value.accessStyle;
      this._credentials.internalValue = value.credentials;
      this._host = value.host;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // access_style - computed: false, optional: true, required: false
  private _accessStyle?: string; 
  public get accessStyle() {
    return this.getStringAttribute('access_style');
  }
  public set accessStyle(value: string) {
    this._accessStyle = value;
  }
  public resetAccessStyle() {
    this._accessStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStyleInput() {
    return this._accessStyle;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection {
  /**
  * S3 connection definition as a resource. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#inline DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#reference DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline {
  /**
  * The name of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#bucket_name DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The definition of an S3 connection, either inline or as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#connection DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#connection}
  */
  readonly connection: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    connection: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToTerraform(struct!.connection),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._connection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._connection.internalValue = value.connection;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // connection - computed: false, optional: false, required: true
  private _connection = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection) {
    this._connection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket {
  /**
  * S3 bucket specification containing the bucket name and an inlined or referenced connection specification. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#inline DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#reference DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#bucket DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#bucket}
  */
  readonly bucket: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#prefix DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#prefix}
  */
  readonly prefix: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3ToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketToTerraform(struct!.bucket),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3ToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketToHclTerraform(struct!.bucket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket.internalValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket.internalValue = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3BucketOutputReference(this, "bucket");
  public get bucket() {
    return this._bucket;
  }
  public putBucket(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3Bucket) {
    this._bucket.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket.internalValue;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#s3 DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3ToTerraform(struct!.s3),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#node_affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#node_selector DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod_affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod_anti_affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinityToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinityToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#level DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#config_map DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#level DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#level DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#console DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#custom DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#file DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#loggers DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom) {
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
  private _file = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#containers DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#enable_vector_agent DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers",
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingContainers) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#max DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#min DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpuToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpuToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#limit DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#runtime_limits DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemoryToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemoryToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#cpu DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#memory DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#storage DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu",
    },
    memory: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesCpu) {
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
  private _memory = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#cleaner DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#cleaner}
  */
  readonly cleaner?: boolean | cdktf.IResolvable;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#logging DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#resources DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinityToTerraform(struct!.affinity),
    cleaner: cdktf.booleanToTerraform(struct!.cleaner),
    logging: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity",
    },
    cleaner: {
      value: cdktf.booleanToHclTerraform(struct!.cleaner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging",
    },
    resources: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._cleaner !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleaner = this._cleaner;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._cleaner = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._cleaner = value.cleaner;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // cleaner - computed: false, optional: true, required: false
  private _cleaner?: boolean | cdktf.IResolvable; 
  public get cleaner() {
    return this.getBooleanAttribute('cleaner');
  }
  public set cleaner(value: boolean | cdktf.IResolvable) {
    this._cleaner = value;
  }
  public resetCleaner() {
    this._cleaner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanerInput() {
    return this._cleaner;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigResources) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#enabled DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#max_unavailable DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod_disruption_budget DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable | undefined) {
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
  private _podDisruptionBudget = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#node_affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#node_selector DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod_affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod_anti_affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#level DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#config_map DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#level DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#level DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#console DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#custom DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#file DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#loggers DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#containers DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#enable_vector_agent DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers",
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#max DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#min DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#limit DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#runtime_limits DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#cpu DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#memory DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#storage DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu) {
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
  private _memory = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#affinity DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#cleaner DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#cleaner}
  */
  readonly cleaner?: boolean | cdktf.IResolvable;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#logging DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#resources DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    cleaner: cdktf.booleanToTerraform(struct!.cleaner),
    logging: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity",
    },
    cleaner: {
      value: cdktf.booleanToHclTerraform(struct!.cleaner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._cleaner !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleaner = this._cleaner;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._cleaner = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._cleaner = value.cleaner;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // cleaner - computed: false, optional: true, required: false
  private _cleaner?: boolean | cdktf.IResolvable; 
  public get cleaner() {
    return this.getBooleanAttribute('cleaner');
  }
  public set cleaner(value: boolean | cdktf.IResolvable) {
    this._cleaner = value;
  }
  public resetCleaner() {
    this._cleaner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanerInput() {
    return this._cleaner;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigResources) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#cli_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#config DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#config_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#env_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#replicas DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable): any {
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
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig",
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsConfig) {
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
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#cli_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#config DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#config_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#env_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#pod_overrides DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#role_config DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#role_groups DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes | cdktf.IResolvable): any {
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
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig",
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
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig",
    },
    role_groups: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesConfig) {
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
  private _roleConfig = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleConfig) {
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
  private _roleGroups = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec {
  /**
  * Global Spark history server configuration that applies to all roles and role groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#cluster_config DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig;
  /**
  * Specify which image to use, the easiest way is to only configure the 'productVersion'. You can also configure a custom image registry to pull from, as well as completely custom images. Consult the [Product image selection documentation](https://docs.stackable.tech/home/nightly/concepts/product_image_selection) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#image DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#image}
  */
  readonly image: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage;
  /**
  * The log file directory definition used by the Spark history server. Currently only S3 buckets are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#log_file_directory DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#log_file_directory}
  */
  readonly logFileDirectory: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory;
  /**
  * A history server node role definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#nodes DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#nodes}
  */
  readonly nodes: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes;
  /**
  * A map of key/value strings that will be passed directly to Spark when deploying the history server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#spark_conf DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Name of the Vector aggregator discovery ConfigMap. It must contain the key 'ADDRESS' with the address of the Vector aggregator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
}

export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    image: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    log_file_directory: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryToTerraform(struct!.logFileDirectory),
    nodes: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesToTerraform(struct!.nodes),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
  }
}


export function dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig",
    },
    image: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage",
    },
    log_file_directory: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryToHclTerraform(struct!.logFileDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory",
    },
    nodes: {
      value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesToHclTerraform(struct!.nodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes",
    },
    spark_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._logFileDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFileDirectory = this._logFileDirectory?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._image.internalValue = undefined;
      this._logFileDirectory.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._sparkConf = undefined;
      this._vectorAggregatorConfigMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._image.internalValue = value.image;
      this._logFileDirectory.internalValue = value.logFileDirectory;
      this._nodes.internalValue = value.nodes;
      this._sparkConf = value.sparkConf;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
    }
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // log_file_directory - computed: false, optional: false, required: true
  private _logFileDirectory = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectoryOutputReference(this, "log_file_directory");
  public get logFileDirectory() {
    return this._logFileDirectory;
  }
  public putLogFileDirectory(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecLogFileDirectory) {
    this._logFileDirectory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileDirectoryInput() {
    return this._logFileDirectory.internalValue;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecNodes) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // spark_conf - computed: false, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest k8s_spark_stackable_tech_spark_history_server_v1alpha1_manifest}
*/
export class DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_spark_stackable_tech_spark_history_server_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSparkStackableTechSparkHistoryServerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_spark_stackable_tech_spark_history_server_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/spark_stackable_tech_spark_history_server_v1alpha1_manifest k8s_spark_stackable_tech_spark_history_server_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_spark_stackable_tech_spark_history_server_v1alpha1_manifest',
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
  private _metadata = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSparkStackableTechSparkHistoryServerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
