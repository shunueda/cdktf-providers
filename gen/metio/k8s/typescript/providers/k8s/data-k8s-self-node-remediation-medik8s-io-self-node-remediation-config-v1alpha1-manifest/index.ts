// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#metadata DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata;
  /**
  * SelfNodeRemediationConfigSpec defines the desired state of SelfNodeRemediationConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#spec DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec;
}
export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#annotations DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#labels DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#name DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#namespace DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#effect DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#key DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#operator DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#toleration_seconds DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#value DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsToTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations | cdktf.IResolvable): any {
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


export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsToHclTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations | cdktf.IResolvable): any {
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

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsOutputReference {
    return new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec {
  /**
  * The frequency for api-server connectivity check. Valid time units are 'ms', 's', 'm', 'h'. the frequency for api-server connectivity check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#api_check_interval DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#api_check_interval}
  */
  readonly apiCheckInterval?: string;
  /**
  * Timeout for each api-connectivity check. Valid time units are 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#api_server_timeout DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#api_server_timeout}
  */
  readonly apiServerTimeout?: string;
  /**
  * CustomDsTolerations allows to add custom tolerations snr agents that are running on the ds in order to support remediation for different types of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#custom_ds_tolerations DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#custom_ds_tolerations}
  */
  readonly customDsTolerations?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations[] | cdktf.IResolvable;
  /**
  * EndpointHealthCheckUrl is an url that self node remediation agents which run on control-plane node will try to access when they can't contact their peers. This is a part of self diagnostics which will decide whether the node should be remediated or not. It will be ignored when empty (which is the default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#endpoint_health_check_url DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#endpoint_health_check_url}
  */
  readonly endpointHealthCheckUrl?: string;
  /**
  * HostPort is used for internal communication between SNR agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#host_port DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * IsSoftwareRebootEnabled indicates whether self node remediation agent will do software reboot, if the watchdog device can not be used or will use watchdog only, without a fallback to software reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#is_software_reboot_enabled DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#is_software_reboot_enabled}
  */
  readonly isSoftwareRebootEnabled?: boolean | cdktf.IResolvable;
  /**
  * After this threshold, the node will start contacting its peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#max_api_error_threshold DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#max_api_error_threshold}
  */
  readonly maxApiErrorThreshold?: number;
  /**
  * The timeout for api-server connectivity check. Valid time units are 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#peer_api_server_timeout DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#peer_api_server_timeout}
  */
  readonly peerApiServerTimeout?: string;
  /**
  * Timeout for establishing connection to peer. Valid time units are 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#peer_dial_timeout DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#peer_dial_timeout}
  */
  readonly peerDialTimeout?: string;
  /**
  * Timeout for each peer request. Valid time units are 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#peer_request_timeout DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#peer_request_timeout}
  */
  readonly peerRequestTimeout?: string;
  /**
  * The frequency for updating peers. Valid time units are 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#peer_update_interval DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#peer_update_interval}
  */
  readonly peerUpdateInterval?: string;
  /**
  * SafeTimeToAssumeNodeRebootedSeconds is the time after which the healthy self node remediation agents will assume the unhealthy node has been rebooted, and it is safe to recover affected workloads. This is extremely important as starting replacement Pods while they are still running on the failed node will likely lead to data corruption and violation of run-once semantics. In an effort to prevent this, the operator ignores values lower than a minimum calculated from the ApiCheckInterval, ApiServerTimeout, MaxApiErrorThreshold, PeerDialTimeout, and PeerRequestTimeout fields, and the unhealthy node's individual watchdog timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#safe_time_to_assume_node_rebooted_seconds DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#safe_time_to_assume_node_rebooted_seconds}
  */
  readonly safeTimeToAssumeNodeRebootedSeconds?: number;
  /**
  * WatchdogFilePath is the watchdog file path that should be available on each node, e.g. /dev/watchdog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#watchdog_file_path DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest#watchdog_file_path}
  */
  readonly watchdogFilePath?: string;
}

export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_check_interval: cdktf.stringToTerraform(struct!.apiCheckInterval),
    api_server_timeout: cdktf.stringToTerraform(struct!.apiServerTimeout),
    custom_ds_tolerations: cdktf.listMapper(dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsToTerraform, false)(struct!.customDsTolerations),
    endpoint_health_check_url: cdktf.stringToTerraform(struct!.endpointHealthCheckUrl),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    is_software_reboot_enabled: cdktf.booleanToTerraform(struct!.isSoftwareRebootEnabled),
    max_api_error_threshold: cdktf.numberToTerraform(struct!.maxApiErrorThreshold),
    peer_api_server_timeout: cdktf.stringToTerraform(struct!.peerApiServerTimeout),
    peer_dial_timeout: cdktf.stringToTerraform(struct!.peerDialTimeout),
    peer_request_timeout: cdktf.stringToTerraform(struct!.peerRequestTimeout),
    peer_update_interval: cdktf.stringToTerraform(struct!.peerUpdateInterval),
    safe_time_to_assume_node_rebooted_seconds: cdktf.numberToTerraform(struct!.safeTimeToAssumeNodeRebootedSeconds),
    watchdog_file_path: cdktf.stringToTerraform(struct!.watchdogFilePath),
  }
}


export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.apiCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_server_timeout: {
      value: cdktf.stringToHclTerraform(struct!.apiServerTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ds_tolerations: {
      value: cdktf.listMapperHcl(dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsToHclTerraform, false)(struct!.customDsTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsList",
    },
    endpoint_health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointHealthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_software_reboot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSoftwareRebootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_api_error_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxApiErrorThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_api_server_timeout: {
      value: cdktf.stringToHclTerraform(struct!.peerApiServerTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_dial_timeout: {
      value: cdktf.stringToHclTerraform(struct!.peerDialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.peerRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_update_interval: {
      value: cdktf.stringToHclTerraform(struct!.peerUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safe_time_to_assume_node_rebooted_seconds: {
      value: cdktf.numberToHclTerraform(struct!.safeTimeToAssumeNodeRebootedSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    watchdog_file_path: {
      value: cdktf.stringToHclTerraform(struct!.watchdogFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCheckInterval = this._apiCheckInterval;
    }
    if (this._apiServerTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerTimeout = this._apiServerTimeout;
    }
    if (this._customDsTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDsTolerations = this._customDsTolerations?.internalValue;
    }
    if (this._endpointHealthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointHealthCheckUrl = this._endpointHealthCheckUrl;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._isSoftwareRebootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSoftwareRebootEnabled = this._isSoftwareRebootEnabled;
    }
    if (this._maxApiErrorThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxApiErrorThreshold = this._maxApiErrorThreshold;
    }
    if (this._peerApiServerTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerApiServerTimeout = this._peerApiServerTimeout;
    }
    if (this._peerDialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerDialTimeout = this._peerDialTimeout;
    }
    if (this._peerRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRequestTimeout = this._peerRequestTimeout;
    }
    if (this._peerUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerUpdateInterval = this._peerUpdateInterval;
    }
    if (this._safeTimeToAssumeNodeRebootedSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeTimeToAssumeNodeRebootedSeconds = this._safeTimeToAssumeNodeRebootedSeconds;
    }
    if (this._watchdogFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchdogFilePath = this._watchdogFilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiCheckInterval = undefined;
      this._apiServerTimeout = undefined;
      this._customDsTolerations.internalValue = undefined;
      this._endpointHealthCheckUrl = undefined;
      this._hostPort = undefined;
      this._isSoftwareRebootEnabled = undefined;
      this._maxApiErrorThreshold = undefined;
      this._peerApiServerTimeout = undefined;
      this._peerDialTimeout = undefined;
      this._peerRequestTimeout = undefined;
      this._peerUpdateInterval = undefined;
      this._safeTimeToAssumeNodeRebootedSeconds = undefined;
      this._watchdogFilePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiCheckInterval = value.apiCheckInterval;
      this._apiServerTimeout = value.apiServerTimeout;
      this._customDsTolerations.internalValue = value.customDsTolerations;
      this._endpointHealthCheckUrl = value.endpointHealthCheckUrl;
      this._hostPort = value.hostPort;
      this._isSoftwareRebootEnabled = value.isSoftwareRebootEnabled;
      this._maxApiErrorThreshold = value.maxApiErrorThreshold;
      this._peerApiServerTimeout = value.peerApiServerTimeout;
      this._peerDialTimeout = value.peerDialTimeout;
      this._peerRequestTimeout = value.peerRequestTimeout;
      this._peerUpdateInterval = value.peerUpdateInterval;
      this._safeTimeToAssumeNodeRebootedSeconds = value.safeTimeToAssumeNodeRebootedSeconds;
      this._watchdogFilePath = value.watchdogFilePath;
    }
  }

  // api_check_interval - computed: false, optional: true, required: false
  private _apiCheckInterval?: string; 
  public get apiCheckInterval() {
    return this.getStringAttribute('api_check_interval');
  }
  public set apiCheckInterval(value: string) {
    this._apiCheckInterval = value;
  }
  public resetApiCheckInterval() {
    this._apiCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCheckIntervalInput() {
    return this._apiCheckInterval;
  }

  // api_server_timeout - computed: false, optional: true, required: false
  private _apiServerTimeout?: string; 
  public get apiServerTimeout() {
    return this.getStringAttribute('api_server_timeout');
  }
  public set apiServerTimeout(value: string) {
    this._apiServerTimeout = value;
  }
  public resetApiServerTimeout() {
    this._apiServerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerTimeoutInput() {
    return this._apiServerTimeout;
  }

  // custom_ds_tolerations - computed: false, optional: true, required: false
  private _customDsTolerations = new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerationsList(this, "custom_ds_tolerations", false);
  public get customDsTolerations() {
    return this._customDsTolerations;
  }
  public putCustomDsTolerations(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecCustomDsTolerations[] | cdktf.IResolvable) {
    this._customDsTolerations.internalValue = value;
  }
  public resetCustomDsTolerations() {
    this._customDsTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDsTolerationsInput() {
    return this._customDsTolerations.internalValue;
  }

  // endpoint_health_check_url - computed: false, optional: true, required: false
  private _endpointHealthCheckUrl?: string; 
  public get endpointHealthCheckUrl() {
    return this.getStringAttribute('endpoint_health_check_url');
  }
  public set endpointHealthCheckUrl(value: string) {
    this._endpointHealthCheckUrl = value;
  }
  public resetEndpointHealthCheckUrl() {
    this._endpointHealthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointHealthCheckUrlInput() {
    return this._endpointHealthCheckUrl;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // is_software_reboot_enabled - computed: false, optional: true, required: false
  private _isSoftwareRebootEnabled?: boolean | cdktf.IResolvable; 
  public get isSoftwareRebootEnabled() {
    return this.getBooleanAttribute('is_software_reboot_enabled');
  }
  public set isSoftwareRebootEnabled(value: boolean | cdktf.IResolvable) {
    this._isSoftwareRebootEnabled = value;
  }
  public resetIsSoftwareRebootEnabled() {
    this._isSoftwareRebootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSoftwareRebootEnabledInput() {
    return this._isSoftwareRebootEnabled;
  }

  // max_api_error_threshold - computed: false, optional: true, required: false
  private _maxApiErrorThreshold?: number; 
  public get maxApiErrorThreshold() {
    return this.getNumberAttribute('max_api_error_threshold');
  }
  public set maxApiErrorThreshold(value: number) {
    this._maxApiErrorThreshold = value;
  }
  public resetMaxApiErrorThreshold() {
    this._maxApiErrorThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApiErrorThresholdInput() {
    return this._maxApiErrorThreshold;
  }

  // peer_api_server_timeout - computed: false, optional: true, required: false
  private _peerApiServerTimeout?: string; 
  public get peerApiServerTimeout() {
    return this.getStringAttribute('peer_api_server_timeout');
  }
  public set peerApiServerTimeout(value: string) {
    this._peerApiServerTimeout = value;
  }
  public resetPeerApiServerTimeout() {
    this._peerApiServerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerApiServerTimeoutInput() {
    return this._peerApiServerTimeout;
  }

  // peer_dial_timeout - computed: false, optional: true, required: false
  private _peerDialTimeout?: string; 
  public get peerDialTimeout() {
    return this.getStringAttribute('peer_dial_timeout');
  }
  public set peerDialTimeout(value: string) {
    this._peerDialTimeout = value;
  }
  public resetPeerDialTimeout() {
    this._peerDialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDialTimeoutInput() {
    return this._peerDialTimeout;
  }

  // peer_request_timeout - computed: false, optional: true, required: false
  private _peerRequestTimeout?: string; 
  public get peerRequestTimeout() {
    return this.getStringAttribute('peer_request_timeout');
  }
  public set peerRequestTimeout(value: string) {
    this._peerRequestTimeout = value;
  }
  public resetPeerRequestTimeout() {
    this._peerRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRequestTimeoutInput() {
    return this._peerRequestTimeout;
  }

  // peer_update_interval - computed: false, optional: true, required: false
  private _peerUpdateInterval?: string; 
  public get peerUpdateInterval() {
    return this.getStringAttribute('peer_update_interval');
  }
  public set peerUpdateInterval(value: string) {
    this._peerUpdateInterval = value;
  }
  public resetPeerUpdateInterval() {
    this._peerUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerUpdateIntervalInput() {
    return this._peerUpdateInterval;
  }

  // safe_time_to_assume_node_rebooted_seconds - computed: false, optional: true, required: false
  private _safeTimeToAssumeNodeRebootedSeconds?: number; 
  public get safeTimeToAssumeNodeRebootedSeconds() {
    return this.getNumberAttribute('safe_time_to_assume_node_rebooted_seconds');
  }
  public set safeTimeToAssumeNodeRebootedSeconds(value: number) {
    this._safeTimeToAssumeNodeRebootedSeconds = value;
  }
  public resetSafeTimeToAssumeNodeRebootedSeconds() {
    this._safeTimeToAssumeNodeRebootedSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeTimeToAssumeNodeRebootedSecondsInput() {
    return this._safeTimeToAssumeNodeRebootedSeconds;
  }

  // watchdog_file_path - computed: false, optional: true, required: false
  private _watchdogFilePath?: string; 
  public get watchdogFilePath() {
    return this.getStringAttribute('watchdog_file_path');
  }
  public set watchdogFilePath(value: string) {
    this._watchdogFilePath = value;
  }
  public resetWatchdogFilePath() {
    this._watchdogFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogFilePathInput() {
    return this._watchdogFilePath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest k8s_self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest}
*/
export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest k8s_self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_self_node_remediation_medik8s_io_self_node_remediation_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
