// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#metadata DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata;
  /**
  * An Airflow cluster stacklet. This resource is managed by the Stackable operator for Apache Airflow. Find more information on how to use it and the resources that the operator generates in the [operator documentation](https://docs.stackable.tech/home/nightly/airflow/). The CRD contains three roles: webserver, scheduler and worker/celeryExecutor. You can use either the celeryExecutor or the kubernetesExecutor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#spec DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec;
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#annotations DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#labels DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#name DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#namespace DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_selector DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinityToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinityToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_map DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustomToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFileToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#console DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#file DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#loggers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersLoggers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#containers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enable_vector_agent DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingContainers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#min DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpuToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpuToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#limit DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#runtime_limits DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemoryToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemoryToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cpu DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#memory DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#storage DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources | cdktf.IResolvable | undefined) {
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
  private _cpu = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesCpu) {
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
  private _memory = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesMemory) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#logging DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#resources DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging",
    },
    resources: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
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
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigAffinity) {
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigLogging) {
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
  private _resources = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigResources) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enabled DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max_unavailable DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig | cdktf.IResolvable | undefined) {
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
  private _podDisruptionBudget = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigPodDisruptionBudget) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_selector DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinityToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_map DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#console DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#file DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#loggers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersLoggers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#containers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enable_vector_agent DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingContainers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#min DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#limit DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#runtime_limits DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cpu DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#memory DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#storage DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
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
  private _cpu = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesCpu) {
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
  private _memory = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesMemory) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#logging DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#resources DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
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
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigAffinity) {
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigLogging) {
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
  private _resources = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigResources) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cli_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#env_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#replicas DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups | cdktf.IResolvable): any {
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsConfig) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cli_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#env_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#role_config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#role_groups DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors | cdktf.IResolvable): any {
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig",
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig",
    },
    role_groups: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsConfig) {
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
  private _roleConfig = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleConfig) {
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
  private _roleGroups = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication {
  /**
  * Name of the [AuthenticationClass](https://docs.stackable.tech/home/nightly/concepts/authentication.html#authenticationclass) used to authenticate the users. At the moment only LDAP is supported. If not specified the default authentication (AUTH_DB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#authentication_class DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#authentication_class}
  */
  readonly authenticationClass?: string;
  /**
  * If we should replace ALL the user's roles each login, or only on registration. Gets mapped to 'AUTH_ROLES_SYNC_AT_LOGIN'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#sync_roles_at DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#sync_roles_at}
  */
  readonly syncRolesAt?: string;
  /**
  * Allow users who are not already in the FAB DB. Gets mapped to 'AUTH_USER_REGISTRATION'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#user_registration DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#user_registration}
  */
  readonly userRegistration?: boolean | cdktf.IResolvable;
  /**
  * This role will be given in addition to any AUTH_ROLES_MAPPING. Gets mapped to 'AUTH_USER_REGISTRATION_ROLE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#user_registration_role DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#user_registration_role}
  */
  readonly userRegistrationRole?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_class: cdktf.stringToTerraform(struct!.authenticationClass),
    sync_roles_at: cdktf.stringToTerraform(struct!.syncRolesAt),
    user_registration: cdktf.booleanToTerraform(struct!.userRegistration),
    user_registration_role: cdktf.stringToTerraform(struct!.userRegistrationRole),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
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
    sync_roles_at: {
      value: cdktf.stringToHclTerraform(struct!.syncRolesAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_registration: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_role: {
      value: cdktf.stringToHclTerraform(struct!.userRegistrationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationClass = this._authenticationClass;
    }
    if (this._syncRolesAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRolesAt = this._syncRolesAt;
    }
    if (this._userRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistration = this._userRegistration;
    }
    if (this._userRegistrationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationRole = this._userRegistrationRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationClass = undefined;
      this._syncRolesAt = undefined;
      this._userRegistration = undefined;
      this._userRegistrationRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationClass = value.authenticationClass;
      this._syncRolesAt = value.syncRolesAt;
      this._userRegistration = value.userRegistration;
      this._userRegistrationRole = value.userRegistrationRole;
    }
  }

  // authentication_class - computed: false, optional: true, required: false
  private _authenticationClass?: string; 
  public get authenticationClass() {
    return this.getStringAttribute('authentication_class');
  }
  public set authenticationClass(value: string) {
    this._authenticationClass = value;
  }
  public resetAuthenticationClass() {
    this._authenticationClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClassInput() {
    return this._authenticationClass;
  }

  // sync_roles_at - computed: false, optional: true, required: false
  private _syncRolesAt?: string; 
  public get syncRolesAt() {
    return this.getStringAttribute('sync_roles_at');
  }
  public set syncRolesAt(value: string) {
    this._syncRolesAt = value;
  }
  public resetSyncRolesAt() {
    this._syncRolesAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRolesAtInput() {
    return this._syncRolesAt;
  }

  // user_registration - computed: false, optional: true, required: false
  private _userRegistration?: boolean | cdktf.IResolvable; 
  public get userRegistration() {
    return this.getBooleanAttribute('user_registration');
  }
  public set userRegistration(value: boolean | cdktf.IResolvable) {
    this._userRegistration = value;
  }
  public resetUserRegistration() {
    this._userRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationInput() {
    return this._userRegistration;
  }

  // user_registration_role - computed: false, optional: true, required: false
  private _userRegistrationRole?: string; 
  public get userRegistrationRole() {
    return this.getStringAttribute('user_registration_role');
  }
  public set userRegistrationRole(value: string) {
    this._userRegistrationRole = value;
  }
  public resetUserRegistrationRole() {
    this._userRegistrationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationRoleInput() {
    return this._userRegistrationRole;
  }
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList extends cdktf.ComplexList {
  public internalValue? : DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference {
    return new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync {
  /**
  * The branch to clone. Defaults to 'main'. Since git-sync v4.x.x this field is mapped to the flag '--ref'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#branch DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#branch}
  */
  readonly branch?: string;
  /**
  * The name of the Secret used to access the repository if it is not public. This should include two fields: 'user' and 'password'. The 'password' field can either be an actual password (not recommended) or a GitHub token, as described [here](https://github.com/kubernetes/git-sync/tree/v4.2.4?tab=readme-ov-file#manual).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#credentials_secret DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * The depth of syncing i.e. the number of commits to clone; defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#depth DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#depth}
  */
  readonly depth?: number;
  /**
  * The location of the DAG folder, relative to the synced repository root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#git_folder DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#git_folder}
  */
  readonly gitFolder?: string;
  /**
  * A map of optional configuration settings that are listed in the [git-sync documentation](https://github.com/kubernetes/git-sync/tree/v4.2.4?tab=readme-ov-file#manual). Read the [git sync example](https://docs.stackable.tech/home/nightly/airflow/usage-guide/mounting-dags#_example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#git_sync_conf DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#git_sync_conf}
  */
  readonly gitSyncConf?: { [key: string]: string };
  /**
  * The git repository URL that will be cloned, for example: 'https://github.com/stackabletech/airflow-operator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#repo DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#repo}
  */
  readonly repo: string;
  /**
  * The synchronization interval in seconds; defaults to 20 seconds. Since git-sync v4.x.x this field is mapped to the flag '--period'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#wait DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#wait}
  */
  readonly wait?: number;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    depth: cdktf.numberToTerraform(struct!.depth),
    git_folder: cdktf.stringToTerraform(struct!.gitFolder),
    git_sync_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.gitSyncConf),
    repo: cdktf.stringToTerraform(struct!.repo),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync | cdktf.IResolvable): any {
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
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    git_folder: {
      value: cdktf.stringToHclTerraform(struct!.gitFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_sync_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.gitSyncConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._gitFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitFolder = this._gitFolder;
    }
    if (this._gitSyncConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSyncConf = this._gitSyncConf;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._credentialsSecret = undefined;
      this._depth = undefined;
      this._gitFolder = undefined;
      this._gitSyncConf = undefined;
      this._repo = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._credentialsSecret = value.credentialsSecret;
      this._depth = value.depth;
      this._gitFolder = value.gitFolder;
      this._gitSyncConf = value.gitSyncConf;
      this._repo = value.repo;
      this._wait = value.wait;
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

  // credentials_secret - computed: false, optional: true, required: false
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  public resetCredentialsSecret() {
    this._credentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // git_folder - computed: false, optional: true, required: false
  private _gitFolder?: string; 
  public get gitFolder() {
    return this.getStringAttribute('git_folder');
  }
  public set gitFolder(value: string) {
    this._gitFolder = value;
  }
  public resetGitFolder() {
    this._gitFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitFolderInput() {
    return this._gitFolder;
  }

  // git_sync_conf - computed: false, optional: true, required: false
  private _gitSyncConf?: { [key: string]: string }; 
  public get gitSyncConf() {
    return this.getStringMapAttribute('git_sync_conf');
  }
  public set gitSyncConf(value: { [key: string]: string }) {
    this._gitSyncConf = value;
  }
  public resetGitSyncConf() {
    this._gitSyncConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSyncConfInput() {
    return this._gitSyncConf;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncList extends cdktf.ComplexList {
  public internalValue? : DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncOutputReference {
    return new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig {
  /**
  * The Airflow [authentication](https://docs.stackable.tech/home/nightly/airflow/usage-guide/security.html) settings. Currently the underlying Flask App Builder only supports one authentication mechanism at a time. This means the operator will error out if multiple references to an AuthenticationClass are provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#authentication DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#authentication}
  */
  readonly authentication?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable;
  /**
  * The name of the Secret object containing the admin user credentials and database connection details. Read the [getting started guide first steps](https://docs.stackable.tech/home/nightly/airflow/getting_started/first_steps) to find out more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#credentials_secret DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#credentials_secret}
  */
  readonly credentialsSecret: string;
  /**
  * The 'gitSync' settings allow configuring DAGs to mount via 'git-sync'. Learn more in the [mounting DAGs documentation](https://docs.stackable.tech/home/nightly/airflow/usage-guide/mounting-dags#_via_git_sync).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#dags_git_sync DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#dags_git_sync}
  */
  readonly dagsGitSync?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync[] | cdktf.IResolvable;
  /**
  * for internal use only - not for production use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#expose_config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#expose_config}
  */
  readonly exposeConfig?: boolean | cdktf.IResolvable;
  /**
  * This field controls which type of Service the Operator creates for this AirflowCluster: * cluster-internal: Use a ClusterIP service * external-unstable: Use a NodePort service * external-stable: Use a LoadBalancer service This is a temporary solution with the goal to keep yaml manifests forward compatible. In the future, this setting will control which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) will be used to expose the service, and ListenerClass names will stay the same, allowing for a non-breaking change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#listener_class DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Whether to load example DAGs or not; defaults to false. The examples are used in the [getting started guide](https://docs.stackable.tech/home/nightly/airflow/getting_started/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#load_examples DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#load_examples}
  */
  readonly loadExamples?: boolean | cdktf.IResolvable;
  /**
  * Name of the Vector aggregator [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery). It must contain the key 'ADDRESS' with the address of the Vector aggregator. Follow the [logging tutorial](https://docs.stackable.tech/home/nightly/tutorials/logging-vector-aggregator) to learn how to configure log aggregation with Vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
  /**
  * Additional volumes to mount. Use together with 'volumes' to define volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#volume_mounts DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Additional volumes to define. Use together with 'volumeMounts' to mount the volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#volumes DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#volumes}
  */
  readonly volumes?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform, false)(struct!.authentication),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    dags_git_sync: cdktf.listMapper(dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncToTerraform, false)(struct!.dagsGitSync),
    expose_config: cdktf.booleanToTerraform(struct!.exposeConfig),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    load_examples: cdktf.booleanToTerraform(struct!.loadExamples),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
    volume_mounts: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumes),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform, false)(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList",
    },
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dags_git_sync: {
      value: cdktf.listMapperHcl(dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncToHclTerraform, false)(struct!.dagsGitSync),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncList",
    },
    expose_config: {
      value: cdktf.booleanToHclTerraform(struct!.exposeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_examples: {
      value: cdktf.booleanToHclTerraform(struct!.loadExamples),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vector_aggregator_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.vectorAggregatorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumeMounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._dagsGitSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dagsGitSync = this._dagsGitSync?.internalValue;
    }
    if (this._exposeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeConfig = this._exposeConfig;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._loadExamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadExamples = this._loadExamples;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    if (this._volumeMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._credentialsSecret = undefined;
      this._dagsGitSync.internalValue = undefined;
      this._exposeConfig = undefined;
      this._listenerClass = undefined;
      this._loadExamples = undefined;
      this._vectorAggregatorConfigMapName = undefined;
      this._volumeMounts = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._credentialsSecret = value.credentialsSecret;
      this._dagsGitSync.internalValue = value.dagsGitSync;
      this._exposeConfig = value.exposeConfig;
      this._listenerClass = value.listenerClass;
      this._loadExamples = value.loadExamples;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
      this._volumeMounts = value.volumeMounts;
      this._volumes = value.volumes;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // credentials_secret - computed: false, optional: false, required: true
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // dags_git_sync - computed: false, optional: true, required: false
  private _dagsGitSync = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSyncList(this, "dags_git_sync", false);
  public get dagsGitSync() {
    return this._dagsGitSync;
  }
  public putDagsGitSync(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigDagsGitSync[] | cdktf.IResolvable) {
    this._dagsGitSync.internalValue = value;
  }
  public resetDagsGitSync() {
    this._dagsGitSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagsGitSyncInput() {
    return this._dagsGitSync.internalValue;
  }

  // expose_config - computed: false, optional: true, required: false
  private _exposeConfig?: boolean | cdktf.IResolvable; 
  public get exposeConfig() {
    return this.getBooleanAttribute('expose_config');
  }
  public set exposeConfig(value: boolean | cdktf.IResolvable) {
    this._exposeConfig = value;
  }
  public resetExposeConfig() {
    this._exposeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeConfigInput() {
    return this._exposeConfig;
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

  // load_examples - computed: false, optional: true, required: false
  private _loadExamples?: boolean | cdktf.IResolvable; 
  public get loadExamples() {
    return this.getBooleanAttribute('load_examples');
  }
  public set loadExamples(value: boolean | cdktf.IResolvable) {
    this._loadExamples = value;
  }
  public resetLoadExamples() {
    this._loadExamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadExamplesInput() {
    return this._loadExamples;
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

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumeMounts() {
    return this.interpolationForAttribute('volume_mounts');
  }
  public set volumeMounts(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumeMounts = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumes() {
    return this.interpolationForAttribute('volumes');
  }
  public set volumes(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation {
  /**
  * Flag to stop cluster reconciliation by the operator. This means that all changes in the custom resource spec are ignored until this flag is set to false or removed. The operator will however still watch the deployed resources at the time and update the custom resource status field. If applied at the same time with 'stopped', 'reconciliationPaused' will take precedence over 'stopped' and stop the reconciliation immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#reconciliation_paused DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#reconciliation_paused}
  */
  readonly reconciliationPaused?: boolean | cdktf.IResolvable;
  /**
  * Flag to stop the cluster. This means all deployed resources (e.g. Services, StatefulSets, ConfigMaps) are kept but all deployed Pods (e.g. replicas from a StatefulSet) are scaled to 0 and therefore stopped and removed. If applied at the same time with 'reconciliationPaused', the latter will pause reconciliation and 'stopped' will take no effect until 'reconciliationPaused' is set to false or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#stopped DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciliation_paused: cdktf.booleanToTerraform(struct!.reconciliationPaused),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#name DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#product_version DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pull_policy DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pull_secrets DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#repo DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#stackable_version DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsList",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
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
  private _pullSecrets = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_selector DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinityToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinityToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_map DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustomToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFileToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#console DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#file DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#loggers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersLoggers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#containers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enable_vector_agent DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingContainers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#min DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpuToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpuToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#limit DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#runtime_limits DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemoryToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemoryToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cpu DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#memory DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#storage DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources | cdktf.IResolvable | undefined) {
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
  private _cpu = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesCpu) {
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
  private _memory = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesMemory) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#logging DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#resources DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging",
    },
    resources: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
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
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigAffinity) {
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigLogging) {
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
  private _resources = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigResources) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cli_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#env_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors | cdktf.IResolvable): any {
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
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
  private _config = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsConfig) {
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
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_selector DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinityToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinityToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsoleToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_map DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustomToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFileToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFileToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#console DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#file DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#loggers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersCustom) {
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
  private _file = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersLoggers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#containers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enable_vector_agent DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingContainers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#min DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpuToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpuToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#limit DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#runtime_limits DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemoryToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemoryToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cpu DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#memory DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#storage DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu",
    },
    memory: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources | cdktf.IResolvable | undefined) {
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
  private _cpu = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesCpu) {
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
  private _memory = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesMemory) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#logging DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#resources DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging",
    },
    resources: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
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
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigAffinity) {
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigLogging) {
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
  private _resources = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigResources) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enabled DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max_unavailable DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig | cdktf.IResolvable | undefined) {
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
  private _podDisruptionBudget = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigPodDisruptionBudget) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_selector DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinityToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_map DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#console DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#file DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#loggers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersLoggers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#containers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enable_vector_agent DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingContainers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#min DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#limit DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#runtime_limits DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cpu DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#memory DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#storage DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
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
  private _cpu = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesCpu) {
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
  private _memory = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesMemory) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#logging DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#resources DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
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
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigAffinity) {
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigLogging) {
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
  private _resources = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigResources) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cli_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#env_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#replicas DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups | cdktf.IResolvable): any {
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsConfig) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cli_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#env_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#role_config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#role_groups DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers | cdktf.IResolvable): any {
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig",
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig",
    },
    role_groups: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersConfig) {
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
  private _roleConfig = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleConfig) {
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
  private _roleGroups = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_selector DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinityToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinityToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsoleToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_map DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustomToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFileToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFileToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#console DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#file DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#loggers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersCustom) {
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
  private _file = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersLoggers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#containers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enable_vector_agent DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingContainers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#min DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpuToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpuToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#limit DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#runtime_limits DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemoryToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemoryToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cpu DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#memory DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#storage DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu",
    },
    memory: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources | cdktf.IResolvable | undefined) {
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
  private _cpu = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesCpu) {
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
  private _memory = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesMemory) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#logging DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#resources DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging",
    },
    resources: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
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
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigAffinity) {
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigLogging) {
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
  private _resources = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigResources) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enabled DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max_unavailable DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig | cdktf.IResolvable | undefined) {
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
  private _podDisruptionBudget = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigPodDisruptionBudget) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#node_selector DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinityToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_map DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#level DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#console DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#custom DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#file DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#loggers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersLoggers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#containers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#enable_vector_agent DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingContainers) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#max DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#min DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#limit DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#runtime_limits DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cpu DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#memory DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#storage DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
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
  private _cpu = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesCpu) {
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
  private _memory = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesMemory) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#affinity DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#logging DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#resources DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
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
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigAffinity) {
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigLogging) {
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
  private _resources = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigResources) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cli_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#env_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#replicas DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups | cdktf.IResolvable): any {
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig",
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

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsConfig) {
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
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cli_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#config_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#env_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#pod_overrides DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#role_config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#role_groups DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers | cdktf.IResolvable): any {
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig",
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
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig",
    },
    role_groups: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversConfig) {
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
  private _roleConfig = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleConfig) {
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
  private _roleGroups = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec {
  /**
  * The celery executor. Deployed with an explicit number of replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#celery_executors DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#celery_executors}
  */
  readonly celeryExecutors?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors;
  /**
  * Configuration that applies to all roles and role groups. This includes settings for authentication, git sync, service exposition and volumes, among other things.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cluster_config DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig;
  /**
  * [Cluster operations](https://docs.stackable.tech/home/nightly/concepts/operations/cluster_operations) properties, allow stopping the product instance as well as pausing reconciliation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#cluster_operation DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#cluster_operation}
  */
  readonly clusterOperation?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation;
  /**
  * Specify which image to use, the easiest way is to only configure the 'productVersion'. You can also configure a custom image registry to pull from, as well as completely custom images. Consult the [Product image selection documentation](https://docs.stackable.tech/home/nightly/concepts/product_image_selection) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#image DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#image}
  */
  readonly image: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage;
  /**
  * With the Kuberentes executor, executor Pods are created on demand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#kubernetes_executors DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#kubernetes_executors}
  */
  readonly kubernetesExecutors?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors;
  /**
  * The 'scheduler' is responsible for triggering jobs and persisting their metadata to the backend database. Jobs are scheduled on the workers/executors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#schedulers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#schedulers}
  */
  readonly schedulers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers;
  /**
  * The 'webserver' role provides the main UI for user interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#webservers DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest#webservers}
  */
  readonly webservers?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers;
}

export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    celery_executors: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsToTerraform(struct!.celeryExecutors),
    cluster_config: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cluster_operation: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct!.clusterOperation),
    image: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    kubernetes_executors: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsToTerraform(struct!.kubernetesExecutors),
    schedulers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersToTerraform(struct!.schedulers),
    webservers: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversToTerraform(struct!.webservers),
  }
}


export function dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    celery_executors: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsToHclTerraform(struct!.celeryExecutors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors",
    },
    cluster_config: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig",
    },
    cluster_operation: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct!.clusterOperation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation",
    },
    image: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage",
    },
    kubernetes_executors: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsToHclTerraform(struct!.kubernetesExecutors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors",
    },
    schedulers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersToHclTerraform(struct!.schedulers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers",
    },
    webservers: {
      value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversToHclTerraform(struct!.webservers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._celeryExecutors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.celeryExecutors = this._celeryExecutors?.internalValue;
    }
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
    if (this._kubernetesExecutors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesExecutors = this._kubernetesExecutors?.internalValue;
    }
    if (this._schedulers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulers = this._schedulers?.internalValue;
    }
    if (this._webservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webservers = this._webservers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._celeryExecutors.internalValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._clusterOperation.internalValue = undefined;
      this._image.internalValue = undefined;
      this._kubernetesExecutors.internalValue = undefined;
      this._schedulers.internalValue = undefined;
      this._webservers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._celeryExecutors.internalValue = value.celeryExecutors;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._clusterOperation.internalValue = value.clusterOperation;
      this._image.internalValue = value.image;
      this._kubernetesExecutors.internalValue = value.kubernetesExecutors;
      this._schedulers.internalValue = value.schedulers;
      this._webservers.internalValue = value.webservers;
    }
  }

  // celery_executors - computed: false, optional: true, required: false
  private _celeryExecutors = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutorsOutputReference(this, "celery_executors");
  public get celeryExecutors() {
    return this._celeryExecutors;
  }
  public putCeleryExecutors(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecCeleryExecutors) {
    this._celeryExecutors.internalValue = value;
  }
  public resetCeleryExecutors() {
    this._celeryExecutors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celeryExecutorsInput() {
    return this._celeryExecutors.internalValue;
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cluster_operation - computed: false, optional: true, required: false
  private _clusterOperation = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperationOutputReference(this, "cluster_operation");
  public get clusterOperation() {
    return this._clusterOperation;
  }
  public putClusterOperation(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecClusterOperation) {
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
  private _image = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // kubernetes_executors - computed: false, optional: true, required: false
  private _kubernetesExecutors = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutorsOutputReference(this, "kubernetes_executors");
  public get kubernetesExecutors() {
    return this._kubernetesExecutors;
  }
  public putKubernetesExecutors(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecKubernetesExecutors) {
    this._kubernetesExecutors.internalValue = value;
  }
  public resetKubernetesExecutors() {
    this._kubernetesExecutors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesExecutorsInput() {
    return this._kubernetesExecutors.internalValue;
  }

  // schedulers - computed: false, optional: true, required: false
  private _schedulers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulersOutputReference(this, "schedulers");
  public get schedulers() {
    return this._schedulers;
  }
  public putSchedulers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecSchedulers) {
    this._schedulers.internalValue = value;
  }
  public resetSchedulers() {
    this._schedulers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulersInput() {
    return this._schedulers.internalValue;
  }

  // webservers - computed: false, optional: true, required: false
  private _webservers = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebserversOutputReference(this, "webservers");
  public get webservers() {
    return this._webservers;
  }
  public putWebservers(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecWebservers) {
    this._webservers.internalValue = value;
  }
  public resetWebservers() {
    this._webservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserversInput() {
    return this._webservers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest k8s_airflow_stackable_tech_airflow_cluster_v1alpha1_manifest}
*/
export class DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_airflow_stackable_tech_airflow_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAirflowStackableTechAirflowClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_airflow_stackable_tech_airflow_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/airflow_stackable_tech_airflow_cluster_v1alpha1_manifest k8s_airflow_stackable_tech_airflow_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_airflow_stackable_tech_airflow_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAirflowStackableTechAirflowClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
