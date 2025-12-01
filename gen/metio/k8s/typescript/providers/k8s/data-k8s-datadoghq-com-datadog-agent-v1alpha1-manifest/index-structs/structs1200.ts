import * as cdktf from 'cdktf';
import { DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinity,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinityToTerraform,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinityToHclTerraform,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinityOutputReference,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfig,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfigToTerraform,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfigToHclTerraform,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfigOutputReference,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfig,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfigToTerraform,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfigToHclTerraform,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfigOutputReference,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImage,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImageToTerraform,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImageToHclTerraform,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImageOutputReference,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicy,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicyToTerraform,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicyToHclTerraform,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicyOutputReference,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgent,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgentToTerraform,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgentToHclTerraform,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgentOutputReference } from './structs800'
import { DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgent,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgentToTerraform,
dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgentToHclTerraform,
DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgentOutputReference } from './structs400'
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac {
  /**
  * Used to configure RBAC resources creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#create DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Used to set up the service account name to use. Ignored if the field Create is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#service_account_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbacToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbacToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#effect DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#key DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#operator DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#toleration_seconds DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#value DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations | cdktf.IResolvable): any {
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


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations | cdktf.IResolvable): any {
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

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsOutputReference {
    return new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner {
  /**
  * AdditionalAnnotations provide annotations that will be added to the cluster checks runner Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#additional_annotations DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#additional_annotations}
  */
  readonly additionalAnnotations?: { [key: string]: string };
  /**
  * AdditionalLabels provide labels that will be added to the cluster checks runner Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#additional_labels DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
  /**
  * If specified, the pod's scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#affinity DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinity;
  /**
  * Agent configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#config DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfig;
  /**
  * Allow to put custom configuration for the Agent, corresponding to the datadog.yaml config file. See https://docs.datadoghq.com/agent/guide/agent-configuration-files/?tab=agentv6 for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#custom_config DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#custom_config}
  */
  readonly customConfig?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfig;
  /**
  * Name of the cluster checks deployment to create or migrate from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#deployment_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#deployment_name}
  */
  readonly deploymentName?: string;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#enabled DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The container image of the Datadog Cluster Checks Runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#image DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImage;
  /**
  * Provide Cluster Checks Runner Network Policy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#network_policy DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#network_policy}
  */
  readonly networkPolicy?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicy;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#node_selector DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, indicates the pod's priority. 'system-node-critical' and 'system-cluster-critical' are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#priority_class_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * RBAC configuration of the Datadog Cluster Checks Runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#rbac DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#rbac}
  */
  readonly rbac?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac;
  /**
  * Number of the Cluster Checks Runner replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#replicas DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * If specified, the Cluster-Checks pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#tolerations DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations[] | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalAnnotations),
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
    affinity: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinityToTerraform(struct!.affinity),
    config: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfigToTerraform(struct!.config),
    custom_config: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfigToTerraform(struct!.customConfig),
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    image: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImageToTerraform(struct!.image),
    network_policy: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicyToTerraform(struct!.networkPolicy),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    rbac: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbacToTerraform(struct!.rbac),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    additional_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    affinity: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinity",
    },
    config: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfig",
    },
    custom_config: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfigToHclTerraform(struct!.customConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfig",
    },
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImage",
    },
    network_policy: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicyToHclTerraform(struct!.networkPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicy",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rbac: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbacToHclTerraform(struct!.rbac),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAnnotations = this._additionalAnnotations;
    }
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._customConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig?.internalValue;
    }
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._networkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._rbac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbac = this._rbac?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAnnotations = undefined;
      this._additionalLabels = undefined;
      this._affinity.internalValue = undefined;
      this._config.internalValue = undefined;
      this._customConfig.internalValue = undefined;
      this._deploymentName = undefined;
      this._enabled = undefined;
      this._image.internalValue = undefined;
      this._networkPolicy.internalValue = undefined;
      this._nodeSelector = undefined;
      this._priorityClassName = undefined;
      this._rbac.internalValue = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAnnotations = value.additionalAnnotations;
      this._additionalLabels = value.additionalLabels;
      this._affinity.internalValue = value.affinity;
      this._config.internalValue = value.config;
      this._customConfig.internalValue = value.customConfig;
      this._deploymentName = value.deploymentName;
      this._enabled = value.enabled;
      this._image.internalValue = value.image;
      this._networkPolicy.internalValue = value.networkPolicy;
      this._nodeSelector = value.nodeSelector;
      this._priorityClassName = value.priorityClassName;
      this._rbac.internalValue = value.rbac;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // additional_annotations - computed: false, optional: true, required: false
  private _additionalAnnotations?: { [key: string]: string }; 
  public get additionalAnnotations() {
    return this.getStringMapAttribute('additional_annotations');
  }
  public set additionalAnnotations(value: { [key: string]: string }) {
    this._additionalAnnotations = value;
  }
  public resetAdditionalAnnotations() {
    this._additionalAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAnnotationsInput() {
    return this._additionalAnnotations;
  }

  // additional_labels - computed: false, optional: true, required: false
  private _additionalLabels?: { [key: string]: string }; 
  public get additionalLabels() {
    return this.getStringMapAttribute('additional_labels');
  }
  public set additionalLabels(value: { [key: string]: string }) {
    this._additionalLabels = value;
  }
  public resetAdditionalLabels() {
    this._additionalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLabelsInput() {
    return this._additionalLabels;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfigOutputReference(this, "custom_config");
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerCustomConfig) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }

  // deployment_name - computed: false, optional: true, required: false
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  public resetDeploymentName() {
    this._deploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
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

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
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

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // rbac - computed: false, optional: true, required: false
  private _rbac = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbacOutputReference(this, "rbac");
  public get rbac() {
    return this._rbac;
  }
  public putRbac(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerRbac) {
    this._rbac.internalValue = value;
  }
  public resetRbac() {
    this._rbac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacInput() {
    return this._rbac.internalValue;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret {
  /**
  * KeyName is the key of the secret to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#key_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#key_name}
  */
  readonly keyName?: string;
  /**
  * SecretName is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#secret_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecretToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecretToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyName = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyName = value.keyName;
      this._secretName = value.secretName;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret {
  /**
  * KeyName is the key of the secret to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#key_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#key_name}
  */
  readonly keyName?: string;
  /**
  * SecretName is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#secret_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecretToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecretToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyName = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyName = value.keyName;
      this._secretName = value.secretName;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials {
  /**
  * APIKey Set this to your Datadog API key before the Agent runs. See also: https://app.datadoghq.com/account/settings#agent/kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#api_key DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#api_key}
  */
  readonly apiKey?: string;
  /**
  * APIKeyExistingSecret is DEPRECATED. In order to pass the API key through an existing secret, please consider 'apiSecret' instead. If set, this parameter takes precedence over 'apiKey'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#api_key_existing_secret DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#api_key_existing_secret}
  */
  readonly apiKeyExistingSecret?: string;
  /**
  * APISecret Use existing Secret which stores API key instead of creating a new one. If set, this parameter takes precedence over 'apiKey' and 'apiKeyExistingSecret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#api_secret DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#api_secret}
  */
  readonly apiSecret?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret;
  /**
  * If you are using clusterAgent.metricsProvider.enabled = true, you must set a Datadog application key for read access to your metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#app_key DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#app_key}
  */
  readonly appKey?: string;
  /**
  * AppKeyExistingSecret is DEPRECATED. In order to pass the APP key through an existing secret, please consider 'appSecret' instead. If set, this parameter takes precedence over 'appKey'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#app_key_existing_secret DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#app_key_existing_secret}
  */
  readonly appKeyExistingSecret?: string;
  /**
  * APPSecret Use existing Secret which stores API key instead of creating a new one. If set, this parameter takes precedence over 'apiKey' and 'appKeyExistingSecret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#app_secret DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#app_secret}
  */
  readonly appSecret?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret;
  /**
  * This needs to be at least 32 characters a-zA-z. It is a preshared key between the node agents and the cluster agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#token DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#token}
  */
  readonly token?: string;
  /**
  * UseSecretBackend use the Agent secret backend feature for retreiving all credentials needed by the different components: Agent, Cluster, Cluster-Checks. default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#use_secret_backend DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#use_secret_backend}
  */
  readonly useSecretBackend?: boolean | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_key_existing_secret: cdktf.stringToTerraform(struct!.apiKeyExistingSecret),
    api_secret: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecretToTerraform(struct!.apiSecret),
    app_key: cdktf.stringToTerraform(struct!.appKey),
    app_key_existing_secret: cdktf.stringToTerraform(struct!.appKeyExistingSecret),
    app_secret: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecretToTerraform(struct!.appSecret),
    token: cdktf.stringToTerraform(struct!.token),
    use_secret_backend: cdktf.booleanToTerraform(struct!.useSecretBackend),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_existing_secret: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyExistingSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecretToHclTerraform(struct!.apiSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret",
    },
    app_key: {
      value: cdktf.stringToHclTerraform(struct!.appKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_key_existing_secret: {
      value: cdktf.stringToHclTerraform(struct!.appKeyExistingSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecretToHclTerraform(struct!.appSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_secret_backend: {
      value: cdktf.booleanToHclTerraform(struct!.useSecretBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyExistingSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyExistingSecret = this._apiKeyExistingSecret;
    }
    if (this._apiSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecret = this._apiSecret?.internalValue;
    }
    if (this._appKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKey = this._appKey;
    }
    if (this._appKeyExistingSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKeyExistingSecret = this._appKeyExistingSecret;
    }
    if (this._appSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecret = this._appSecret?.internalValue;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._useSecretBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSecretBackend = this._useSecretBackend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyExistingSecret = undefined;
      this._apiSecret.internalValue = undefined;
      this._appKey = undefined;
      this._appKeyExistingSecret = undefined;
      this._appSecret.internalValue = undefined;
      this._token = undefined;
      this._useSecretBackend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyExistingSecret = value.apiKeyExistingSecret;
      this._apiSecret.internalValue = value.apiSecret;
      this._appKey = value.appKey;
      this._appKeyExistingSecret = value.appKeyExistingSecret;
      this._appSecret.internalValue = value.appSecret;
      this._token = value.token;
      this._useSecretBackend = value.useSecretBackend;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_existing_secret - computed: false, optional: true, required: false
  private _apiKeyExistingSecret?: string; 
  public get apiKeyExistingSecret() {
    return this.getStringAttribute('api_key_existing_secret');
  }
  public set apiKeyExistingSecret(value: string) {
    this._apiKeyExistingSecret = value;
  }
  public resetApiKeyExistingSecret() {
    this._apiKeyExistingSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyExistingSecretInput() {
    return this._apiKeyExistingSecret;
  }

  // api_secret - computed: false, optional: true, required: false
  private _apiSecret = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecretOutputReference(this, "api_secret");
  public get apiSecret() {
    return this._apiSecret;
  }
  public putApiSecret(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsApiSecret) {
    this._apiSecret.internalValue = value;
  }
  public resetApiSecret() {
    this._apiSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret.internalValue;
  }

  // app_key - computed: false, optional: true, required: false
  private _appKey?: string; 
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
  public set appKey(value: string) {
    this._appKey = value;
  }
  public resetAppKey() {
    this._appKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }

  // app_key_existing_secret - computed: false, optional: true, required: false
  private _appKeyExistingSecret?: string; 
  public get appKeyExistingSecret() {
    return this.getStringAttribute('app_key_existing_secret');
  }
  public set appKeyExistingSecret(value: string) {
    this._appKeyExistingSecret = value;
  }
  public resetAppKeyExistingSecret() {
    this._appKeyExistingSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyExistingSecretInput() {
    return this._appKeyExistingSecret;
  }

  // app_secret - computed: false, optional: true, required: false
  private _appSecret = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecretOutputReference(this, "app_secret");
  public get appSecret() {
    return this._appSecret;
  }
  public putAppSecret(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsAppSecret) {
    this._appSecret.internalValue = value;
  }
  public resetAppSecret() {
    this._appSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_secret_backend - computed: false, optional: true, required: false
  private _useSecretBackend?: boolean | cdktf.IResolvable; 
  public get useSecretBackend() {
    return this.getBooleanAttribute('use_secret_backend');
  }
  public set useSecretBackend(value: boolean | cdktf.IResolvable) {
    this._useSecretBackend = value;
  }
  public resetUseSecretBackend() {
    this._useSecretBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSecretBackendInput() {
    return this._useSecretBackend;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap {
  /**
  * FileKey corresponds to the key used in the ConfigMap.Data to store the configuration file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#file_key DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#file_key}
  */
  readonly fileKey?: string;
  /**
  * The name of source ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMapToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_key: cdktf.stringToTerraform(struct!.fileKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMapToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_key: {
      value: cdktf.stringToHclTerraform(struct!.fileKey),
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

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileKey = value.fileKey;
      this._name = value.name;
    }
  }

  // file_key - computed: false, optional: true, required: false
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  public resetFileKey() {
    this._fileKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
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
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf {
  /**
  * ConfigData corresponds to the configuration file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#config_data DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#config_data}
  */
  readonly configData?: string;
  /**
  * Enable to specify a reference to an already existing ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#config_map DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_data: cdktf.stringToTerraform(struct!.configData),
    config_map: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMapToTerraform(struct!.configMap),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf | cdktf.IResolvable): any {
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
    config_map: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configData !== undefined) {
      hasAnyValues = true;
      internalValueResult.configData = this._configData;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configData = undefined;
      this._configMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configData = value.configData;
      this._configMap.internalValue = value.configMap;
    }
  }

  // config_data - computed: false, optional: true, required: false
  private _configData?: string; 
  public get configData() {
    return this.getStringAttribute('config_data');
  }
  public set configData(value: string) {
    this._configData = value;
  }
  public resetConfigData() {
    this._configData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDataInput() {
    return this._configData;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore {
  /**
  * ClusterCheck configures the Kubernetes State Metrics Core check as a cluster check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#cluster_check DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#cluster_check}
  */
  readonly clusterCheck?: boolean | cdktf.IResolvable;
  /**
  * To override the configuration for the default Kubernetes State Metrics Core check. Must point to a ConfigMap containing a valid cluster check configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#conf DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#conf}
  */
  readonly conf?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf;
  /**
  * Enable this to start the Kubernetes State Metrics Core check. Refer to https://docs.datadoghq.com/integrations/kubernetes_state_core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#enabled DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_check: cdktf.booleanToTerraform(struct!.clusterCheck),
    conf: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfToTerraform(struct!.conf),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_check: {
      value: cdktf.booleanToHclTerraform(struct!.clusterCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conf: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCheck = this._clusterCheck;
    }
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterCheck = undefined;
      this._conf.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterCheck = value.clusterCheck;
      this._conf.internalValue = value.conf;
      this._enabled = value.enabled;
    }
  }

  // cluster_check - computed: false, optional: true, required: false
  private _clusterCheck?: boolean | cdktf.IResolvable; 
  public get clusterCheck() {
    return this.getBooleanAttribute('cluster_check');
  }
  public set clusterCheck(value: boolean | cdktf.IResolvable) {
    this._clusterCheck = value;
  }
  public resetClusterCheck() {
    this._clusterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCheckInput() {
    return this._clusterCheck;
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection {
  /**
  * Collect logs from files in '/var/log/pods instead' of using the container runtime API. Collecting logs from files is usually the most efficient way of collecting logs. See also: https://docs.datadoghq.com/agent/basic_agent_usage/kubernetes/#log-collection-setup Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#container_collect_using_files DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#container_collect_using_files}
  */
  readonly containerCollectUsingFiles?: boolean | cdktf.IResolvable;
  /**
  * Allows log collection from the container log path. Set to a different path if you are not using the Docker runtime. See also: https://docs.datadoghq.com/agent/kubernetes/daemonset_setup/?tab=k8sfile#create-manifest Defaults to '/var/lib/docker/containers'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#container_logs_path DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#container_logs_path}
  */
  readonly containerLogsPath?: string;
  /**
  * Allows the log collection to use symbolic links in this directory to validate container ID -> pod. Defaults to '/var/log/containers'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#container_symlinks_path DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#container_symlinks_path}
  */
  readonly containerSymlinksPath?: string;
  /**
  * Enable this option to activate Datadog Agent log collection. See also: https://docs.datadoghq.com/agent/basic_agent_usage/kubernetes/#log-collection-setup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#enabled DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable this option to allow log collection for all containers. See also: https://docs.datadoghq.com/agent/basic_agent_usage/kubernetes/#log-collection-setup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#logs_config_container_collect_all DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#logs_config_container_collect_all}
  */
  readonly logsConfigContainerCollectAll?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of log files that the Datadog Agent tails. Increasing this limit can increase resource consumption of the Agent. See also: https://docs.datadoghq.com/agent/basic_agent_usage/kubernetes/#log-collection-setup Default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#open_files_limit DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#open_files_limit}
  */
  readonly openFilesLimit?: number;
  /**
  * Allows log collection from pod log path. Defaults to '/var/log/pods'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#pod_logs_path DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#pod_logs_path}
  */
  readonly podLogsPath?: string;
  /**
  * This path (always mounted from the host) is used by Datadog Agent to store information about processed log files. If the Datadog Agent is restarted, it starts tailing the log files immediately. Default to '/var/lib/datadog-agent/logs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#temp_storage_path DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#temp_storage_path}
  */
  readonly tempStoragePath?: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollectionToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_collect_using_files: cdktf.booleanToTerraform(struct!.containerCollectUsingFiles),
    container_logs_path: cdktf.stringToTerraform(struct!.containerLogsPath),
    container_symlinks_path: cdktf.stringToTerraform(struct!.containerSymlinksPath),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    logs_config_container_collect_all: cdktf.booleanToTerraform(struct!.logsConfigContainerCollectAll),
    open_files_limit: cdktf.numberToTerraform(struct!.openFilesLimit),
    pod_logs_path: cdktf.stringToTerraform(struct!.podLogsPath),
    temp_storage_path: cdktf.stringToTerraform(struct!.tempStoragePath),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollectionToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_collect_using_files: {
      value: cdktf.booleanToHclTerraform(struct!.containerCollectUsingFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_logs_path: {
      value: cdktf.stringToHclTerraform(struct!.containerLogsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_symlinks_path: {
      value: cdktf.stringToHclTerraform(struct!.containerSymlinksPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logs_config_container_collect_all: {
      value: cdktf.booleanToHclTerraform(struct!.logsConfigContainerCollectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_files_limit: {
      value: cdktf.numberToHclTerraform(struct!.openFilesLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_logs_path: {
      value: cdktf.stringToHclTerraform(struct!.podLogsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_storage_path: {
      value: cdktf.stringToHclTerraform(struct!.tempStoragePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerCollectUsingFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerCollectUsingFiles = this._containerCollectUsingFiles;
    }
    if (this._containerLogsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogsPath = this._containerLogsPath;
    }
    if (this._containerSymlinksPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSymlinksPath = this._containerSymlinksPath;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logsConfigContainerCollectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsConfigContainerCollectAll = this._logsConfigContainerCollectAll;
    }
    if (this._openFilesLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.openFilesLimit = this._openFilesLimit;
    }
    if (this._podLogsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLogsPath = this._podLogsPath;
    }
    if (this._tempStoragePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempStoragePath = this._tempStoragePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerCollectUsingFiles = undefined;
      this._containerLogsPath = undefined;
      this._containerSymlinksPath = undefined;
      this._enabled = undefined;
      this._logsConfigContainerCollectAll = undefined;
      this._openFilesLimit = undefined;
      this._podLogsPath = undefined;
      this._tempStoragePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerCollectUsingFiles = value.containerCollectUsingFiles;
      this._containerLogsPath = value.containerLogsPath;
      this._containerSymlinksPath = value.containerSymlinksPath;
      this._enabled = value.enabled;
      this._logsConfigContainerCollectAll = value.logsConfigContainerCollectAll;
      this._openFilesLimit = value.openFilesLimit;
      this._podLogsPath = value.podLogsPath;
      this._tempStoragePath = value.tempStoragePath;
    }
  }

  // container_collect_using_files - computed: false, optional: true, required: false
  private _containerCollectUsingFiles?: boolean | cdktf.IResolvable; 
  public get containerCollectUsingFiles() {
    return this.getBooleanAttribute('container_collect_using_files');
  }
  public set containerCollectUsingFiles(value: boolean | cdktf.IResolvable) {
    this._containerCollectUsingFiles = value;
  }
  public resetContainerCollectUsingFiles() {
    this._containerCollectUsingFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCollectUsingFilesInput() {
    return this._containerCollectUsingFiles;
  }

  // container_logs_path - computed: false, optional: true, required: false
  private _containerLogsPath?: string; 
  public get containerLogsPath() {
    return this.getStringAttribute('container_logs_path');
  }
  public set containerLogsPath(value: string) {
    this._containerLogsPath = value;
  }
  public resetContainerLogsPath() {
    this._containerLogsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogsPathInput() {
    return this._containerLogsPath;
  }

  // container_symlinks_path - computed: false, optional: true, required: false
  private _containerSymlinksPath?: string; 
  public get containerSymlinksPath() {
    return this.getStringAttribute('container_symlinks_path');
  }
  public set containerSymlinksPath(value: string) {
    this._containerSymlinksPath = value;
  }
  public resetContainerSymlinksPath() {
    this._containerSymlinksPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSymlinksPathInput() {
    return this._containerSymlinksPath;
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

  // logs_config_container_collect_all - computed: false, optional: true, required: false
  private _logsConfigContainerCollectAll?: boolean | cdktf.IResolvable; 
  public get logsConfigContainerCollectAll() {
    return this.getBooleanAttribute('logs_config_container_collect_all');
  }
  public set logsConfigContainerCollectAll(value: boolean | cdktf.IResolvable) {
    this._logsConfigContainerCollectAll = value;
  }
  public resetLogsConfigContainerCollectAll() {
    this._logsConfigContainerCollectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsConfigContainerCollectAllInput() {
    return this._logsConfigContainerCollectAll;
  }

  // open_files_limit - computed: false, optional: true, required: false
  private _openFilesLimit?: number; 
  public get openFilesLimit() {
    return this.getNumberAttribute('open_files_limit');
  }
  public set openFilesLimit(value: number) {
    this._openFilesLimit = value;
  }
  public resetOpenFilesLimit() {
    this._openFilesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openFilesLimitInput() {
    return this._openFilesLimit;
  }

  // pod_logs_path - computed: false, optional: true, required: false
  private _podLogsPath?: string; 
  public get podLogsPath() {
    return this.getStringAttribute('pod_logs_path');
  }
  public set podLogsPath(value: string) {
    this._podLogsPath = value;
  }
  public resetPodLogsPath() {
    this._podLogsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLogsPathInput() {
    return this._podLogsPath;
  }

  // temp_storage_path - computed: false, optional: true, required: false
  private _tempStoragePath?: string; 
  public get tempStoragePath() {
    return this.getStringAttribute('temp_storage_path');
  }
  public set tempStoragePath(value: string) {
    this._tempStoragePath = value;
  }
  public resetTempStoragePath() {
    this._tempStoragePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempStoragePathInput() {
    return this._tempStoragePath;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#enabled DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoringToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoringToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap {
  /**
  * FileKey corresponds to the key used in the ConfigMap.Data to store the configuration file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#file_key DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#file_key}
  */
  readonly fileKey?: string;
  /**
  * The name of source ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMapToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_key: cdktf.stringToTerraform(struct!.fileKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMapToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_key: {
      value: cdktf.stringToHclTerraform(struct!.fileKey),
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

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileKey = value.fileKey;
      this._name = value.name;
    }
  }

  // file_key - computed: false, optional: true, required: false
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  public resetFileKey() {
    this._fileKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
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
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf {
  /**
  * ConfigData corresponds to the configuration file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#config_data DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#config_data}
  */
  readonly configData?: string;
  /**
  * Enable to specify a reference to an already existing ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#config_map DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_data: cdktf.stringToTerraform(struct!.configData),
    config_map: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMapToTerraform(struct!.configMap),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf | cdktf.IResolvable): any {
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
    config_map: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configData !== undefined) {
      hasAnyValues = true;
      internalValueResult.configData = this._configData;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configData = undefined;
      this._configMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configData = value.configData;
      this._configMap.internalValue = value.configMap;
    }
  }

  // config_data - computed: false, optional: true, required: false
  private _configData?: string; 
  public get configData() {
    return this.getStringAttribute('config_data');
  }
  public set configData(value: string) {
    this._configData = value;
  }
  public resetConfigData() {
    this._configData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDataInput() {
    return this._configData;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing {
  /**
  * Deactivate this to stop the scrubbing of sensitive container data (passwords, tokens, etc. ).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#containers DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#containers}
  */
  readonly containers?: boolean | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbingToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.booleanToTerraform(struct!.containers),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbingToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.booleanToHclTerraform(struct!.containers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers = value.containers;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: boolean | cdktf.IResolvable; 
  public get containers() {
    return this.getBooleanAttribute('containers');
  }
  public set containers(value: boolean | cdktf.IResolvable) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer {
  /**
  * Additional endpoints for shipping the collected data as json in the form of {'https://process.agent.datadoghq.com': ['apikey1', ...], ...}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#additional_endpoints DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#additional_endpoints}
  */
  readonly additionalEndpoints?: string;
  /**
  * ClusterCheck configures the Orchestrator Explorer check as a cluster check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#cluster_check DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#cluster_check}
  */
  readonly clusterCheck?: boolean | cdktf.IResolvable;
  /**
  * To override the configuration for the default Orchestrator Explorer check. Must point to a ConfigMap containing a valid cluster check configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#conf DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#conf}
  */
  readonly conf?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf;
  /**
  * Set this for the Datadog endpoint for the orchestrator explorer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#dd_url DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#dd_url}
  */
  readonly ddUrl?: string;
  /**
  * Enable this to activate live Kubernetes monitoring. See also: https://docs.datadoghq.com/infrastructure/livecontainers/#kubernetes-resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#enabled DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Additional tags for the collected data in the form of 'a b c' Difference to DD_TAGS: this is a cluster agent option that is used to define custom cluster tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#extra_tags DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#extra_tags}
  */
  readonly extraTags?: string[];
  /**
  * Option to disable scrubbing of sensitive container data (passwords, tokens, etc. ).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#scrubbing DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#scrubbing}
  */
  readonly scrubbing?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_endpoints: cdktf.stringToTerraform(struct!.additionalEndpoints),
    cluster_check: cdktf.booleanToTerraform(struct!.clusterCheck),
    conf: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfToTerraform(struct!.conf),
    dd_url: cdktf.stringToTerraform(struct!.ddUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extra_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraTags),
    scrubbing: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbingToTerraform(struct!.scrubbing),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_endpoints: {
      value: cdktf.stringToHclTerraform(struct!.additionalEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_check: {
      value: cdktf.booleanToHclTerraform(struct!.clusterCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conf: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf",
    },
    dd_url: {
      value: cdktf.stringToHclTerraform(struct!.ddUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scrubbing: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbingToHclTerraform(struct!.scrubbing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEndpoints = this._additionalEndpoints;
    }
    if (this._clusterCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCheck = this._clusterCheck;
    }
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._ddUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddUrl = this._ddUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extraTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraTags = this._extraTags;
    }
    if (this._scrubbing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrubbing = this._scrubbing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalEndpoints = undefined;
      this._clusterCheck = undefined;
      this._conf.internalValue = undefined;
      this._ddUrl = undefined;
      this._enabled = undefined;
      this._extraTags = undefined;
      this._scrubbing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalEndpoints = value.additionalEndpoints;
      this._clusterCheck = value.clusterCheck;
      this._conf.internalValue = value.conf;
      this._ddUrl = value.ddUrl;
      this._enabled = value.enabled;
      this._extraTags = value.extraTags;
      this._scrubbing.internalValue = value.scrubbing;
    }
  }

  // additional_endpoints - computed: false, optional: true, required: false
  private _additionalEndpoints?: string; 
  public get additionalEndpoints() {
    return this.getStringAttribute('additional_endpoints');
  }
  public set additionalEndpoints(value: string) {
    this._additionalEndpoints = value;
  }
  public resetAdditionalEndpoints() {
    this._additionalEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEndpointsInput() {
    return this._additionalEndpoints;
  }

  // cluster_check - computed: false, optional: true, required: false
  private _clusterCheck?: boolean | cdktf.IResolvable; 
  public get clusterCheck() {
    return this.getBooleanAttribute('cluster_check');
  }
  public set clusterCheck(value: boolean | cdktf.IResolvable) {
    this._clusterCheck = value;
  }
  public resetClusterCheck() {
    this._clusterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCheckInput() {
    return this._clusterCheck;
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
  }

  // dd_url - computed: false, optional: true, required: false
  private _ddUrl?: string; 
  public get ddUrl() {
    return this.getStringAttribute('dd_url');
  }
  public set ddUrl(value: string) {
    this._ddUrl = value;
  }
  public resetDdUrl() {
    this._ddUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddUrlInput() {
    return this._ddUrl;
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

  // extra_tags - computed: false, optional: true, required: false
  private _extraTags?: string[]; 
  public get extraTags() {
    return this.getListAttribute('extra_tags');
  }
  public set extraTags(value: string[]) {
    this._extraTags = value;
  }
  public resetExtraTags() {
    this._extraTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraTagsInput() {
    return this._extraTags;
  }

  // scrubbing - computed: false, optional: true, required: false
  private _scrubbing = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbingOutputReference(this, "scrubbing");
  public get scrubbing() {
    return this._scrubbing;
  }
  public putScrubbing(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerScrubbing) {
    this._scrubbing.internalValue = value;
  }
  public resetScrubbing() {
    this._scrubbing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrubbingInput() {
    return this._scrubbing.internalValue;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape {
  /**
  * AdditionalConfigs allows adding advanced prometheus check configurations with custom discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#additional_configs DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#additional_configs}
  */
  readonly additionalConfigs?: string;
  /**
  * Enable autodiscovering pods and services exposing prometheus metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#enabled DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ServiceEndpoints enables generating dedicated checks for service endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#service_endpoints DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#service_endpoints}
  */
  readonly serviceEndpoints?: boolean | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrapeToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_configs: cdktf.stringToTerraform(struct!.additionalConfigs),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    service_endpoints: cdktf.booleanToTerraform(struct!.serviceEndpoints),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrapeToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_configs: {
      value: cdktf.stringToHclTerraform(struct!.additionalConfigs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.serviceEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfigs = this._additionalConfigs;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._serviceEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEndpoints = this._serviceEndpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfigs = undefined;
      this._enabled = undefined;
      this._serviceEndpoints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfigs = value.additionalConfigs;
      this._enabled = value.enabled;
      this._serviceEndpoints = value.serviceEndpoints;
    }
  }

  // additional_configs - computed: false, optional: true, required: false
  private _additionalConfigs?: string; 
  public get additionalConfigs() {
    return this.getStringAttribute('additional_configs');
  }
  public set additionalConfigs(value: string) {
    this._additionalConfigs = value;
  }
  public resetAdditionalConfigs() {
    this._additionalConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigsInput() {
    return this._additionalConfigs;
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

  // service_endpoints - computed: false, optional: true, required: false
  private _serviceEndpoints?: boolean | cdktf.IResolvable; 
  public get serviceEndpoints() {
    return this.getBooleanAttribute('service_endpoints');
  }
  public set serviceEndpoints(value: boolean | cdktf.IResolvable) {
    this._serviceEndpoints = value;
  }
  public resetServiceEndpoints() {
    this._serviceEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointsInput() {
    return this._serviceEndpoints;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures {
  /**
  * KubeStateMetricsCore configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#kube_state_metrics_core DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#kube_state_metrics_core}
  */
  readonly kubeStateMetricsCore?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore;
  /**
  * LogCollection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#log_collection DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#log_collection}
  */
  readonly logCollection?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection;
  /**
  * NetworkMonitoring configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#network_monitoring DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#network_monitoring}
  */
  readonly networkMonitoring?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring;
  /**
  * OrchestratorExplorer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#orchestrator_explorer DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#orchestrator_explorer}
  */
  readonly orchestratorExplorer?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer;
  /**
  * PrometheusScrape configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#prometheus_scrape DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#prometheus_scrape}
  */
  readonly prometheusScrape?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_state_metrics_core: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreToTerraform(struct!.kubeStateMetricsCore),
    log_collection: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollectionToTerraform(struct!.logCollection),
    network_monitoring: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoringToTerraform(struct!.networkMonitoring),
    orchestrator_explorer: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerToTerraform(struct!.orchestratorExplorer),
    prometheus_scrape: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrapeToTerraform(struct!.prometheusScrape),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_state_metrics_core: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreToHclTerraform(struct!.kubeStateMetricsCore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore",
    },
    log_collection: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollectionToHclTerraform(struct!.logCollection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection",
    },
    network_monitoring: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoringToHclTerraform(struct!.networkMonitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring",
    },
    orchestrator_explorer: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerToHclTerraform(struct!.orchestratorExplorer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer",
    },
    prometheus_scrape: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrapeToHclTerraform(struct!.prometheusScrape),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeStateMetricsCore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeStateMetricsCore = this._kubeStateMetricsCore?.internalValue;
    }
    if (this._logCollection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCollection = this._logCollection?.internalValue;
    }
    if (this._networkMonitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMonitoring = this._networkMonitoring?.internalValue;
    }
    if (this._orchestratorExplorer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestratorExplorer = this._orchestratorExplorer?.internalValue;
    }
    if (this._prometheusScrape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusScrape = this._prometheusScrape?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubeStateMetricsCore.internalValue = undefined;
      this._logCollection.internalValue = undefined;
      this._networkMonitoring.internalValue = undefined;
      this._orchestratorExplorer.internalValue = undefined;
      this._prometheusScrape.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubeStateMetricsCore.internalValue = value.kubeStateMetricsCore;
      this._logCollection.internalValue = value.logCollection;
      this._networkMonitoring.internalValue = value.networkMonitoring;
      this._orchestratorExplorer.internalValue = value.orchestratorExplorer;
      this._prometheusScrape.internalValue = value.prometheusScrape;
    }
  }

  // kube_state_metrics_core - computed: false, optional: true, required: false
  private _kubeStateMetricsCore = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCoreOutputReference(this, "kube_state_metrics_core");
  public get kubeStateMetricsCore() {
    return this._kubeStateMetricsCore;
  }
  public putKubeStateMetricsCore(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesKubeStateMetricsCore) {
    this._kubeStateMetricsCore.internalValue = value;
  }
  public resetKubeStateMetricsCore() {
    this._kubeStateMetricsCore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeStateMetricsCoreInput() {
    return this._kubeStateMetricsCore.internalValue;
  }

  // log_collection - computed: false, optional: true, required: false
  private _logCollection = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollectionOutputReference(this, "log_collection");
  public get logCollection() {
    return this._logCollection;
  }
  public putLogCollection(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesLogCollection) {
    this._logCollection.internalValue = value;
  }
  public resetLogCollection() {
    this._logCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionInput() {
    return this._logCollection.internalValue;
  }

  // network_monitoring - computed: false, optional: true, required: false
  private _networkMonitoring = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoringOutputReference(this, "network_monitoring");
  public get networkMonitoring() {
    return this._networkMonitoring;
  }
  public putNetworkMonitoring(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesNetworkMonitoring) {
    this._networkMonitoring.internalValue = value;
  }
  public resetNetworkMonitoring() {
    this._networkMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMonitoringInput() {
    return this._networkMonitoring.internalValue;
  }

  // orchestrator_explorer - computed: false, optional: true, required: false
  private _orchestratorExplorer = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorerOutputReference(this, "orchestrator_explorer");
  public get orchestratorExplorer() {
    return this._orchestratorExplorer;
  }
  public putOrchestratorExplorer(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOrchestratorExplorer) {
    this._orchestratorExplorer.internalValue = value;
  }
  public resetOrchestratorExplorer() {
    this._orchestratorExplorer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorExplorerInput() {
    return this._orchestratorExplorer.internalValue;
  }

  // prometheus_scrape - computed: false, optional: true, required: false
  private _prometheusScrape = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrapeOutputReference(this, "prometheus_scrape");
  public get prometheusScrape() {
    return this._prometheusScrape;
  }
  public putPrometheusScrape(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesPrometheusScrape) {
    this._prometheusScrape.internalValue = value;
  }
  public resetPrometheusScrape() {
    this._prometheusScrape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusScrapeInput() {
    return this._prometheusScrape.internalValue;
  }
}
export interface DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpec {
  /**
  * The desired state of the Agent as an extended daemonset. Contains the Node Agent configuration and deployment strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#agent DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#agent}
  */
  readonly agent?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgent;
  /**
  * The desired state of the Cluster Agent as a deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#cluster_agent DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#cluster_agent}
  */
  readonly clusterAgent?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgent;
  /**
  * The desired state of the Cluster Checks Runner as a deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#cluster_checks_runner DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#cluster_checks_runner}
  */
  readonly clusterChecksRunner?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner;
  /**
  * Set a unique cluster name to allow scoping hosts and Cluster Checks Runner easily.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#cluster_name DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Configure the credentials needed to run Agents. If not set, then the credentials set in the DatadogOperator will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#credentials DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials;
  /**
  * Features running on the Agent and Cluster Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#features DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#features}
  */
  readonly features?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures;
  /**
  * Registry to use for all Agent images (default gcr.io/datadoghq). Use public.ecr.aws/datadog for AWS Use docker.io/datadog for DockerHub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#registry DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#registry}
  */
  readonly registry?: string;
  /**
  * The site of the Datadog intake to send Agent data to. Set to 'datadoghq.eu' to send data to the EU site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/datadoghq_com_datadog_agent_v1alpha1_manifest#site DataK8SDatadoghqComDatadogAgentV1Alpha1Manifest#site}
  */
  readonly site?: string;
}

export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgentToTerraform(struct!.agent),
    cluster_agent: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgentToTerraform(struct!.clusterAgent),
    cluster_checks_runner: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerToTerraform(struct!.clusterChecksRunner),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    credentials: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsToTerraform(struct!.credentials),
    features: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesToTerraform(struct!.features),
    registry: cdktf.stringToTerraform(struct!.registry),
    site: cdktf.stringToTerraform(struct!.site),
  }
}


export function dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgentToHclTerraform(struct!.agent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgent",
    },
    cluster_agent: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgentToHclTerraform(struct!.clusterAgent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgent",
    },
    cluster_checks_runner: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerToHclTerraform(struct!.clusterChecksRunner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials",
    },
    features: {
      value: dataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesToHclTerraform(struct!.features),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    if (this._clusterAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAgent = this._clusterAgent?.internalValue;
    }
    if (this._clusterChecksRunner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterChecksRunner = this._clusterChecksRunner?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent.internalValue = undefined;
      this._clusterAgent.internalValue = undefined;
      this._clusterChecksRunner.internalValue = undefined;
      this._clusterName = undefined;
      this._credentials.internalValue = undefined;
      this._features.internalValue = undefined;
      this._registry = undefined;
      this._site = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent.internalValue = value.agent;
      this._clusterAgent.internalValue = value.clusterAgent;
      this._clusterChecksRunner.internalValue = value.clusterChecksRunner;
      this._clusterName = value.clusterName;
      this._credentials.internalValue = value.credentials;
      this._features.internalValue = value.features;
      this._registry = value.registry;
      this._site = value.site;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecAgent) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // cluster_agent - computed: false, optional: true, required: false
  private _clusterAgent = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgentOutputReference(this, "cluster_agent");
  public get clusterAgent() {
    return this._clusterAgent;
  }
  public putClusterAgent(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterAgent) {
    this._clusterAgent.internalValue = value;
  }
  public resetClusterAgent() {
    this._clusterAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAgentInput() {
    return this._clusterAgent.internalValue;
  }

  // cluster_checks_runner - computed: false, optional: true, required: false
  private _clusterChecksRunner = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunnerOutputReference(this, "cluster_checks_runner");
  public get clusterChecksRunner() {
    return this._clusterChecksRunner;
  }
  public putClusterChecksRunner(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecClusterChecksRunner) {
    this._clusterChecksRunner.internalValue = value;
  }
  public resetClusterChecksRunner() {
    this._clusterChecksRunner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterChecksRunnerInput() {
    return this._clusterChecksRunner.internalValue;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: DataK8SDatadoghqComDatadogAgentV1Alpha1ManifestSpecFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }
}
