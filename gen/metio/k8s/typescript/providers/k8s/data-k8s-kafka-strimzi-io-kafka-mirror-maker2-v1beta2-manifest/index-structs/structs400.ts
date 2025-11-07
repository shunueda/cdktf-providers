import * as cdktf from 'cdktf';
import { DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinity,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinityOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiService,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiServiceToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiServiceToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiServiceOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfig,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfigToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfigToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfigOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainer,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainerToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainerToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainerOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPod,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPodToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPodToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPodOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccount,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccountToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccountToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccountOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBinding,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBindingToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBindingToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBindingOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainer,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainerToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainerToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainerOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeployment,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeploymentToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeploymentToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeploymentOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessService,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessServiceToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessServiceToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessServiceOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainer,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainerToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainerToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainerOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecret,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecretToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecretToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecretOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClusters,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClustersToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClustersToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClustersList,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfiguration,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfigurationToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfigurationToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfigurationOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptions,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptionsToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptionsToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptionsOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptions,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptionsToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptionsToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptionsOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbe,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbeToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbeToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbeOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLogging,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLoggingToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLoggingToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLoggingOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfig,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfigToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfigToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfigOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrors,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrorsToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrorsToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrorsList,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRack,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRackToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRackToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRackOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbe,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbeToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbeToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbeOutputReference,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResources,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResourcesToTerraform,
dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResourcesToHclTerraform,
DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResourcesOutputReference } from './structs0'
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#pod_affinity_term DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#weight DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#pod_affinity_term DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#weight DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#node_affinity DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#pod_affinity DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#pod_anti_affinity DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#hostnames DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#ip DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#level DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#role DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#user DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#gmsa_credential_spec DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#gmsa_credential_spec_name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#host_process DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#run_as_user_name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#app_armor_profile DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#fs_group DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#fs_group_change_policy DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#run_as_group DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#run_as_non_root DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#run_as_user DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#se_linux_options DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#seccomp_profile DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#supplemental_groups DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#sysctls DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#sysctls}
  */
  readonly sysctls?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#windows_options DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_armor_profile: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_armor_profile: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile",
    },
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#effect DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#toleration_seconds DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#max_skew DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#max_skew}
  */
  readonly maxSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#min_domains DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#node_affinity_policy DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#node_taints_policy DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#when_unsatisfiable DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: true, required: false
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  public resetMaxSkew() {
    this._maxSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: true, required: false
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  public resetWhenUnsatisfiable() {
    this._whenUnsatisfiable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#mode DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#path DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#default_mode DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#items DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#items}
  */
  readonly items?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#amount DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#amount}
  */
  readonly amount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#format DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#format}
  */
  readonly format?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.stringToTerraform(struct!.amount),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.stringToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._format = value.format;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: string; 
  public get amount() {
    return this.getStringAttribute('amount');
  }
  public set amount(value: string) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#medium DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#medium}
  */
  readonly medium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#size_limit DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#size_limit}
  */
  readonly sizeLimit?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToHclTerraform(struct!.sizeLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit.internalValue = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitOutputReference(this, "size_limit");
  public get sizeLimit() {
    return this._sizeLimit;
  }
  public putSizeLimit(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit) {
    this._sizeLimit.internalValue = value;
  }
  public resetSizeLimit() {
    this._sizeLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#claim_name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#claim_name}
  */
  readonly claimName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#read_only DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#mode DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#path DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#default_mode DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#items DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#items}
  */
  readonly items?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes {
  /**
  * ConfigMap to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#config_map DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#config_map}
  */
  readonly configMap?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap;
  /**
  * EmptyDir to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#empty_dir DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir;
  /**
  * Name to use for the volume. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * PersistentVolumeClaim object to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#persistent_volume_claim DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim;
  /**
  * Secret to use populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#secret DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#secret}
  */
  readonly secret?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapToTerraform(struct!.configMap),
    empty_dir: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirToTerraform(struct!.emptyDir),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_claim: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    secret: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretToTerraform(struct!.secret),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap",
    },
    empty_dir: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim",
    },
    secret: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._name = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._emptyDir.internalValue = value.emptyDir;
      this._name = value.name;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
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

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod {
  /**
  * The pod's affinity rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#affinity DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#affinity}
  */
  readonly affinity?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity;
  /**
  * Indicates whether information about services should be injected into Pod's environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#enable_service_links DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * The pod's HostAliases. HostAliases is an optional list of hosts and IPs that will be injected into the Pod's hosts file if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#host_aliases DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases[] | cdktf.IResolvable;
  /**
  * List of references to secrets in the same namespace to use for pulling any of the images used by this Pod. When the 'STRIMZI_IMAGE_PULL_SECRETS' environment variable in Cluster Operator and the 'imagePullSecrets' option are specified, only the 'imagePullSecrets' variable is used and the 'STRIMZI_IMAGE_PULL_SECRETS' variable is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#image_pull_secrets DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata;
  /**
  * The name of the priority class used to assign priority to the pods. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#priority_class_name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * The name of the scheduler used to dispatch this 'Pod'. If not specified, the default scheduler will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#scheduler_name DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Configures pod-level security attributes and common container settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#security_context DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#security_context}
  */
  readonly securityContext?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext;
  /**
  * The grace period is the duration in seconds after the processes running in the pod are sent a termination signal, and the time when the processes are forcibly halted with a kill signal. Set this value to longer than the expected cleanup time for your process. Value must be a non-negative integer. A zero value indicates delete immediately. You might need to increase the grace period for very large Kafka clusters, so that the Kafka brokers have enough time to transfer their work to another broker before they are terminated. Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#termination_grace_period_seconds DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Defines the total amount of pod memory allocated for the temporary 'EmptyDir' volume '/tmp'. Specify the allocation in memory units, for example, '100Mi' for 100 mebibytes. Default value is '5Mi'. The '/tmp' volume is backed by pod memory, not disk storage, so avoid setting a high value as it consumes pod memory resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#tmp_dir_size_limit DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#tmp_dir_size_limit}
  */
  readonly tmpDirSizeLimit?: string;
  /**
  * The pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#tolerations DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations[] | cdktf.IResolvable;
  /**
  * The pod's topology spread constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#topology_spread_constraints DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Additional volumes that can be mounted to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#volumes DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#volumes}
  */
  readonly volumes?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityToTerraform(struct!.affinity),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    host_aliases: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesToTerraform, false)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadataToTerraform(struct!.metadata),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    security_context: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextToTerraform(struct!.securityContext),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tmp_dir_size_limit: cdktf.stringToTerraform(struct!.tmpDirSizeLimit),
    tolerations: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volumes: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesList",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsList",
    },
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tmp_dir_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.tmpDirSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tmpDirSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpDirSizeLimit = this._tmpDirSizeLimit;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._enableServiceLinks = undefined;
      this._hostAliases.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._priorityClassName = undefined;
      this._schedulerName = undefined;
      this._securityContext.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tmpDirSizeLimit = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._enableServiceLinks = value.enableServiceLinks;
      this._hostAliases.internalValue = value.hostAliases;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._metadata.internalValue = value.metadata;
      this._priorityClassName = value.priorityClassName;
      this._schedulerName = value.schedulerName;
      this._securityContext.internalValue = value.securityContext;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tmpDirSizeLimit = value.tmpDirSizeLimit;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // tmp_dir_size_limit - computed: false, optional: true, required: false
  private _tmpDirSizeLimit?: string; 
  public get tmpDirSizeLimit() {
    return this.getStringAttribute('tmp_dir_size_limit');
  }
  public set tmpDirSizeLimit(value: string) {
    this._tmpDirSizeLimit = value;
  }
  public resetTmpDirSizeLimit() {
    this._tmpDirSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpDirSizeLimitInput() {
    return this._tmpDirSizeLimit;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget {
  /**
  * Maximum number of unavailable pods to allow automatic Pod eviction. A Pod eviction is allowed when the 'maxUnavailable' number of pods or fewer are unavailable after the eviction. Setting this value to 0 prevents all voluntary evictions, so the pods must be evicted manually. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#max_unavailable DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Metadata to apply to the 'PodDisruptionBudgetTemplate' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._metadata.internalValue = value.metadata;
    }
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet {
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount {
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate {
  /**
  * Template for Kafka Connect API 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#api_service DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#api_service}
  */
  readonly apiService?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiService;
  /**
  * Template for the Kafka Connect BuildConfig used to build new container images. The BuildConfig is used only on OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#build_config DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#build_config}
  */
  readonly buildConfig?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfig;
  /**
  * Template for the Kafka Connect Build container. The build container is used only on Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#build_container DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#build_container}
  */
  readonly buildContainer?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainer;
  /**
  * Template for Kafka Connect Build 'Pods'. The build pod is used only on Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#build_pod DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#build_pod}
  */
  readonly buildPod?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPod;
  /**
  * Template for the Kafka Connect Build service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#build_service_account DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#build_service_account}
  */
  readonly buildServiceAccount?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccount;
  /**
  * Template for the Kafka Connect ClusterRoleBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#cluster_role_binding DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#cluster_role_binding}
  */
  readonly clusterRoleBinding?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBinding;
  /**
  * Template for the Kafka Connect container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#connect_container DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#connect_container}
  */
  readonly connectContainer?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainer;
  /**
  * Template for Kafka Connect 'Deployment'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#deployment DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#deployment}
  */
  readonly deployment?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeployment;
  /**
  * Template for Kafka Connect headless 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#headless_service DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#headless_service}
  */
  readonly headlessService?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessService;
  /**
  * Template for the Kafka init container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#init_container DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#init_container}
  */
  readonly initContainer?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainer;
  /**
  * Template for Secret of the Kafka Connect Cluster JMX authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#jmx_secret DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#jmx_secret}
  */
  readonly jmxSecret?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecret;
  /**
  * Template for Kafka Connect 'Pods'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#pod DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#pod}
  */
  readonly pod?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod;
  /**
  * Template for Kafka Connect 'PodDisruptionBudget'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#pod_disruption_budget DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget;
  /**
  * Template for Kafka Connect 'StrimziPodSet' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#pod_set DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#pod_set}
  */
  readonly podSet?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet;
  /**
  * Template for the Kafka Connect service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#service_account DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_service: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiServiceToTerraform(struct!.apiService),
    build_config: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfigToTerraform(struct!.buildConfig),
    build_container: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainerToTerraform(struct!.buildContainer),
    build_pod: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPodToTerraform(struct!.buildPod),
    build_service_account: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccountToTerraform(struct!.buildServiceAccount),
    cluster_role_binding: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBindingToTerraform(struct!.clusterRoleBinding),
    connect_container: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainerToTerraform(struct!.connectContainer),
    deployment: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeploymentToTerraform(struct!.deployment),
    headless_service: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessServiceToTerraform(struct!.headlessService),
    init_container: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainerToTerraform(struct!.initContainer),
    jmx_secret: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecretToTerraform(struct!.jmxSecret),
    pod: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodToTerraform(struct!.pod),
    pod_disruption_budget: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    pod_set: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetToTerraform(struct!.podSet),
    service_account: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_service: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiServiceToHclTerraform(struct!.apiService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiService",
    },
    build_config: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfigToHclTerraform(struct!.buildConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfig",
    },
    build_container: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainerToHclTerraform(struct!.buildContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainer",
    },
    build_pod: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPodToHclTerraform(struct!.buildPod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPod",
    },
    build_service_account: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccountToHclTerraform(struct!.buildServiceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccount",
    },
    cluster_role_binding: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBindingToHclTerraform(struct!.clusterRoleBinding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBinding",
    },
    connect_container: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainerToHclTerraform(struct!.connectContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainer",
    },
    deployment: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeployment",
    },
    headless_service: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessServiceToHclTerraform(struct!.headlessService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessService",
    },
    init_container: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainerToHclTerraform(struct!.initContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainer",
    },
    jmx_secret: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecretToHclTerraform(struct!.jmxSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecret",
    },
    pod: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod",
    },
    pod_disruption_budget: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget",
    },
    pod_set: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetToHclTerraform(struct!.podSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet",
    },
    service_account: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiService = this._apiService?.internalValue;
    }
    if (this._buildConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildConfig = this._buildConfig?.internalValue;
    }
    if (this._buildContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildContainer = this._buildContainer?.internalValue;
    }
    if (this._buildPod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildPod = this._buildPod?.internalValue;
    }
    if (this._buildServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildServiceAccount = this._buildServiceAccount?.internalValue;
    }
    if (this._clusterRoleBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleBinding = this._clusterRoleBinding?.internalValue;
    }
    if (this._connectContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectContainer = this._connectContainer?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._headlessService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headlessService = this._headlessService?.internalValue;
    }
    if (this._initContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainer = this._initContainer?.internalValue;
    }
    if (this._jmxSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxSecret = this._jmxSecret?.internalValue;
    }
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._podSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSet = this._podSet?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiService.internalValue = undefined;
      this._buildConfig.internalValue = undefined;
      this._buildContainer.internalValue = undefined;
      this._buildPod.internalValue = undefined;
      this._buildServiceAccount.internalValue = undefined;
      this._clusterRoleBinding.internalValue = undefined;
      this._connectContainer.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._headlessService.internalValue = undefined;
      this._initContainer.internalValue = undefined;
      this._jmxSecret.internalValue = undefined;
      this._pod.internalValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._podSet.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiService.internalValue = value.apiService;
      this._buildConfig.internalValue = value.buildConfig;
      this._buildContainer.internalValue = value.buildContainer;
      this._buildPod.internalValue = value.buildPod;
      this._buildServiceAccount.internalValue = value.buildServiceAccount;
      this._clusterRoleBinding.internalValue = value.clusterRoleBinding;
      this._connectContainer.internalValue = value.connectContainer;
      this._deployment.internalValue = value.deployment;
      this._headlessService.internalValue = value.headlessService;
      this._initContainer.internalValue = value.initContainer;
      this._jmxSecret.internalValue = value.jmxSecret;
      this._pod.internalValue = value.pod;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._podSet.internalValue = value.podSet;
      this._serviceAccount.internalValue = value.serviceAccount;
    }
  }

  // api_service - computed: false, optional: true, required: false
  private _apiService = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiServiceOutputReference(this, "api_service");
  public get apiService() {
    return this._apiService;
  }
  public putApiService(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateApiService) {
    this._apiService.internalValue = value;
  }
  public resetApiService() {
    this._apiService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServiceInput() {
    return this._apiService.internalValue;
  }

  // build_config - computed: false, optional: true, required: false
  private _buildConfig = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildConfig) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // build_container - computed: false, optional: true, required: false
  private _buildContainer = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainerOutputReference(this, "build_container");
  public get buildContainer() {
    return this._buildContainer;
  }
  public putBuildContainer(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildContainer) {
    this._buildContainer.internalValue = value;
  }
  public resetBuildContainer() {
    this._buildContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildContainerInput() {
    return this._buildContainer.internalValue;
  }

  // build_pod - computed: false, optional: true, required: false
  private _buildPod = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPodOutputReference(this, "build_pod");
  public get buildPod() {
    return this._buildPod;
  }
  public putBuildPod(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildPod) {
    this._buildPod.internalValue = value;
  }
  public resetBuildPod() {
    this._buildPod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPodInput() {
    return this._buildPod.internalValue;
  }

  // build_service_account - computed: false, optional: true, required: false
  private _buildServiceAccount = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccountOutputReference(this, "build_service_account");
  public get buildServiceAccount() {
    return this._buildServiceAccount;
  }
  public putBuildServiceAccount(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateBuildServiceAccount) {
    this._buildServiceAccount.internalValue = value;
  }
  public resetBuildServiceAccount() {
    this._buildServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildServiceAccountInput() {
    return this._buildServiceAccount.internalValue;
  }

  // cluster_role_binding - computed: false, optional: true, required: false
  private _clusterRoleBinding = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBindingOutputReference(this, "cluster_role_binding");
  public get clusterRoleBinding() {
    return this._clusterRoleBinding;
  }
  public putClusterRoleBinding(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateClusterRoleBinding) {
    this._clusterRoleBinding.internalValue = value;
  }
  public resetClusterRoleBinding() {
    this._clusterRoleBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleBindingInput() {
    return this._clusterRoleBinding.internalValue;
  }

  // connect_container - computed: false, optional: true, required: false
  private _connectContainer = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainerOutputReference(this, "connect_container");
  public get connectContainer() {
    return this._connectContainer;
  }
  public putConnectContainer(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateConnectContainer) {
    this._connectContainer.internalValue = value;
  }
  public resetConnectContainer() {
    this._connectContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectContainerInput() {
    return this._connectContainer.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // headless_service - computed: false, optional: true, required: false
  private _headlessService = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessServiceOutputReference(this, "headless_service");
  public get headlessService() {
    return this._headlessService;
  }
  public putHeadlessService(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateHeadlessService) {
    this._headlessService.internalValue = value;
  }
  public resetHeadlessService() {
    this._headlessService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlessServiceInput() {
    return this._headlessService.internalValue;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainerOutputReference(this, "init_container");
  public get initContainer() {
    return this._initContainer;
  }
  public putInitContainer(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateInitContainer) {
    this._initContainer.internalValue = value;
  }
  public resetInitContainer() {
    this._initContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer.internalValue;
  }

  // jmx_secret - computed: false, optional: true, required: false
  private _jmxSecret = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecretOutputReference(this, "jmx_secret");
  public get jmxSecret() {
    return this._jmxSecret;
  }
  public putJmxSecret(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateJmxSecret) {
    this._jmxSecret.internalValue = value;
  }
  public resetJmxSecret() {
    this._jmxSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxSecretInput() {
    return this._jmxSecret.internalValue;
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // pod_set - computed: false, optional: true, required: false
  private _podSet = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSetOutputReference(this, "pod_set");
  public get podSet() {
    return this._podSet;
  }
  public putPodSet(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplatePodSet) {
    this._podSet.internalValue = value;
  }
  public resetPodSet() {
    this._podSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSetInput() {
    return this._podSet.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing {
  /**
  * Type of the tracing used. Currently the only supported type is 'opentelemetry' for OpenTelemetry tracing. As of Strimzi 0.37.0, 'jaeger' type is not supported anymore and this option is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracingToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracingToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpec {
  /**
  * The image of the init container used for initializing the 'client.rack'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#client_rack_init_image DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#client_rack_init_image}
  */
  readonly clientRackInitImage?: string;
  /**
  * Kafka clusters for mirroring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#clusters DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#clusters}
  */
  readonly clusters?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClusters[] | cdktf.IResolvable;
  /**
  * The cluster alias used for Kafka Connect. The value must match the alias of the *target* Kafka cluster as specified in the 'spec.clusters' configuration. The target Kafka cluster is used by the underlying Kafka Connect framework for its internal topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#connect_cluster DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#connect_cluster}
  */
  readonly connectCluster: string;
  /**
  * Pass data from Secrets or ConfigMaps to the Kafka Connect pods and use them to configure connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#external_configuration DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#external_configuration}
  */
  readonly externalConfiguration?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfiguration;
  /**
  * The container image used for Kafka Connect pods. If no image name is explicitly specified, it is determined based on the 'spec.version' configuration. The image names are specifically mapped to corresponding versions in the Cluster Operator configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#image DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * JMX Options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#jmx_options DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#jmx_options}
  */
  readonly jmxOptions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptions;
  /**
  * JVM Options for pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#jvm_options DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#jvm_options}
  */
  readonly jvmOptions?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptions;
  /**
  * Pod liveness checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#liveness_probe DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbe;
  /**
  * Logging configuration for Kafka Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#logging DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#logging}
  */
  readonly logging?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLogging;
  /**
  * Metrics configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#metrics_config DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#metrics_config}
  */
  readonly metricsConfig?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfig;
  /**
  * Configuration of the MirrorMaker 2 connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#mirrors DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#mirrors}
  */
  readonly mirrors?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrors[] | cdktf.IResolvable;
  /**
  * Configuration of the node label which will be used as the 'client.rack' consumer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#rack DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#rack}
  */
  readonly rack?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRack;
  /**
  * Pod readiness checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#readiness_probe DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbe;
  /**
  * The number of pods in the Kafka Connect group. Defaults to '3'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#replicas DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * The maximum limits for CPU and memory resources and the requested initial resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#resources DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#resources}
  */
  readonly resources?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResources;
  /**
  * Template for Kafka Connect and Kafka MirrorMaker 2 resources. The template allows users to specify how the 'Pods', 'Service', and other services are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#template DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#template}
  */
  readonly template?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate;
  /**
  * The configuration of tracing in Kafka Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#tracing DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#tracing}
  */
  readonly tracing?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing;
  /**
  * The Kafka Connect version. Defaults to the latest version. Consult the user documentation to understand the process required to upgrade or downgrade the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker2_v1beta2_manifest#version DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_rack_init_image: cdktf.stringToTerraform(struct!.clientRackInitImage),
    clusters: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClustersToTerraform, false)(struct!.clusters),
    connect_cluster: cdktf.stringToTerraform(struct!.connectCluster),
    external_configuration: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfigurationToTerraform(struct!.externalConfiguration),
    image: cdktf.stringToTerraform(struct!.image),
    jmx_options: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptionsToTerraform(struct!.jmxOptions),
    jvm_options: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptionsToTerraform(struct!.jvmOptions),
    liveness_probe: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbeToTerraform(struct!.livenessProbe),
    logging: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLoggingToTerraform(struct!.logging),
    metrics_config: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfigToTerraform(struct!.metricsConfig),
    mirrors: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrorsToTerraform, false)(struct!.mirrors),
    rack: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRackToTerraform(struct!.rack),
    readiness_probe: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResourcesToTerraform(struct!.resources),
    template: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateToTerraform(struct!.template),
    tracing: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracingToTerraform(struct!.tracing),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_rack_init_image: {
      value: cdktf.stringToHclTerraform(struct!.clientRackInitImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClustersList",
    },
    connect_cluster: {
      value: cdktf.stringToHclTerraform(struct!.connectCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_configuration: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfigurationToHclTerraform(struct!.externalConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfiguration",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jmx_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptionsToHclTerraform(struct!.jmxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptions",
    },
    jvm_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptionsToHclTerraform(struct!.jvmOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptions",
    },
    liveness_probe: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbe",
    },
    logging: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLogging",
    },
    metrics_config: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfigToHclTerraform(struct!.metricsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfig",
    },
    mirrors: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrorsToHclTerraform, false)(struct!.mirrors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrorsList",
    },
    rack: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRackToHclTerraform(struct!.rack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRack",
    },
    readiness_probe: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResources",
    },
    template: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate",
    },
    tracing: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRackInitImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRackInitImage = this._clientRackInitImage;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._connectCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectCluster = this._connectCluster;
    }
    if (this._externalConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConfiguration = this._externalConfiguration?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._jmxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxOptions = this._jmxOptions?.internalValue;
    }
    if (this._jvmOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._metricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsConfig = this._metricsConfig?.internalValue;
    }
    if (this._mirrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrors = this._mirrors?.internalValue;
    }
    if (this._rack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientRackInitImage = undefined;
      this._clusters.internalValue = undefined;
      this._connectCluster = undefined;
      this._externalConfiguration.internalValue = undefined;
      this._image = undefined;
      this._jmxOptions.internalValue = undefined;
      this._jvmOptions.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._metricsConfig.internalValue = undefined;
      this._mirrors.internalValue = undefined;
      this._rack.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._template.internalValue = undefined;
      this._tracing.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientRackInitImage = value.clientRackInitImage;
      this._clusters.internalValue = value.clusters;
      this._connectCluster = value.connectCluster;
      this._externalConfiguration.internalValue = value.externalConfiguration;
      this._image = value.image;
      this._jmxOptions.internalValue = value.jmxOptions;
      this._jvmOptions.internalValue = value.jvmOptions;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._logging.internalValue = value.logging;
      this._metricsConfig.internalValue = value.metricsConfig;
      this._mirrors.internalValue = value.mirrors;
      this._rack.internalValue = value.rack;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._template.internalValue = value.template;
      this._tracing.internalValue = value.tracing;
      this._version = value.version;
    }
  }

  // client_rack_init_image - computed: false, optional: true, required: false
  private _clientRackInitImage?: string; 
  public get clientRackInitImage() {
    return this.getStringAttribute('client_rack_init_image');
  }
  public set clientRackInitImage(value: string) {
    this._clientRackInitImage = value;
  }
  public resetClientRackInitImage() {
    this._clientRackInitImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRackInitImageInput() {
    return this._clientRackInitImage;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // connect_cluster - computed: false, optional: false, required: true
  private _connectCluster?: string; 
  public get connectCluster() {
    return this.getStringAttribute('connect_cluster');
  }
  public set connectCluster(value: string) {
    this._connectCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectClusterInput() {
    return this._connectCluster;
  }

  // external_configuration - computed: false, optional: true, required: false
  private _externalConfiguration = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfigurationOutputReference(this, "external_configuration");
  public get externalConfiguration() {
    return this._externalConfiguration;
  }
  public putExternalConfiguration(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecExternalConfiguration) {
    this._externalConfiguration.internalValue = value;
  }
  public resetExternalConfiguration() {
    this._externalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConfigurationInput() {
    return this._externalConfiguration.internalValue;
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

  // jmx_options - computed: false, optional: true, required: false
  private _jmxOptions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptionsOutputReference(this, "jmx_options");
  public get jmxOptions() {
    return this._jmxOptions;
  }
  public putJmxOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJmxOptions) {
    this._jmxOptions.internalValue = value;
  }
  public resetJmxOptions() {
    this._jmxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxOptionsInput() {
    return this._jmxOptions.internalValue;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptionsOutputReference(this, "jvm_options");
  public get jvmOptions() {
    return this._jvmOptions;
  }
  public putJvmOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecJvmOptions) {
    this._jvmOptions.internalValue = value;
  }
  public resetJvmOptions() {
    this._jvmOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrorsList(this, "mirrors", false);
  public get mirrors() {
    return this._mirrors;
  }
  public putMirrors(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecMirrors[] | cdktf.IResolvable) {
    this._mirrors.internalValue = value;
  }
  public resetMirrors() {
    this._mirrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors.internalValue;
  }

  // rack - computed: false, optional: true, required: false
  private _rack = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRackOutputReference(this, "rack");
  public get rack() {
    return this._rack;
  }
  public putRack(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecRack) {
    this._rack.internalValue = value;
  }
  public resetRack() {
    this._rack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SKafkaStrimziIoKafkaMirrorMaker2V1Beta2ManifestSpecTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
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
