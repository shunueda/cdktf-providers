// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#metadata DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#metadata}
  */
  readonly metadata: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata;
  /**
  * NodeFeatureDiscoverySpec defines the desired state of NodeFeatureDiscovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#spec DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#spec}
  */
  readonly spec?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec;
}
export interface DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#annotations DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#labels DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#name DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#namespace DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadataToTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadataToHclTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand {
  /**
  * Image defines the image to pull for the NFD operand [defaults to registry.k8s.io/nfd/node-feature-discovery]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#image DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#image}
  */
  readonly image?: string;
  /**
  * ImagePullPolicy defines Image pull policy for the NFD operand image [defaults to Always]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#image_pull_policy DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * ServicePort specifies the TCP port that nfd-master listens for incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#service_port DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#service_port}
  */
  readonly servicePort?: number;
}

export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperandToTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
  }
}


export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperandToHclTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._servicePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._servicePort = value.servicePort;
    }
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

  // service_port - computed: false, optional: true, required: false
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  public resetServicePort() {
    this._servicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }
}
export interface DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig {
  /**
  * BinaryData holds the NFD configuration file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#config_data DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#config_data}
  */
  readonly configData: string;
}

export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfigToTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_data: cdktf.stringToTerraform(struct!.configData),
  }
}


export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfigToHclTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_data: {
      value: cdktf.stringToHclTerraform(struct!.configData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configData !== undefined) {
      hasAnyValues = true;
      internalValueResult.configData = this._configData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configData = value.configData;
    }
  }

  // config_data - computed: false, optional: false, required: true
  private _configData?: string; 
  public get configData() {
    return this.getStringAttribute('config_data');
  }
  public set configData(value: string) {
    this._configData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configDataInput() {
    return this._configData;
  }
}
export interface DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec {
  /**
  * EnableTaints enables the enable the experimental tainting feature This allows keeping nodes with specialized hardware away from running general workload i and instead leave them for workloads that need the specialized hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#enable_taints DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#enable_taints}
  */
  readonly enableTaints?: boolean | cdktf.IResolvable;
  /**
  * ExtraLabelNs defines the list of of allowed extra label namespaces By default, only allow labels in the default 'feature.node.kubernetes.io' label namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#extra_label_ns DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#extra_label_ns}
  */
  readonly extraLabelNs?: string[];
  /**
  * Instance name. Used to separate annotation namespaces for multiple parallel deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#instance DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#instance}
  */
  readonly instance?: string;
  /**
  * LabelWhiteList defines a regular expression for filtering feature labels based on their name. Each label must match against the given reqular expression in order to be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#label_white_list DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#label_white_list}
  */
  readonly labelWhiteList?: string;
  /**
  * OperandSpec describes configuration options for the operand
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#operand DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#operand}
  */
  readonly operand?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand;
  /**
  * PruneOnDelete defines whether the NFD-master prune should be enabled or not. If enabled, the Operator will deploy an NFD-Master prune job that will remove all NFD labels (and other NFD-managed assets such as annotations, extended resources and taints) from the cluster nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#pruner_on_delete DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#pruner_on_delete}
  */
  readonly prunerOnDelete?: boolean | cdktf.IResolvable;
  /**
  * ResourceLabels defines the list of features to be advertised as extended resources instead of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#resource_labels DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#resource_labels}
  */
  readonly resourceLabels?: string[];
  /**
  * Deploy the NFD-Topology-Updater NFD-Topology-Updater is a daemon responsible for examining allocated resources on a worker node to account for resources available to be allocated to new pod on a per-zone basis https://kubernetes-sigs.github.io/node-feature-discovery/master/get-started/introduction.html#nfd-topology-updater
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#topology_updater DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#topology_updater}
  */
  readonly topologyUpdater?: boolean | cdktf.IResolvable;
  /**
  * WorkerConfig describes configuration options for the NFD worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#worker_config DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest#worker_config}
  */
  readonly workerConfig?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig;
}

export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecToTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_taints: cdktf.booleanToTerraform(struct!.enableTaints),
    extra_label_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraLabelNs),
    instance: cdktf.stringToTerraform(struct!.instance),
    label_white_list: cdktf.stringToTerraform(struct!.labelWhiteList),
    operand: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperandToTerraform(struct!.operand),
    pruner_on_delete: cdktf.booleanToTerraform(struct!.prunerOnDelete),
    resource_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceLabels),
    topology_updater: cdktf.booleanToTerraform(struct!.topologyUpdater),
    worker_config: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfigToTerraform(struct!.workerConfig),
  }
}


export function dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecToHclTerraform(struct?: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_taints: {
      value: cdktf.booleanToHclTerraform(struct!.enableTaints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_label_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraLabelNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_white_list: {
      value: cdktf.stringToHclTerraform(struct!.labelWhiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operand: {
      value: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperandToHclTerraform(struct!.operand),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand",
    },
    pruner_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.prunerOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_updater: {
      value: cdktf.booleanToHclTerraform(struct!.topologyUpdater),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_config: {
      value: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfigToHclTerraform(struct!.workerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTaints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTaints = this._enableTaints;
    }
    if (this._extraLabelNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraLabelNs = this._extraLabelNs;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._labelWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelWhiteList = this._labelWhiteList;
    }
    if (this._operand?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand = this._operand?.internalValue;
    }
    if (this._prunerOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.prunerOnDelete = this._prunerOnDelete;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._topologyUpdater !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyUpdater = this._topologyUpdater;
    }
    if (this._workerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConfig = this._workerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableTaints = undefined;
      this._extraLabelNs = undefined;
      this._instance = undefined;
      this._labelWhiteList = undefined;
      this._operand.internalValue = undefined;
      this._prunerOnDelete = undefined;
      this._resourceLabels = undefined;
      this._topologyUpdater = undefined;
      this._workerConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableTaints = value.enableTaints;
      this._extraLabelNs = value.extraLabelNs;
      this._instance = value.instance;
      this._labelWhiteList = value.labelWhiteList;
      this._operand.internalValue = value.operand;
      this._prunerOnDelete = value.prunerOnDelete;
      this._resourceLabels = value.resourceLabels;
      this._topologyUpdater = value.topologyUpdater;
      this._workerConfig.internalValue = value.workerConfig;
    }
  }

  // enable_taints - computed: false, optional: true, required: false
  private _enableTaints?: boolean | cdktf.IResolvable; 
  public get enableTaints() {
    return this.getBooleanAttribute('enable_taints');
  }
  public set enableTaints(value: boolean | cdktf.IResolvable) {
    this._enableTaints = value;
  }
  public resetEnableTaints() {
    this._enableTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTaintsInput() {
    return this._enableTaints;
  }

  // extra_label_ns - computed: false, optional: true, required: false
  private _extraLabelNs?: string[]; 
  public get extraLabelNs() {
    return this.getListAttribute('extra_label_ns');
  }
  public set extraLabelNs(value: string[]) {
    this._extraLabelNs = value;
  }
  public resetExtraLabelNs() {
    this._extraLabelNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraLabelNsInput() {
    return this._extraLabelNs;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // label_white_list - computed: false, optional: true, required: false
  private _labelWhiteList?: string; 
  public get labelWhiteList() {
    return this.getStringAttribute('label_white_list');
  }
  public set labelWhiteList(value: string) {
    this._labelWhiteList = value;
  }
  public resetLabelWhiteList() {
    this._labelWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelWhiteListInput() {
    return this._labelWhiteList;
  }

  // operand - computed: false, optional: true, required: false
  private _operand = new DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperandOutputReference(this, "operand");
  public get operand() {
    return this._operand;
  }
  public putOperand(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOperand) {
    this._operand.internalValue = value;
  }
  public resetOperand() {
    this._operand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandInput() {
    return this._operand.internalValue;
  }

  // pruner_on_delete - computed: false, optional: true, required: false
  private _prunerOnDelete?: boolean | cdktf.IResolvable; 
  public get prunerOnDelete() {
    return this.getBooleanAttribute('pruner_on_delete');
  }
  public set prunerOnDelete(value: boolean | cdktf.IResolvable) {
    this._prunerOnDelete = value;
  }
  public resetPrunerOnDelete() {
    this._prunerOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prunerOnDeleteInput() {
    return this._prunerOnDelete;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: string[]; 
  public get resourceLabels() {
    return this.getListAttribute('resource_labels');
  }
  public set resourceLabels(value: string[]) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // topology_updater - computed: false, optional: true, required: false
  private _topologyUpdater?: boolean | cdktf.IResolvable; 
  public get topologyUpdater() {
    return this.getBooleanAttribute('topology_updater');
  }
  public set topologyUpdater(value: boolean | cdktf.IResolvable) {
    this._topologyUpdater = value;
  }
  public resetTopologyUpdater() {
    this._topologyUpdater = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUpdaterInput() {
    return this._topologyUpdater;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfigOutputReference(this, "worker_config");
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest k8s_nfd_kubernetes_io_node_feature_discovery_v1_manifest}
*/
export class DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_nfd_kubernetes_io_node_feature_discovery_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest to import
  * @param importFromId The id of the existing DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_nfd_kubernetes_io_node_feature_discovery_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nfd_kubernetes_io_node_feature_discovery_v1_manifest k8s_nfd_kubernetes_io_node_feature_discovery_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_nfd_kubernetes_io_node_feature_discovery_v1_manifest',
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
  private _metadata = new DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec) {
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
      metadata: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestMetadata",
      },
      spec: {
        value: dataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNfdKubernetesIoNodeFeatureDiscoveryV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
