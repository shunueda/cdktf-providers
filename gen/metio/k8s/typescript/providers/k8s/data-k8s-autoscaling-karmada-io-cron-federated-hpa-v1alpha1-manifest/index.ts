// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#metadata DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the CronFederatedHPA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#spec DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec;
}
export interface DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#annotations DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#labels DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#namespace DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules {
  /**
  * FailedHistoryLimit represents the count of failed execution items for each rule. The value must be a positive integer. It defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#failed_history_limit DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#failed_history_limit}
  */
  readonly failedHistoryLimit?: number;
  /**
  * Name of the rule. Each rule in a CronFederatedHPA must have a unique name. Note: the name will be used as an identifier to record its execution history. Changing the name will be considered as deleting the old rule and adding a new rule, that means the original execution history will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Schedule is the cron expression that represents a periodical time. The syntax follows https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#schedule-syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#schedule DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#schedule}
  */
  readonly schedule: string;
  /**
  * SuccessfulHistoryLimit represents the count of successful execution items for each rule. The value must be a positive integer. It defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#successful_history_limit DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#successful_history_limit}
  */
  readonly successfulHistoryLimit?: number;
  /**
  * Suspend tells the controller to suspend subsequent executions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#suspend DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * TargetMaxReplicas is the target MaxReplicas to be set for FederatedHPA. Only needed when referencing resource is FederatedHPA. TargetMinReplicas and TargetMaxReplicas can be specified together or either one can be specified alone. nil means the MaxReplicas(.spec.maxReplicas) of the referencing FederatedHPA will not be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#target_max_replicas DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#target_max_replicas}
  */
  readonly targetMaxReplicas?: number;
  /**
  * TargetMinReplicas is the target MinReplicas to be set for FederatedHPA. Only needed when referencing resource is FederatedHPA. TargetMinReplicas and TargetMaxReplicas can be specified together or either one can be specified alone. nil means the MinReplicas(.spec.minReplicas) of the referencing FederatedHPA will not be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#target_min_replicas DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#target_min_replicas}
  */
  readonly targetMinReplicas?: number;
  /**
  * TargetReplicas is the target replicas to be scaled for resources referencing by ScaleTargetRef of this CronFederatedHPA. Only needed when referencing resource is not FederatedHPA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#target_replicas DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#target_replicas}
  */
  readonly targetReplicas?: number;
  /**
  * TimeZone for the giving schedule. If not specified, this will default to the time zone of the karmada-controller-manager process. Invalid TimeZone will be rejected when applying by karmada-webhook. see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for the all timezones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#time_zone DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#time_zone}
  */
  readonly timeZone?: string;
}

export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesToTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_history_limit: cdktf.numberToTerraform(struct!.failedHistoryLimit),
    name: cdktf.stringToTerraform(struct!.name),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    successful_history_limit: cdktf.numberToTerraform(struct!.successfulHistoryLimit),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    target_max_replicas: cdktf.numberToTerraform(struct!.targetMaxReplicas),
    target_min_replicas: cdktf.numberToTerraform(struct!.targetMinReplicas),
    target_replicas: cdktf.numberToTerraform(struct!.targetReplicas),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.failedHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successful_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.successfulHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.targetMaxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.targetMinReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_replicas: {
      value: cdktf.numberToHclTerraform(struct!.targetReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedHistoryLimit = this._failedHistoryLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._successfulHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulHistoryLimit = this._successfulHistoryLimit;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._targetMaxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMaxReplicas = this._targetMaxReplicas;
    }
    if (this._targetMinReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMinReplicas = this._targetMinReplicas;
    }
    if (this._targetReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReplicas = this._targetReplicas;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failedHistoryLimit = undefined;
      this._name = undefined;
      this._schedule = undefined;
      this._successfulHistoryLimit = undefined;
      this._suspend = undefined;
      this._targetMaxReplicas = undefined;
      this._targetMinReplicas = undefined;
      this._targetReplicas = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failedHistoryLimit = value.failedHistoryLimit;
      this._name = value.name;
      this._schedule = value.schedule;
      this._successfulHistoryLimit = value.successfulHistoryLimit;
      this._suspend = value.suspend;
      this._targetMaxReplicas = value.targetMaxReplicas;
      this._targetMinReplicas = value.targetMinReplicas;
      this._targetReplicas = value.targetReplicas;
      this._timeZone = value.timeZone;
    }
  }

  // failed_history_limit - computed: false, optional: true, required: false
  private _failedHistoryLimit?: number; 
  public get failedHistoryLimit() {
    return this.getNumberAttribute('failed_history_limit');
  }
  public set failedHistoryLimit(value: number) {
    this._failedHistoryLimit = value;
  }
  public resetFailedHistoryLimit() {
    this._failedHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedHistoryLimitInput() {
    return this._failedHistoryLimit;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // successful_history_limit - computed: false, optional: true, required: false
  private _successfulHistoryLimit?: number; 
  public get successfulHistoryLimit() {
    return this.getNumberAttribute('successful_history_limit');
  }
  public set successfulHistoryLimit(value: number) {
    this._successfulHistoryLimit = value;
  }
  public resetSuccessfulHistoryLimit() {
    this._successfulHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulHistoryLimitInput() {
    return this._successfulHistoryLimit;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // target_max_replicas - computed: false, optional: true, required: false
  private _targetMaxReplicas?: number; 
  public get targetMaxReplicas() {
    return this.getNumberAttribute('target_max_replicas');
  }
  public set targetMaxReplicas(value: number) {
    this._targetMaxReplicas = value;
  }
  public resetTargetMaxReplicas() {
    this._targetMaxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMaxReplicasInput() {
    return this._targetMaxReplicas;
  }

  // target_min_replicas - computed: false, optional: true, required: false
  private _targetMinReplicas?: number; 
  public get targetMinReplicas() {
    return this.getNumberAttribute('target_min_replicas');
  }
  public set targetMinReplicas(value: number) {
    this._targetMinReplicas = value;
  }
  public resetTargetMinReplicas() {
    this._targetMinReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMinReplicasInput() {
    return this._targetMinReplicas;
  }

  // target_replicas - computed: false, optional: true, required: false
  private _targetReplicas?: number; 
  public get targetReplicas() {
    return this.getNumberAttribute('target_replicas');
  }
  public set targetReplicas(value: number) {
    this._targetReplicas = value;
  }
  public resetTargetReplicas() {
    this._targetReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReplicasInput() {
    return this._targetReplicas;
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

export class DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesOutputReference {
    return new DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef {
  /**
  * apiVersion is the API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#api_version DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#kind DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec {
  /**
  * Rules contains a collection of schedules that declares when and how the referencing target resource should be scaled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#rules DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#rules}
  */
  readonly rules: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules[] | cdktf.IResolvable;
  /**
  * ScaleTargetRef points to the target resource to scale. Target resource could be any resource that implementing the scale subresource like Deployment, or FederatedHPA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#scale_target_ref DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest#scale_target_ref}
  */
  readonly scaleTargetRef: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef;
}

export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesToTerraform, false)(struct!.rules),
    scale_target_ref: dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
  }
}


export function dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesList",
    },
    scale_target_ref: {
      value: dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct!.scaleTargetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._scaleTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetRef = this._scaleTargetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
      this._scaleTargetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
      this._scaleTargetRef.internalValue = value.scaleTargetRef;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // scale_target_ref - computed: false, optional: false, required: true
  private _scaleTargetRef = new DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRefOutputReference(this, "scale_target_ref");
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest k8s_autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest}
*/
export class DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest k8s_autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_autoscaling_karmada_io_cron_federated_hpa_v1alpha1_manifest',
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
  private _metadata = new DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingKarmadaIoCronFederatedHpaV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
