import * as cdktf from 'cdktf';
import { DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinity,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinityToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinityToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinityOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliases,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliasesToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliasesToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliasesList,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecrets,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecretsToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecretsToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecretsList,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadata,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadataToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadataToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadataOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContext,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContextToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContextToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContextOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientService,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientServiceToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientServiceToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientServiceOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecret,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecretToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecretToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecretOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesService,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesServiceToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesServiceToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesServiceOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaim,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaimToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaimToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaimOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptions,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptionsToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptionsToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptionsOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptions,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptionsToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptionsToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptionsOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbe,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbeToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbeToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbeOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLogging,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLoggingToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLoggingToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLoggingOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfig,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfigToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfigToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfigOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbe,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbeToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbeToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbeOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResources,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResourcesToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResourcesToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResourcesOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorage,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorageToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorageToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorageOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafka,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporter,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporterToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporterToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporterOutputReference } from './structs1200'
import { DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCa,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCaToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCaToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCaOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCa,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCaToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCaToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCaOutputReference,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControl,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControlToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControlToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControlOutputReference } from './structs0'
import { DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperator,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperatorToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperatorToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperatorOutputReference } from './structs400'
import { DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTrans,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTransToTerraform,
dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTransToHclTerraform,
DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTransOutputReference } from './structs800'
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#effect DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#toleration_seconds DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#max_skew DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#max_skew}
  */
  readonly maxSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#min_domains DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#node_affinity_policy DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#node_taints_policy DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#when_unsatisfiable DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector",
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsLabelSelector) {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#mode DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#path DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#default_mode DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#items DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#items}
  */
  readonly items?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsList",
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#amount DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#amount}
  */
  readonly amount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#format DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#format}
  */
  readonly format?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimitToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.stringToTerraform(struct!.amount),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimitToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#medium DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#medium}
  */
  readonly medium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#size_limit DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#size_limit}
  */
  readonly sizeLimit?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimitToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir | cdktf.IResolvable): any {
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
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimitToHclTerraform(struct!.sizeLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir | cdktf.IResolvable | undefined) {
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
  private _sizeLimit = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimitOutputReference(this, "size_limit");
  public get sizeLimit() {
    return this._sizeLimit;
  }
  public putSizeLimit(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirSizeLimit) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#claim_name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#claim_name}
  */
  readonly claimName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#read_only DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#mode DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#path DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#default_mode DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#items DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#items}
  */
  readonly items?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsList",
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes {
  /**
  * ConfigMap to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#config_map DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#config_map}
  */
  readonly configMap?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap;
  /**
  * EmptyDir to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#empty_dir DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir;
  /**
  * Name to use for the volume. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * PersistentVolumeClaim object to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#persistent_volume_claim DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim;
  /**
  * Secret to use populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#secret DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#secret}
  */
  readonly secret?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapToTerraform(struct!.configMap),
    empty_dir: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirToTerraform(struct!.emptyDir),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_claim: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    secret: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretToTerraform(struct!.secret),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap",
    },
    empty_dir: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim",
    },
    secret: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesConfigMap) {
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
  private _emptyDir = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesEmptyDir) {
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
  private _persistentVolumeClaim = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesPersistentVolumeClaim) {
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
  private _secret = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesSecret) {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod {
  /**
  * The pod's affinity rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#affinity DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#affinity}
  */
  readonly affinity?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinity;
  /**
  * Indicates whether information about services should be injected into Pod's environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#enable_service_links DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * The pod's HostAliases. HostAliases is an optional list of hosts and IPs that will be injected into the Pod's hosts file if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#host_aliases DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliases[] | cdktf.IResolvable;
  /**
  * List of references to secrets in the same namespace to use for pulling any of the images used by this Pod. When the 'STRIMZI_IMAGE_PULL_SECRETS' environment variable in Cluster Operator and the 'imagePullSecrets' option are specified, only the 'imagePullSecrets' variable is used and the 'STRIMZI_IMAGE_PULL_SECRETS' variable is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#image_pull_secrets DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadata;
  /**
  * The name of the priority class used to assign priority to the pods. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#priority_class_name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * The name of the scheduler used to dispatch this 'Pod'. If not specified, the default scheduler will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#scheduler_name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Configures pod-level security attributes and common container settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#security_context DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#security_context}
  */
  readonly securityContext?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContext;
  /**
  * The grace period is the duration in seconds after the processes running in the pod are sent a termination signal, and the time when the processes are forcibly halted with a kill signal. Set this value to longer than the expected cleanup time for your process. Value must be a non-negative integer. A zero value indicates delete immediately. You might need to increase the grace period for very large Kafka clusters, so that the Kafka brokers have enough time to transfer their work to another broker before they are terminated. Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#termination_grace_period_seconds DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Defines the total amount of pod memory allocated for the temporary 'EmptyDir' volume '/tmp'. Specify the allocation in memory units, for example, '100Mi' for 100 mebibytes. Default value is '5Mi'. The '/tmp' volume is backed by pod memory, not disk storage, so avoid setting a high value as it consumes pod memory resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#tmp_dir_size_limit DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#tmp_dir_size_limit}
  */
  readonly tmpDirSizeLimit?: string;
  /**
  * The pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#tolerations DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations[] | cdktf.IResolvable;
  /**
  * The pod's topology spread constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#topology_spread_constraints DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Additional volumes that can be mounted to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#volumes DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#volumes}
  */
  readonly volumes?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinityToTerraform(struct!.affinity),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    host_aliases: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliasesToTerraform, false)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    metadata: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadataToTerraform(struct!.metadata),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    security_context: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContextToTerraform(struct!.securityContext),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tmp_dir_size_limit: cdktf.stringToTerraform(struct!.tmpDirSizeLimit),
    tolerations: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volumes: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinity",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliasesList",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecretsList",
    },
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadata",
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
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContext",
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
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod | cdktf.IResolvable | undefined) {
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
  private _affinity = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodAffinity) {
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
  private _hostAliases = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodHostAliases[] | cdktf.IResolvable) {
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
  private _imagePullSecrets = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodImagePullSecrets[] | cdktf.IResolvable) {
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
  private _metadata = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodMetadata) {
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
  private _securityContext = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSecurityContext) {
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
  private _tolerations = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget {
  /**
  * Maximum number of unavailable pods to allow automatic Pod eviction. A Pod eviction is allowed when the 'maxUnavailable' number of pods or fewer are unavailable after the eviction. Setting this value to 0 prevents all voluntary evictions, so the pods must be evicted manually. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#max_unavailable DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Metadata to apply to the 'PodDisruptionBudgetTemplate' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    metadata: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget | cdktf.IResolvable): any {
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
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetMetadata) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet {
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetMetadata) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount {
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountMetadata) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset {
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata;
  /**
  * PodManagementPolicy which will be used for this StatefulSet. Valid values are 'Parallel' and 'OrderedReady'. Defaults to 'Parallel'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#pod_management_policy DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#pod_management_policy}
  */
  readonly podManagementPolicy?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadataToTerraform(struct!.metadata),
    pod_management_policy: cdktf.stringToTerraform(struct!.podManagementPolicy),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata",
    },
    pod_management_policy: {
      value: cdktf.stringToHclTerraform(struct!.podManagementPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._podManagementPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.podManagementPolicy = this._podManagementPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._podManagementPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._podManagementPolicy = value.podManagementPolicy;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // pod_management_policy - computed: false, optional: true, required: false
  private _podManagementPolicy?: string; 
  public get podManagementPolicy() {
    return this.getStringAttribute('pod_management_policy');
  }
  public set podManagementPolicy(value: string) {
    this._podManagementPolicy = value;
  }
  public resetPodManagementPolicy() {
    this._podManagementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podManagementPolicyInput() {
    return this._podManagementPolicy;
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv {
  /**
  * The environment variable key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * The environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#add DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#drop DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilitiesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#level DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#role DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#user DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#gmsa_credential_spec DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#gmsa_credential_spec_name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#host_process DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#run_as_user_name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#allow_privilege_escalation DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#app_armor_profile DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#capabilities DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#capabilities}
  */
  readonly capabilities?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#privileged DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#proc_mount DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#read_only_root_filesystem DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#run_as_group DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#run_as_non_root DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#run_as_user DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#se_linux_options DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#seccomp_profile DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#windows_options DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    app_armor_profile: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    capabilities: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_armor_profile: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile",
    },
    capabilities: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
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
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
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
  private _seLinuxOptions = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextWindowsOptions) {
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
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#mount_path DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#mount_propagation DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#read_only DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#recursive_read_only DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#sub_path DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#sub_path_expr DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer {
  /**
  * Environment variables which should be applied to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#env DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#env}
  */
  readonly env?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv[] | cdktf.IResolvable;
  /**
  * Security context for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#security_context DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#security_context}
  */
  readonly securityContext?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext;
  /**
  * Additional volume mounts which should be applied to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#volume_mounts DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvToTerraform, false)(struct!.env),
    security_context: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextToTerraform(struct!.securityContext),
    volume_mounts: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvList",
    },
    security_context: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._securityContext.internalValue = value.securityContext;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate {
  /**
  * Template for ZooKeeper client 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#client_service DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#client_service}
  */
  readonly clientService?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientService;
  /**
  * Template for Secret of the Zookeeper Cluster JMX authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#jmx_secret DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#jmx_secret}
  */
  readonly jmxSecret?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecret;
  /**
  * Template for ZooKeeper nodes 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#nodes_service DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#nodes_service}
  */
  readonly nodesService?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesService;
  /**
  * Template for all ZooKeeper 'PersistentVolumeClaims'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#persistent_volume_claim DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaim;
  /**
  * Template for ZooKeeper 'Pods'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#pod DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#pod}
  */
  readonly pod?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod;
  /**
  * Template for ZooKeeper 'PodDisruptionBudget'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#pod_disruption_budget DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget;
  /**
  * Template for ZooKeeper 'StrimziPodSet' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#pod_set DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#pod_set}
  */
  readonly podSet?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet;
  /**
  * Template for the ZooKeeper service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#service_account DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount;
  /**
  * Template for ZooKeeper 'StatefulSet'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#statefulset DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#statefulset}
  */
  readonly statefulset?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset;
  /**
  * Template for the ZooKeeper container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#zookeeper_container DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#zookeeper_container}
  */
  readonly zookeeperContainer?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_service: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientServiceToTerraform(struct!.clientService),
    jmx_secret: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecretToTerraform(struct!.jmxSecret),
    nodes_service: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesServiceToTerraform(struct!.nodesService),
    persistent_volume_claim: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    pod: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodToTerraform(struct!.pod),
    pod_disruption_budget: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    pod_set: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetToTerraform(struct!.podSet),
    service_account: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountToTerraform(struct!.serviceAccount),
    statefulset: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetToTerraform(struct!.statefulset),
    zookeeper_container: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerToTerraform(struct!.zookeeperContainer),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_service: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientServiceToHclTerraform(struct!.clientService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientService",
    },
    jmx_secret: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecretToHclTerraform(struct!.jmxSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecret",
    },
    nodes_service: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesServiceToHclTerraform(struct!.nodesService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesService",
    },
    persistent_volume_claim: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaim",
    },
    pod: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod",
    },
    pod_disruption_budget: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget",
    },
    pod_set: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetToHclTerraform(struct!.podSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet",
    },
    service_account: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount",
    },
    statefulset: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetToHclTerraform(struct!.statefulset),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset",
    },
    zookeeper_container: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerToHclTerraform(struct!.zookeeperContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientService = this._clientService?.internalValue;
    }
    if (this._jmxSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxSecret = this._jmxSecret?.internalValue;
    }
    if (this._nodesService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesService = this._nodesService?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
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
    if (this._statefulset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulset = this._statefulset?.internalValue;
    }
    if (this._zookeeperContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperContainer = this._zookeeperContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientService.internalValue = undefined;
      this._jmxSecret.internalValue = undefined;
      this._nodesService.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._pod.internalValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._podSet.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._statefulset.internalValue = undefined;
      this._zookeeperContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientService.internalValue = value.clientService;
      this._jmxSecret.internalValue = value.jmxSecret;
      this._nodesService.internalValue = value.nodesService;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._pod.internalValue = value.pod;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._podSet.internalValue = value.podSet;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._statefulset.internalValue = value.statefulset;
      this._zookeeperContainer.internalValue = value.zookeeperContainer;
    }
  }

  // client_service - computed: false, optional: true, required: false
  private _clientService = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientServiceOutputReference(this, "client_service");
  public get clientService() {
    return this._clientService;
  }
  public putClientService(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateClientService) {
    this._clientService.internalValue = value;
  }
  public resetClientService() {
    this._clientService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientServiceInput() {
    return this._clientService.internalValue;
  }

  // jmx_secret - computed: false, optional: true, required: false
  private _jmxSecret = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecretOutputReference(this, "jmx_secret");
  public get jmxSecret() {
    return this._jmxSecret;
  }
  public putJmxSecret(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateJmxSecret) {
    this._jmxSecret.internalValue = value;
  }
  public resetJmxSecret() {
    this._jmxSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxSecretInput() {
    return this._jmxSecret.internalValue;
  }

  // nodes_service - computed: false, optional: true, required: false
  private _nodesService = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesServiceOutputReference(this, "nodes_service");
  public get nodesService() {
    return this._nodesService;
  }
  public putNodesService(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateNodesService) {
    this._nodesService.internalValue = value;
  }
  public resetNodesService() {
    this._nodesService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesServiceInput() {
    return this._nodesService.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePod) {
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
  private _podDisruptionBudget = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodDisruptionBudget) {
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
  private _podSet = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSetOutputReference(this, "pod_set");
  public get podSet() {
    return this._podSet;
  }
  public putPodSet(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplatePodSet) {
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
  private _serviceAccount = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // statefulset - computed: false, optional: true, required: false
  private _statefulset = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulsetOutputReference(this, "statefulset");
  public get statefulset() {
    return this._statefulset;
  }
  public putStatefulset(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateStatefulset) {
    this._statefulset.internalValue = value;
  }
  public resetStatefulset() {
    this._statefulset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulsetInput() {
    return this._statefulset.internalValue;
  }

  // zookeeper_container - computed: false, optional: true, required: false
  private _zookeeperContainer = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainerOutputReference(this, "zookeeper_container");
  public get zookeeperContainer() {
    return this._zookeeperContainer;
  }
  public putZookeeperContainer(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateZookeeperContainer) {
    this._zookeeperContainer.internalValue = value;
  }
  public resetZookeeperContainer() {
    this._zookeeperContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperContainerInput() {
    return this._zookeeperContainer.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper {
  /**
  * The ZooKeeper broker config. Properties with the following prefixes cannot be set: server., dataDir, dataLogDir, clientPort, authProvider, quorum.auth, requireClientAuthScheme, snapshot.trust.empty, standaloneEnabled, reconfigEnabled, 4lw.commands.whitelist, secureClientPort, ssl., serverCnxnFactory, sslQuorum (with the exception of: ssl.protocol, ssl.quorum.protocol, ssl.enabledProtocols, ssl.quorum.enabledProtocols, ssl.ciphersuites, ssl.quorum.ciphersuites, ssl.hostnameVerification, ssl.quorum.hostnameVerification).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#config DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The container image used for ZooKeeper pods. If no image name is explicitly specified, it is determined based on the Kafka version set in 'spec.kafka.version'. The image names are specifically mapped to corresponding versions in the Cluster Operator configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#image DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * JMX Options for Zookeeper nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#jmx_options DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#jmx_options}
  */
  readonly jmxOptions?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptions;
  /**
  * JVM Options for pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#jvm_options DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#jvm_options}
  */
  readonly jvmOptions?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptions;
  /**
  * Pod liveness checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#liveness_probe DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbe;
  /**
  * Logging configuration for ZooKeeper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#logging DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#logging}
  */
  readonly logging?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLogging;
  /**
  * Metrics configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#metrics_config DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#metrics_config}
  */
  readonly metricsConfig?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfig;
  /**
  * Pod readiness checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#readiness_probe DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbe;
  /**
  * The number of pods in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#replicas DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * CPU and memory resources to reserve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#resources DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#resources}
  */
  readonly resources?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResources;
  /**
  * Storage configuration (disk). Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#storage DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#storage}
  */
  readonly storage: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorage;
  /**
  * Template for ZooKeeper cluster resources. The template allows users to specify how the Kubernetes resources are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#template DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#template}
  */
  readonly template?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    image: cdktf.stringToTerraform(struct!.image),
    jmx_options: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptionsToTerraform(struct!.jmxOptions),
    jvm_options: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptionsToTerraform(struct!.jvmOptions),
    liveness_probe: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbeToTerraform(struct!.livenessProbe),
    logging: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLoggingToTerraform(struct!.logging),
    metrics_config: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfigToTerraform(struct!.metricsConfig),
    readiness_probe: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResourcesToTerraform(struct!.resources),
    storage: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorageToTerraform(struct!.storage),
    template: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateToTerraform(struct!.template),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jmx_options: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptionsToHclTerraform(struct!.jmxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptions",
    },
    jvm_options: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptionsToHclTerraform(struct!.jvmOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptions",
    },
    liveness_probe: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbe",
    },
    logging: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLogging",
    },
    metrics_config: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfigToHclTerraform(struct!.metricsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfig",
    },
    readiness_probe: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResources",
    },
    storage: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorage",
    },
    template: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
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
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._image = undefined;
      this._jmxOptions.internalValue = undefined;
      this._jvmOptions.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._metricsConfig.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._image = value.image;
      this._jmxOptions.internalValue = value.jmxOptions;
      this._jvmOptions.internalValue = value.jvmOptions;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._logging.internalValue = value.logging;
      this._metricsConfig.internalValue = value.metricsConfig;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._storage.internalValue = value.storage;
      this._template.internalValue = value.template;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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
  private _jmxOptions = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptionsOutputReference(this, "jmx_options");
  public get jmxOptions() {
    return this._jmxOptions;
  }
  public putJmxOptions(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJmxOptions) {
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
  private _jvmOptions = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptionsOutputReference(this, "jvm_options");
  public get jvmOptions() {
    return this._jvmOptions;
  }
  public putJvmOptions(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperJvmOptions) {
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
  private _livenessProbe = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLivenessProbe) {
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
  private _logging = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperLogging) {
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
  private _metricsConfig = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpec {
  /**
  * Configuration of the clients certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#clients_ca DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#clients_ca}
  */
  readonly clientsCa?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCa;
  /**
  * Configuration of the cluster certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#cluster_ca DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#cluster_ca}
  */
  readonly clusterCa?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCa;
  /**
  * Configuration for Cruise Control deployment. Deploys a Cruise Control instance when specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#cruise_control DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#cruise_control}
  */
  readonly cruiseControl?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControl;
  /**
  * Configuration of the Entity Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#entity_operator DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#entity_operator}
  */
  readonly entityOperator?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperator;
  /**
  * As of Strimzi 0.35.0, JMXTrans is not supported anymore and this option is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#jmx_trans DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#jmx_trans}
  */
  readonly jmxTrans?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTrans;
  /**
  * Configuration of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#kafka DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#kafka}
  */
  readonly kafka: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafka;
  /**
  * Configuration of the Kafka Exporter. Kafka Exporter can provide additional metrics, for example lag of consumer group at topic/partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#kafka_exporter DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#kafka_exporter}
  */
  readonly kafkaExporter?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporter;
  /**
  * A list of time windows for maintenance tasks (that is, certificates renewal). Each time window is defined by a cron expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#maintenance_time_windows DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#maintenance_time_windows}
  */
  readonly maintenanceTimeWindows?: string[];
  /**
  * Configuration of the ZooKeeper cluster. This section is required when running a ZooKeeper-based Apache Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_strimzi_io_kafka_v1beta2_manifest#zookeeper DataK8SKafkaStrimziIoKafkaV1Beta2Manifest#zookeeper}
  */
  readonly zookeeper?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper;
}

export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecToTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients_ca: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCaToTerraform(struct!.clientsCa),
    cluster_ca: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCaToTerraform(struct!.clusterCa),
    cruise_control: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControlToTerraform(struct!.cruiseControl),
    entity_operator: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperatorToTerraform(struct!.entityOperator),
    jmx_trans: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTransToTerraform(struct!.jmxTrans),
    kafka: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaToTerraform(struct!.kafka),
    kafka_exporter: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporterToTerraform(struct!.kafkaExporter),
    maintenance_time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maintenanceTimeWindows),
    zookeeper: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperToTerraform(struct!.zookeeper),
  }
}


export function dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients_ca: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCaToHclTerraform(struct!.clientsCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCa",
    },
    cluster_ca: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCaToHclTerraform(struct!.clusterCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCa",
    },
    cruise_control: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControlToHclTerraform(struct!.cruiseControl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControl",
    },
    entity_operator: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperatorToHclTerraform(struct!.entityOperator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperator",
    },
    jmx_trans: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTransToHclTerraform(struct!.jmxTrans),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTrans",
    },
    kafka: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafka",
    },
    kafka_exporter: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporterToHclTerraform(struct!.kafkaExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporter",
    },
    maintenance_time_windows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maintenanceTimeWindows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zookeeper: {
      value: dataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperToHclTerraform(struct!.zookeeper),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientsCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientsCa = this._clientsCa?.internalValue;
    }
    if (this._clusterCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCa = this._clusterCa?.internalValue;
    }
    if (this._cruiseControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cruiseControl = this._cruiseControl?.internalValue;
    }
    if (this._entityOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityOperator = this._entityOperator?.internalValue;
    }
    if (this._jmxTrans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxTrans = this._jmxTrans?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kafkaExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaExporter = this._kafkaExporter?.internalValue;
    }
    if (this._maintenanceTimeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceTimeWindows = this._maintenanceTimeWindows;
    }
    if (this._zookeeper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeper = this._zookeeper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientsCa.internalValue = undefined;
      this._clusterCa.internalValue = undefined;
      this._cruiseControl.internalValue = undefined;
      this._entityOperator.internalValue = undefined;
      this._jmxTrans.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kafkaExporter.internalValue = undefined;
      this._maintenanceTimeWindows = undefined;
      this._zookeeper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientsCa.internalValue = value.clientsCa;
      this._clusterCa.internalValue = value.clusterCa;
      this._cruiseControl.internalValue = value.cruiseControl;
      this._entityOperator.internalValue = value.entityOperator;
      this._jmxTrans.internalValue = value.jmxTrans;
      this._kafka.internalValue = value.kafka;
      this._kafkaExporter.internalValue = value.kafkaExporter;
      this._maintenanceTimeWindows = value.maintenanceTimeWindows;
      this._zookeeper.internalValue = value.zookeeper;
    }
  }

  // clients_ca - computed: false, optional: true, required: false
  private _clientsCa = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCaOutputReference(this, "clients_ca");
  public get clientsCa() {
    return this._clientsCa;
  }
  public putClientsCa(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClientsCa) {
    this._clientsCa.internalValue = value;
  }
  public resetClientsCa() {
    this._clientsCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsCaInput() {
    return this._clientsCa.internalValue;
  }

  // cluster_ca - computed: false, optional: true, required: false
  private _clusterCa = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCaOutputReference(this, "cluster_ca");
  public get clusterCa() {
    return this._clusterCa;
  }
  public putClusterCa(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecClusterCa) {
    this._clusterCa.internalValue = value;
  }
  public resetClusterCa() {
    this._clusterCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaInput() {
    return this._clusterCa.internalValue;
  }

  // cruise_control - computed: false, optional: true, required: false
  private _cruiseControl = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControlOutputReference(this, "cruise_control");
  public get cruiseControl() {
    return this._cruiseControl;
  }
  public putCruiseControl(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecCruiseControl) {
    this._cruiseControl.internalValue = value;
  }
  public resetCruiseControl() {
    this._cruiseControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cruiseControlInput() {
    return this._cruiseControl.internalValue;
  }

  // entity_operator - computed: false, optional: true, required: false
  private _entityOperator = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperatorOutputReference(this, "entity_operator");
  public get entityOperator() {
    return this._entityOperator;
  }
  public putEntityOperator(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecEntityOperator) {
    this._entityOperator.internalValue = value;
  }
  public resetEntityOperator() {
    this._entityOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityOperatorInput() {
    return this._entityOperator.internalValue;
  }

  // jmx_trans - computed: false, optional: true, required: false
  private _jmxTrans = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTransOutputReference(this, "jmx_trans");
  public get jmxTrans() {
    return this._jmxTrans;
  }
  public putJmxTrans(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecJmxTrans) {
    this._jmxTrans.internalValue = value;
  }
  public resetJmxTrans() {
    this._jmxTrans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxTransInput() {
    return this._jmxTrans.internalValue;
  }

  // kafka - computed: false, optional: false, required: true
  private _kafka = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafka) {
    this._kafka.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kafka_exporter - computed: false, optional: true, required: false
  private _kafkaExporter = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporterOutputReference(this, "kafka_exporter");
  public get kafkaExporter() {
    return this._kafkaExporter;
  }
  public putKafkaExporter(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecKafkaExporter) {
    this._kafkaExporter.internalValue = value;
  }
  public resetKafkaExporter() {
    this._kafkaExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaExporterInput() {
    return this._kafkaExporter.internalValue;
  }

  // maintenance_time_windows - computed: false, optional: true, required: false
  private _maintenanceTimeWindows?: string[]; 
  public get maintenanceTimeWindows() {
    return this.getListAttribute('maintenance_time_windows');
  }
  public set maintenanceTimeWindows(value: string[]) {
    this._maintenanceTimeWindows = value;
  }
  public resetMaintenanceTimeWindows() {
    this._maintenanceTimeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeWindowsInput() {
    return this._maintenanceTimeWindows;
  }

  // zookeeper - computed: false, optional: true, required: false
  private _zookeeper = new DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeperOutputReference(this, "zookeeper");
  public get zookeeper() {
    return this._zookeeper;
  }
  public putZookeeper(value: DataK8SKafkaStrimziIoKafkaV1Beta2ManifestSpecZookeeper) {
    this._zookeeper.internalValue = value;
  }
  public resetZookeeper() {
    this._zookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperInput() {
    return this._zookeeper.internalValue;
  }
}
