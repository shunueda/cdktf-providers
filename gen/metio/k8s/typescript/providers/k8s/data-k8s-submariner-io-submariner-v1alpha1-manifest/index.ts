// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#metadata DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata;
  /**
  * SubmarinerSpec defines the desired state of Submariner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#spec DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec;
}
export interface DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#annotations DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#labels DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#name DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#namespace DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck {
  /**
  * Enable the connection health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#enabled DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The interval at which health check pings are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#interval_seconds DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The maximum number of packets lost at which the health checker will mark the connection as down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#max_packet_loss_count DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#max_packet_loss_count}
  */
  readonly maxPacketLossCount?: number;
}

export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheckToTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    max_packet_loss_count: cdktf.numberToTerraform(struct!.maxPacketLossCount),
  }
}


export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheckToHclTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable): any {
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
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_packet_loss_count: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketLossCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._maxPacketLossCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketLossCount = this._maxPacketLossCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._intervalSeconds = undefined;
      this._maxPacketLossCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._intervalSeconds = value.intervalSeconds;
      this._maxPacketLossCount = value.maxPacketLossCount;
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

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // max_packet_loss_count - computed: false, optional: true, required: false
  private _maxPacketLossCount?: number; 
  public get maxPacketLossCount() {
    return this.getNumberAttribute('max_packet_loss_count');
  }
  public set maxPacketLossCount(value: number) {
    this._maxPacketLossCount = value;
  }
  public resetMaxPacketLossCount() {
    this._maxPacketLossCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketLossCountInput() {
    return this._maxPacketLossCount;
  }
}
export interface DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig {
  /**
  * Name of the custom CoreDNS configmap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#config_map_name DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#config_map_name}
  */
  readonly configMapName?: string;
  /**
  * Namespace of the custom CoreDNS configmap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#namespace DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfigToTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfigToHclTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
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

export class DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapName = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapName = value.configMapName;
      this._namespace = value.namespace;
    }
  }

  // config_map_name - computed: false, optional: true, required: false
  private _configMapName?: string; 
  public get configMapName() {
    return this.getStringAttribute('config_map_name');
  }
  public set configMapName(value: string) {
    this._configMapName = value;
  }
  public resetConfigMapName() {
    this._configMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapNameInput() {
    return this._configMapName;
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
export interface DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#effect DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#key DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#operator DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#toleration_seconds DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#value DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsToTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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
}

export class DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsOutputReference {
    return new DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#air_gapped_deployment DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#air_gapped_deployment}
  */
  readonly airGappedDeployment?: boolean | cdktf.IResolvable;
  /**
  * Type of broker (must be 'k8s').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#broker DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#broker}
  */
  readonly broker: string;
  /**
  * The broker API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#broker_k8s_api_server DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#broker_k8s_api_server}
  */
  readonly brokerK8SApiServer: string;
  /**
  * The broker API Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#broker_k8s_api_server_token DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#broker_k8s_api_server_token}
  */
  readonly brokerK8SApiServerToken?: string;
  /**
  * The broker certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#broker_k8s_ca DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#broker_k8s_ca}
  */
  readonly brokerK8SCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#broker_k8s_insecure DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#broker_k8s_insecure}
  */
  readonly brokerK8SInsecure?: boolean | cdktf.IResolvable;
  /**
  * The Broker namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#broker_k8s_remote_namespace DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#broker_k8s_remote_namespace}
  */
  readonly brokerK8SRemoteNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#broker_k8s_secret DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#broker_k8s_secret}
  */
  readonly brokerK8SSecret?: string;
  /**
  * Cable driver implementation - any of [libreswan, wireguard, vxlan].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#cable_driver DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#cable_driver}
  */
  readonly cableDriver?: string;
  /**
  * Enable logging IPsec debugging information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#ce_ip_sec_debug DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#ce_ip_sec_debug}
  */
  readonly ceIpSecDebug: boolean | cdktf.IResolvable;
  /**
  * Force UDP encapsulation for IPsec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#ce_ip_sec_force_udp_encaps DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#ce_ip_sec_force_udp_encaps}
  */
  readonly ceIpSecForceUdpEncaps?: boolean | cdktf.IResolvable;
  /**
  * The IPsec IKE port (500 usually).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#ce_ip_sec_ike_port DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#ce_ip_sec_ike_port}
  */
  readonly ceIpSecIkePort?: number;
  /**
  * The IPsec NAT traversal port (4500 usually).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#ce_ip_sec_natt_port DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#ce_ip_sec_natt_port}
  */
  readonly ceIpSecNattPort?: number;
  /**
  * Enable this cluster as a preferred server for data-plane connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#ce_ip_sec_preferred_server DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#ce_ip_sec_preferred_server}
  */
  readonly ceIpSecPreferredServer?: boolean | cdktf.IResolvable;
  /**
  * The IPsec Pre-Shared Key which must be identical in all route agents across the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#ce_ip_sec_psk DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#ce_ip_sec_psk}
  */
  readonly ceIpSecPsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#ce_ip_sec_psk_secret DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#ce_ip_sec_psk_secret}
  */
  readonly ceIpSecPskSecret?: string;
  /**
  * The cluster CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#cluster_cidr DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#cluster_cidr}
  */
  readonly clusterCidr: string;
  /**
  * The cluster ID used to identify the tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#cluster_id DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#cluster_id}
  */
  readonly clusterId: string;
  /**
  * ClustersetIP CIDR for allocating ClustersetIPs to exported services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#clusterset_ip_cidr DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#clusterset_ip_cidr}
  */
  readonly clustersetIpCidr?: string;
  /**
  * Enable ClustersetIP default for services exported on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#clusterset_ip_enabled DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#clusterset_ip_enabled}
  */
  readonly clustersetIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#color_codes DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#color_codes}
  */
  readonly colorCodes?: string;
  /**
  * The gateway connection health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#connection_health_check DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#connection_health_check}
  */
  readonly connectionHealthCheck?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck;
  /**
  * Name of the custom CoreDNS configmap to configure forwarding to Lighthouse. It should be in <namespace>/<name> format where <namespace> is optional and defaults to kube-system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#core_dns_custom_config DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#core_dns_custom_config}
  */
  readonly coreDnsCustomConfig?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig;
  /**
  * List of domains to use for multi-cluster service discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#custom_domains DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#custom_domains}
  */
  readonly customDomains?: string[];
  /**
  * Enable operator debugging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#debug DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#debug}
  */
  readonly debug: boolean | cdktf.IResolvable;
  /**
  * The Global CIDR super-net range for allocating GlobalCIDRs to each cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#global_cidr DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#global_cidr}
  */
  readonly globalCidr?: string;
  /**
  * Halt on certificate error (so the pod gets restarted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#halt_on_certificate_error DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#halt_on_certificate_error}
  */
  readonly haltOnCertificateError?: boolean | cdktf.IResolvable;
  /**
  * Override component images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#image_overrides DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#image_overrides}
  */
  readonly imageOverrides?: { [key: string]: string };
  /**
  * Enable automatic Load Balancer in front of the gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#load_balancer_enabled DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#load_balancer_enabled}
  */
  readonly loadBalancerEnabled?: boolean | cdktf.IResolvable;
  /**
  * The namespace in which to deploy the submariner operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#namespace DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Enable NAT between clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#nat_enabled DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#nat_enabled}
  */
  readonly natEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#node_selector DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The image repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#repository DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * The service CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#service_cidr DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#service_cidr}
  */
  readonly serviceCidr: string;
  /**
  * Enable support for Service Discovery (Lighthouse).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#service_discovery_enabled DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#service_discovery_enabled}
  */
  readonly serviceDiscoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#tolerations DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * The image tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#version DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    air_gapped_deployment: cdktf.booleanToTerraform(struct!.airGappedDeployment),
    broker: cdktf.stringToTerraform(struct!.broker),
    broker_k8s_api_server: cdktf.stringToTerraform(struct!.brokerK8SApiServer),
    broker_k8s_api_server_token: cdktf.stringToTerraform(struct!.brokerK8SApiServerToken),
    broker_k8s_ca: cdktf.stringToTerraform(struct!.brokerK8SCa),
    broker_k8s_insecure: cdktf.booleanToTerraform(struct!.brokerK8SInsecure),
    broker_k8s_remote_namespace: cdktf.stringToTerraform(struct!.brokerK8SRemoteNamespace),
    broker_k8s_secret: cdktf.stringToTerraform(struct!.brokerK8SSecret),
    cable_driver: cdktf.stringToTerraform(struct!.cableDriver),
    ce_ip_sec_debug: cdktf.booleanToTerraform(struct!.ceIpSecDebug),
    ce_ip_sec_force_udp_encaps: cdktf.booleanToTerraform(struct!.ceIpSecForceUdpEncaps),
    ce_ip_sec_ike_port: cdktf.numberToTerraform(struct!.ceIpSecIkePort),
    ce_ip_sec_natt_port: cdktf.numberToTerraform(struct!.ceIpSecNattPort),
    ce_ip_sec_preferred_server: cdktf.booleanToTerraform(struct!.ceIpSecPreferredServer),
    ce_ip_sec_psk: cdktf.stringToTerraform(struct!.ceIpSecPsk),
    ce_ip_sec_psk_secret: cdktf.stringToTerraform(struct!.ceIpSecPskSecret),
    cluster_cidr: cdktf.stringToTerraform(struct!.clusterCidr),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    clusterset_ip_cidr: cdktf.stringToTerraform(struct!.clustersetIpCidr),
    clusterset_ip_enabled: cdktf.booleanToTerraform(struct!.clustersetIpEnabled),
    color_codes: cdktf.stringToTerraform(struct!.colorCodes),
    connection_health_check: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheckToTerraform(struct!.connectionHealthCheck),
    core_dns_custom_config: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfigToTerraform(struct!.coreDnsCustomConfig),
    custom_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customDomains),
    debug: cdktf.booleanToTerraform(struct!.debug),
    global_cidr: cdktf.stringToTerraform(struct!.globalCidr),
    halt_on_certificate_error: cdktf.booleanToTerraform(struct!.haltOnCertificateError),
    image_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.imageOverrides),
    load_balancer_enabled: cdktf.booleanToTerraform(struct!.loadBalancerEnabled),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    nat_enabled: cdktf.booleanToTerraform(struct!.natEnabled),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    repository: cdktf.stringToTerraform(struct!.repository),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
    service_discovery_enabled: cdktf.booleanToTerraform(struct!.serviceDiscoveryEnabled),
    tolerations: cdktf.listMapper(dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    air_gapped_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.airGappedDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    broker: {
      value: cdktf.stringToHclTerraform(struct!.broker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_k8s_api_server: {
      value: cdktf.stringToHclTerraform(struct!.brokerK8SApiServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_k8s_api_server_token: {
      value: cdktf.stringToHclTerraform(struct!.brokerK8SApiServerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_k8s_ca: {
      value: cdktf.stringToHclTerraform(struct!.brokerK8SCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_k8s_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.brokerK8SInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    broker_k8s_remote_namespace: {
      value: cdktf.stringToHclTerraform(struct!.brokerK8SRemoteNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_k8s_secret: {
      value: cdktf.stringToHclTerraform(struct!.brokerK8SSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cable_driver: {
      value: cdktf.stringToHclTerraform(struct!.cableDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ce_ip_sec_debug: {
      value: cdktf.booleanToHclTerraform(struct!.ceIpSecDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ce_ip_sec_force_udp_encaps: {
      value: cdktf.booleanToHclTerraform(struct!.ceIpSecForceUdpEncaps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ce_ip_sec_ike_port: {
      value: cdktf.numberToHclTerraform(struct!.ceIpSecIkePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ce_ip_sec_natt_port: {
      value: cdktf.numberToHclTerraform(struct!.ceIpSecNattPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ce_ip_sec_preferred_server: {
      value: cdktf.booleanToHclTerraform(struct!.ceIpSecPreferredServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ce_ip_sec_psk: {
      value: cdktf.stringToHclTerraform(struct!.ceIpSecPsk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ce_ip_sec_psk_secret: {
      value: cdktf.stringToHclTerraform(struct!.ceIpSecPskSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_cidr: {
      value: cdktf.stringToHclTerraform(struct!.clusterCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusterset_ip_cidr: {
      value: cdktf.stringToHclTerraform(struct!.clustersetIpCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusterset_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clustersetIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    color_codes: {
      value: cdktf.stringToHclTerraform(struct!.colorCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_health_check: {
      value: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheckToHclTerraform(struct!.connectionHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck",
    },
    core_dns_custom_config: {
      value: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfigToHclTerraform(struct!.coreDnsCustomConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig",
    },
    custom_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_cidr: {
      value: cdktf.stringToHclTerraform(struct!.globalCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    halt_on_certificate_error: {
      value: cdktf.booleanToHclTerraform(struct!.haltOnCertificateError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.imageOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    load_balancer_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.loadBalancerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.natEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_discovery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceDiscoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsList",
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

export class DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airGappedDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.airGappedDeployment = this._airGappedDeployment;
    }
    if (this._broker !== undefined) {
      hasAnyValues = true;
      internalValueResult.broker = this._broker;
    }
    if (this._brokerK8SApiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerK8SApiServer = this._brokerK8SApiServer;
    }
    if (this._brokerK8SApiServerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerK8SApiServerToken = this._brokerK8SApiServerToken;
    }
    if (this._brokerK8SCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerK8SCa = this._brokerK8SCa;
    }
    if (this._brokerK8SInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerK8SInsecure = this._brokerK8SInsecure;
    }
    if (this._brokerK8SRemoteNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerK8SRemoteNamespace = this._brokerK8SRemoteNamespace;
    }
    if (this._brokerK8SSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerK8SSecret = this._brokerK8SSecret;
    }
    if (this._cableDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.cableDriver = this._cableDriver;
    }
    if (this._ceIpSecDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceIpSecDebug = this._ceIpSecDebug;
    }
    if (this._ceIpSecForceUdpEncaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceIpSecForceUdpEncaps = this._ceIpSecForceUdpEncaps;
    }
    if (this._ceIpSecIkePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceIpSecIkePort = this._ceIpSecIkePort;
    }
    if (this._ceIpSecNattPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceIpSecNattPort = this._ceIpSecNattPort;
    }
    if (this._ceIpSecPreferredServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceIpSecPreferredServer = this._ceIpSecPreferredServer;
    }
    if (this._ceIpSecPsk !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceIpSecPsk = this._ceIpSecPsk;
    }
    if (this._ceIpSecPskSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceIpSecPskSecret = this._ceIpSecPskSecret;
    }
    if (this._clusterCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCidr = this._clusterCidr;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clustersetIpCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clustersetIpCidr = this._clustersetIpCidr;
    }
    if (this._clustersetIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clustersetIpEnabled = this._clustersetIpEnabled;
    }
    if (this._colorCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorCodes = this._colorCodes;
    }
    if (this._connectionHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionHealthCheck = this._connectionHealthCheck?.internalValue;
    }
    if (this._coreDnsCustomConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDnsCustomConfig = this._coreDnsCustomConfig?.internalValue;
    }
    if (this._customDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomains = this._customDomains;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._globalCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalCidr = this._globalCidr;
    }
    if (this._haltOnCertificateError !== undefined) {
      hasAnyValues = true;
      internalValueResult.haltOnCertificateError = this._haltOnCertificateError;
    }
    if (this._imageOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOverrides = this._imageOverrides;
    }
    if (this._loadBalancerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerEnabled = this._loadBalancerEnabled;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._natEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.natEnabled = this._natEnabled;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    if (this._serviceDiscoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscoveryEnabled = this._serviceDiscoveryEnabled;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._airGappedDeployment = undefined;
      this._broker = undefined;
      this._brokerK8SApiServer = undefined;
      this._brokerK8SApiServerToken = undefined;
      this._brokerK8SCa = undefined;
      this._brokerK8SInsecure = undefined;
      this._brokerK8SRemoteNamespace = undefined;
      this._brokerK8SSecret = undefined;
      this._cableDriver = undefined;
      this._ceIpSecDebug = undefined;
      this._ceIpSecForceUdpEncaps = undefined;
      this._ceIpSecIkePort = undefined;
      this._ceIpSecNattPort = undefined;
      this._ceIpSecPreferredServer = undefined;
      this._ceIpSecPsk = undefined;
      this._ceIpSecPskSecret = undefined;
      this._clusterCidr = undefined;
      this._clusterId = undefined;
      this._clustersetIpCidr = undefined;
      this._clustersetIpEnabled = undefined;
      this._colorCodes = undefined;
      this._connectionHealthCheck.internalValue = undefined;
      this._coreDnsCustomConfig.internalValue = undefined;
      this._customDomains = undefined;
      this._debug = undefined;
      this._globalCidr = undefined;
      this._haltOnCertificateError = undefined;
      this._imageOverrides = undefined;
      this._loadBalancerEnabled = undefined;
      this._namespace = undefined;
      this._natEnabled = undefined;
      this._nodeSelector = undefined;
      this._repository = undefined;
      this._serviceCidr = undefined;
      this._serviceDiscoveryEnabled = undefined;
      this._tolerations.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._airGappedDeployment = value.airGappedDeployment;
      this._broker = value.broker;
      this._brokerK8SApiServer = value.brokerK8SApiServer;
      this._brokerK8SApiServerToken = value.brokerK8SApiServerToken;
      this._brokerK8SCa = value.brokerK8SCa;
      this._brokerK8SInsecure = value.brokerK8SInsecure;
      this._brokerK8SRemoteNamespace = value.brokerK8SRemoteNamespace;
      this._brokerK8SSecret = value.brokerK8SSecret;
      this._cableDriver = value.cableDriver;
      this._ceIpSecDebug = value.ceIpSecDebug;
      this._ceIpSecForceUdpEncaps = value.ceIpSecForceUdpEncaps;
      this._ceIpSecIkePort = value.ceIpSecIkePort;
      this._ceIpSecNattPort = value.ceIpSecNattPort;
      this._ceIpSecPreferredServer = value.ceIpSecPreferredServer;
      this._ceIpSecPsk = value.ceIpSecPsk;
      this._ceIpSecPskSecret = value.ceIpSecPskSecret;
      this._clusterCidr = value.clusterCidr;
      this._clusterId = value.clusterId;
      this._clustersetIpCidr = value.clustersetIpCidr;
      this._clustersetIpEnabled = value.clustersetIpEnabled;
      this._colorCodes = value.colorCodes;
      this._connectionHealthCheck.internalValue = value.connectionHealthCheck;
      this._coreDnsCustomConfig.internalValue = value.coreDnsCustomConfig;
      this._customDomains = value.customDomains;
      this._debug = value.debug;
      this._globalCidr = value.globalCidr;
      this._haltOnCertificateError = value.haltOnCertificateError;
      this._imageOverrides = value.imageOverrides;
      this._loadBalancerEnabled = value.loadBalancerEnabled;
      this._namespace = value.namespace;
      this._natEnabled = value.natEnabled;
      this._nodeSelector = value.nodeSelector;
      this._repository = value.repository;
      this._serviceCidr = value.serviceCidr;
      this._serviceDiscoveryEnabled = value.serviceDiscoveryEnabled;
      this._tolerations.internalValue = value.tolerations;
      this._version = value.version;
    }
  }

  // air_gapped_deployment - computed: false, optional: true, required: false
  private _airGappedDeployment?: boolean | cdktf.IResolvable; 
  public get airGappedDeployment() {
    return this.getBooleanAttribute('air_gapped_deployment');
  }
  public set airGappedDeployment(value: boolean | cdktf.IResolvable) {
    this._airGappedDeployment = value;
  }
  public resetAirGappedDeployment() {
    this._airGappedDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airGappedDeploymentInput() {
    return this._airGappedDeployment;
  }

  // broker - computed: false, optional: false, required: true
  private _broker?: string; 
  public get broker() {
    return this.getStringAttribute('broker');
  }
  public set broker(value: string) {
    this._broker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerInput() {
    return this._broker;
  }

  // broker_k8s_api_server - computed: false, optional: false, required: true
  private _brokerK8SApiServer?: string; 
  public get brokerK8SApiServer() {
    return this.getStringAttribute('broker_k8s_api_server');
  }
  public set brokerK8SApiServer(value: string) {
    this._brokerK8SApiServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerK8SApiServerInput() {
    return this._brokerK8SApiServer;
  }

  // broker_k8s_api_server_token - computed: false, optional: true, required: false
  private _brokerK8SApiServerToken?: string; 
  public get brokerK8SApiServerToken() {
    return this.getStringAttribute('broker_k8s_api_server_token');
  }
  public set brokerK8SApiServerToken(value: string) {
    this._brokerK8SApiServerToken = value;
  }
  public resetBrokerK8SApiServerToken() {
    this._brokerK8SApiServerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerK8SApiServerTokenInput() {
    return this._brokerK8SApiServerToken;
  }

  // broker_k8s_ca - computed: false, optional: true, required: false
  private _brokerK8SCa?: string; 
  public get brokerK8SCa() {
    return this.getStringAttribute('broker_k8s_ca');
  }
  public set brokerK8SCa(value: string) {
    this._brokerK8SCa = value;
  }
  public resetBrokerK8SCa() {
    this._brokerK8SCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerK8SCaInput() {
    return this._brokerK8SCa;
  }

  // broker_k8s_insecure - computed: false, optional: true, required: false
  private _brokerK8SInsecure?: boolean | cdktf.IResolvable; 
  public get brokerK8SInsecure() {
    return this.getBooleanAttribute('broker_k8s_insecure');
  }
  public set brokerK8SInsecure(value: boolean | cdktf.IResolvable) {
    this._brokerK8SInsecure = value;
  }
  public resetBrokerK8SInsecure() {
    this._brokerK8SInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerK8SInsecureInput() {
    return this._brokerK8SInsecure;
  }

  // broker_k8s_remote_namespace - computed: false, optional: false, required: true
  private _brokerK8SRemoteNamespace?: string; 
  public get brokerK8SRemoteNamespace() {
    return this.getStringAttribute('broker_k8s_remote_namespace');
  }
  public set brokerK8SRemoteNamespace(value: string) {
    this._brokerK8SRemoteNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerK8SRemoteNamespaceInput() {
    return this._brokerK8SRemoteNamespace;
  }

  // broker_k8s_secret - computed: false, optional: true, required: false
  private _brokerK8SSecret?: string; 
  public get brokerK8SSecret() {
    return this.getStringAttribute('broker_k8s_secret');
  }
  public set brokerK8SSecret(value: string) {
    this._brokerK8SSecret = value;
  }
  public resetBrokerK8SSecret() {
    this._brokerK8SSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerK8SSecretInput() {
    return this._brokerK8SSecret;
  }

  // cable_driver - computed: false, optional: true, required: false
  private _cableDriver?: string; 
  public get cableDriver() {
    return this.getStringAttribute('cable_driver');
  }
  public set cableDriver(value: string) {
    this._cableDriver = value;
  }
  public resetCableDriver() {
    this._cableDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cableDriverInput() {
    return this._cableDriver;
  }

  // ce_ip_sec_debug - computed: false, optional: false, required: true
  private _ceIpSecDebug?: boolean | cdktf.IResolvable; 
  public get ceIpSecDebug() {
    return this.getBooleanAttribute('ce_ip_sec_debug');
  }
  public set ceIpSecDebug(value: boolean | cdktf.IResolvable) {
    this._ceIpSecDebug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpSecDebugInput() {
    return this._ceIpSecDebug;
  }

  // ce_ip_sec_force_udp_encaps - computed: false, optional: true, required: false
  private _ceIpSecForceUdpEncaps?: boolean | cdktf.IResolvable; 
  public get ceIpSecForceUdpEncaps() {
    return this.getBooleanAttribute('ce_ip_sec_force_udp_encaps');
  }
  public set ceIpSecForceUdpEncaps(value: boolean | cdktf.IResolvable) {
    this._ceIpSecForceUdpEncaps = value;
  }
  public resetCeIpSecForceUdpEncaps() {
    this._ceIpSecForceUdpEncaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpSecForceUdpEncapsInput() {
    return this._ceIpSecForceUdpEncaps;
  }

  // ce_ip_sec_ike_port - computed: false, optional: true, required: false
  private _ceIpSecIkePort?: number; 
  public get ceIpSecIkePort() {
    return this.getNumberAttribute('ce_ip_sec_ike_port');
  }
  public set ceIpSecIkePort(value: number) {
    this._ceIpSecIkePort = value;
  }
  public resetCeIpSecIkePort() {
    this._ceIpSecIkePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpSecIkePortInput() {
    return this._ceIpSecIkePort;
  }

  // ce_ip_sec_natt_port - computed: false, optional: true, required: false
  private _ceIpSecNattPort?: number; 
  public get ceIpSecNattPort() {
    return this.getNumberAttribute('ce_ip_sec_natt_port');
  }
  public set ceIpSecNattPort(value: number) {
    this._ceIpSecNattPort = value;
  }
  public resetCeIpSecNattPort() {
    this._ceIpSecNattPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpSecNattPortInput() {
    return this._ceIpSecNattPort;
  }

  // ce_ip_sec_preferred_server - computed: false, optional: true, required: false
  private _ceIpSecPreferredServer?: boolean | cdktf.IResolvable; 
  public get ceIpSecPreferredServer() {
    return this.getBooleanAttribute('ce_ip_sec_preferred_server');
  }
  public set ceIpSecPreferredServer(value: boolean | cdktf.IResolvable) {
    this._ceIpSecPreferredServer = value;
  }
  public resetCeIpSecPreferredServer() {
    this._ceIpSecPreferredServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpSecPreferredServerInput() {
    return this._ceIpSecPreferredServer;
  }

  // ce_ip_sec_psk - computed: false, optional: true, required: false
  private _ceIpSecPsk?: string; 
  public get ceIpSecPsk() {
    return this.getStringAttribute('ce_ip_sec_psk');
  }
  public set ceIpSecPsk(value: string) {
    this._ceIpSecPsk = value;
  }
  public resetCeIpSecPsk() {
    this._ceIpSecPsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpSecPskInput() {
    return this._ceIpSecPsk;
  }

  // ce_ip_sec_psk_secret - computed: false, optional: true, required: false
  private _ceIpSecPskSecret?: string; 
  public get ceIpSecPskSecret() {
    return this.getStringAttribute('ce_ip_sec_psk_secret');
  }
  public set ceIpSecPskSecret(value: string) {
    this._ceIpSecPskSecret = value;
  }
  public resetCeIpSecPskSecret() {
    this._ceIpSecPskSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpSecPskSecretInput() {
    return this._ceIpSecPskSecret;
  }

  // cluster_cidr - computed: false, optional: false, required: true
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // clusterset_ip_cidr - computed: false, optional: true, required: false
  private _clustersetIpCidr?: string; 
  public get clustersetIpCidr() {
    return this.getStringAttribute('clusterset_ip_cidr');
  }
  public set clustersetIpCidr(value: string) {
    this._clustersetIpCidr = value;
  }
  public resetClustersetIpCidr() {
    this._clustersetIpCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersetIpCidrInput() {
    return this._clustersetIpCidr;
  }

  // clusterset_ip_enabled - computed: false, optional: true, required: false
  private _clustersetIpEnabled?: boolean | cdktf.IResolvable; 
  public get clustersetIpEnabled() {
    return this.getBooleanAttribute('clusterset_ip_enabled');
  }
  public set clustersetIpEnabled(value: boolean | cdktf.IResolvable) {
    this._clustersetIpEnabled = value;
  }
  public resetClustersetIpEnabled() {
    this._clustersetIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersetIpEnabledInput() {
    return this._clustersetIpEnabled;
  }

  // color_codes - computed: false, optional: true, required: false
  private _colorCodes?: string; 
  public get colorCodes() {
    return this.getStringAttribute('color_codes');
  }
  public set colorCodes(value: string) {
    this._colorCodes = value;
  }
  public resetColorCodes() {
    this._colorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorCodesInput() {
    return this._colorCodes;
  }

  // connection_health_check - computed: false, optional: true, required: false
  private _connectionHealthCheck = new DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheckOutputReference(this, "connection_health_check");
  public get connectionHealthCheck() {
    return this._connectionHealthCheck;
  }
  public putConnectionHealthCheck(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecConnectionHealthCheck) {
    this._connectionHealthCheck.internalValue = value;
  }
  public resetConnectionHealthCheck() {
    this._connectionHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionHealthCheckInput() {
    return this._connectionHealthCheck.internalValue;
  }

  // core_dns_custom_config - computed: false, optional: true, required: false
  private _coreDnsCustomConfig = new DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfigOutputReference(this, "core_dns_custom_config");
  public get coreDnsCustomConfig() {
    return this._coreDnsCustomConfig;
  }
  public putCoreDnsCustomConfig(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecCoreDnsCustomConfig) {
    this._coreDnsCustomConfig.internalValue = value;
  }
  public resetCoreDnsCustomConfig() {
    this._coreDnsCustomConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDnsCustomConfigInput() {
    return this._coreDnsCustomConfig.internalValue;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains?: string[]; 
  public get customDomains() {
    return this.getListAttribute('custom_domains');
  }
  public set customDomains(value: string[]) {
    this._customDomains = value;
  }
  public resetCustomDomains() {
    this._customDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains;
  }

  // debug - computed: false, optional: false, required: true
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // global_cidr - computed: false, optional: true, required: false
  private _globalCidr?: string; 
  public get globalCidr() {
    return this.getStringAttribute('global_cidr');
  }
  public set globalCidr(value: string) {
    this._globalCidr = value;
  }
  public resetGlobalCidr() {
    this._globalCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCidrInput() {
    return this._globalCidr;
  }

  // halt_on_certificate_error - computed: false, optional: true, required: false
  private _haltOnCertificateError?: boolean | cdktf.IResolvable; 
  public get haltOnCertificateError() {
    return this.getBooleanAttribute('halt_on_certificate_error');
  }
  public set haltOnCertificateError(value: boolean | cdktf.IResolvable) {
    this._haltOnCertificateError = value;
  }
  public resetHaltOnCertificateError() {
    this._haltOnCertificateError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haltOnCertificateErrorInput() {
    return this._haltOnCertificateError;
  }

  // image_overrides - computed: false, optional: true, required: false
  private _imageOverrides?: { [key: string]: string }; 
  public get imageOverrides() {
    return this.getStringMapAttribute('image_overrides');
  }
  public set imageOverrides(value: { [key: string]: string }) {
    this._imageOverrides = value;
  }
  public resetImageOverrides() {
    this._imageOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOverridesInput() {
    return this._imageOverrides;
  }

  // load_balancer_enabled - computed: false, optional: true, required: false
  private _loadBalancerEnabled?: boolean | cdktf.IResolvable; 
  public get loadBalancerEnabled() {
    return this.getBooleanAttribute('load_balancer_enabled');
  }
  public set loadBalancerEnabled(value: boolean | cdktf.IResolvable) {
    this._loadBalancerEnabled = value;
  }
  public resetLoadBalancerEnabled() {
    this._loadBalancerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerEnabledInput() {
    return this._loadBalancerEnabled;
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

  // nat_enabled - computed: false, optional: false, required: true
  private _natEnabled?: boolean | cdktf.IResolvable; 
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }
  public set natEnabled(value: boolean | cdktf.IResolvable) {
    this._natEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natEnabledInput() {
    return this._natEnabled;
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

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // service_cidr - computed: false, optional: false, required: true
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // service_discovery_enabled - computed: false, optional: true, required: false
  private _serviceDiscoveryEnabled?: boolean | cdktf.IResolvable; 
  public get serviceDiscoveryEnabled() {
    return this.getBooleanAttribute('service_discovery_enabled');
  }
  public set serviceDiscoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceDiscoveryEnabled = value;
  }
  public resetServiceDiscoveryEnabled() {
    this._serviceDiscoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryEnabledInput() {
    return this._serviceDiscoveryEnabled;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest k8s_submariner_io_submariner_v1alpha1_manifest}
*/
export class DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_submariner_io_submariner_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSubmarinerIoSubmarinerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_submariner_io_submariner_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/submariner_io_submariner_v1alpha1_manifest k8s_submariner_io_submariner_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_submariner_io_submariner_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSubmarinerIoSubmarinerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
