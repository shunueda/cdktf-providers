// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#metadata DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata;
  /**
  * Spec represents the desired behavior of ClusterPropagationPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#spec DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#annotations DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#labels DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#name DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions {
  /**
  * TolerationSeconds represents the period of time Karmada should wait after reaching the desired state before performing failover process. If not specified, Karmada will immediately perform failover process. Defaults to 300s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#toleration_seconds DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tolerationSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tolerationSeconds = value.tolerationSeconds;
    }
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
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication {
  /**
  * DecisionConditions indicates the decision conditions of performing the failover process. Only when all conditions are met can the failover process be performed. Currently, DecisionConditions includes several conditions: - TolerationSeconds (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#decision_conditions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#decision_conditions}
  */
  readonly decisionConditions: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions;
  /**
  * GracePeriodSeconds is the maximum waiting duration in seconds before application on the migrated cluster should be deleted. Required only when PurgeMode is 'Graciously' and defaults to 600s. If the application on the new cluster cannot reach a Healthy state, Karmada will delete the application after GracePeriodSeconds is reached. Value must be positive integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#grace_period_seconds DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#grace_period_seconds}
  */
  readonly gracePeriodSeconds?: number;
  /**
  * PurgeMode represents how to deal with the legacy applications on the cluster from which the application is migrated. Valid options are 'Immediately', 'Graciously' and 'Never'. Defaults to 'Graciously'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#purge_mode DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#purge_mode}
  */
  readonly purgeMode?: string;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_conditions: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditionsToTerraform(struct!.decisionConditions),
    grace_period_seconds: cdktf.numberToTerraform(struct!.gracePeriodSeconds),
    purge_mode: cdktf.stringToTerraform(struct!.purgeMode),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_conditions: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditionsToHclTerraform(struct!.decisionConditions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions",
    },
    grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    purge_mode: {
      value: cdktf.stringToHclTerraform(struct!.purgeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decisionConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionConditions = this._decisionConditions?.internalValue;
    }
    if (this._gracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodSeconds = this._gracePeriodSeconds;
    }
    if (this._purgeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeMode = this._purgeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decisionConditions.internalValue = undefined;
      this._gracePeriodSeconds = undefined;
      this._purgeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decisionConditions.internalValue = value.decisionConditions;
      this._gracePeriodSeconds = value.gracePeriodSeconds;
      this._purgeMode = value.purgeMode;
    }
  }

  // decision_conditions - computed: false, optional: false, required: true
  private _decisionConditions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditionsOutputReference(this, "decision_conditions");
  public get decisionConditions() {
    return this._decisionConditions;
  }
  public putDecisionConditions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationDecisionConditions) {
    this._decisionConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionConditionsInput() {
    return this._decisionConditions.internalValue;
  }

  // grace_period_seconds - computed: false, optional: true, required: false
  private _gracePeriodSeconds?: number; 
  public get gracePeriodSeconds() {
    return this.getNumberAttribute('grace_period_seconds');
  }
  public set gracePeriodSeconds(value: number) {
    this._gracePeriodSeconds = value;
  }
  public resetGracePeriodSeconds() {
    this._gracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodSecondsInput() {
    return this._gracePeriodSeconds;
  }

  // purge_mode - computed: false, optional: true, required: false
  private _purgeMode?: string; 
  public get purgeMode() {
    return this.getStringAttribute('purge_mode');
  }
  public set purgeMode(value: string) {
    this._purgeMode = value;
  }
  public resetPurgeMode() {
    this._purgeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeModeInput() {
    return this._purgeMode;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover {
  /**
  * Application indicates failover behaviors in case of application failure. If this value is nil, failover is disabled. If set, the PropagateDeps should be true so that the dependencies could be migrated along with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#application DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#application}
  */
  readonly application?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationToTerraform(struct!.application),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationToHclTerraform(struct!.application),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application.internalValue = value.application;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplicationOutputReference(this, "application");
  public get application() {
    return this._application;
  }
  public putApplication(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverApplication) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_labels DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsList",
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities {
  /**
  * AffinityName is the name of the cluster group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#affinity_name DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#affinity_name}
  */
  readonly affinityName: string;
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#cluster_names DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#exclude DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#field_selector DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#label_selector DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity_name: cdktf.stringToTerraform(struct!.affinityName),
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity_name: {
      value: cdktf.stringToHclTerraform(struct!.affinityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_selector: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector",
    },
    label_selector: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinityName = this._affinityName;
    }
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._fieldSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinityName = undefined;
      this._clusterNames = undefined;
      this._exclude = undefined;
      this._fieldSelector.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinityName = value.affinityName;
      this._clusterNames = value.clusterNames;
      this._exclude = value.exclude;
      this._fieldSelector.internalValue = value.fieldSelector;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // affinity_name - computed: false, optional: false, required: true
  private _affinityName?: string; 
  public get affinityName() {
    return this.getStringAttribute('affinity_name');
  }
  public set affinityName(value: string) {
    this._affinityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityNameInput() {
    return this._affinityName;
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return this.getListAttribute('cluster_names');
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesFieldSelector) {
    this._fieldSelector.internalValue = value;
  }
  public resetFieldSelector() {
    this._fieldSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_labels DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsList",
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#cluster_names DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#exclude DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#field_selector DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#label_selector DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_selector: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector",
    },
    label_selector: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._fieldSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNames = undefined;
      this._exclude = undefined;
      this._fieldSelector.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNames = value.clusterNames;
      this._exclude = value.exclude;
      this._fieldSelector.internalValue = value.fieldSelector;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return this.getListAttribute('cluster_names');
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityFieldSelector) {
    this._fieldSelector.internalValue = value;
  }
  public resetFieldSelector() {
    this._fieldSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#effect DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#toleration_seconds DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_labels DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsList",
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#cluster_names DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#exclude DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#field_selector DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#label_selector DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_selector: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector",
    },
    label_selector: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._fieldSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNames = undefined;
      this._exclude = undefined;
      this._fieldSelector.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNames = value.clusterNames;
      this._exclude = value.exclude;
      this._fieldSelector.internalValue = value.fieldSelector;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return this.getListAttribute('cluster_names');
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector) {
    this._fieldSelector.internalValue = value;
  }
  public resetFieldSelector() {
    this._fieldSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct {
  /**
  * TargetCluster describes the filter to select clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#target_cluster DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#target_cluster}
  */
  readonly targetCluster: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster;
  /**
  * Weight expressing the preference to the cluster(s) specified by 'TargetCluster'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#weight DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_cluster: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToTerraform(struct!.targetCluster),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_cluster: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToHclTerraform(struct!.targetCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster",
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCluster = this._targetCluster?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetCluster.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetCluster.internalValue = value.targetCluster;
      this._weight = value.weight;
    }
  }

  // target_cluster - computed: false, optional: false, required: true
  private _targetCluster = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterOutputReference(this, "target_cluster");
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster) {
    this._targetCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference {
  /**
  * DynamicWeight specifies the factor to generates dynamic weight list. If specified, StaticWeightList will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#dynamic_weight DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#dynamic_weight}
  */
  readonly dynamicWeight?: string;
  /**
  * StaticWeightList defines the static cluster weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#static_weight_list DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#static_weight_list}
  */
  readonly staticWeightList?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_weight: cdktf.stringToTerraform(struct!.dynamicWeight),
    static_weight_list: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToTerraform, false)(struct!.staticWeightList),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_weight: {
      value: cdktf.stringToHclTerraform(struct!.dynamicWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_weight_list: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToHclTerraform, false)(struct!.staticWeightList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicWeight = this._dynamicWeight;
    }
    if (this._staticWeightList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticWeightList = this._staticWeightList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicWeight = undefined;
      this._staticWeightList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicWeight = value.dynamicWeight;
      this._staticWeightList.internalValue = value.staticWeightList;
    }
  }

  // dynamic_weight - computed: false, optional: true, required: false
  private _dynamicWeight?: string; 
  public get dynamicWeight() {
    return this.getStringAttribute('dynamic_weight');
  }
  public set dynamicWeight(value: string) {
    this._dynamicWeight = value;
  }
  public resetDynamicWeight() {
    this._dynamicWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicWeightInput() {
    return this._dynamicWeight;
  }

  // static_weight_list - computed: false, optional: true, required: false
  private _staticWeightList = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructList(this, "static_weight_list", false);
  public get staticWeightList() {
    return this._staticWeightList;
  }
  public putStaticWeightList(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct[] | cdktf.IResolvable) {
    this._staticWeightList.internalValue = value;
  }
  public resetStaticWeightList() {
    this._staticWeightList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticWeightListInput() {
    return this._staticWeightList.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling {
  /**
  * ReplicaDivisionPreference determines how the replicas is divided when ReplicaSchedulingType is 'Divided'. Valid options are Aggregated and Weighted. 'Aggregated' divides replicas into clusters as few as possible, while respecting clusters' resource availabilities during the division. 'Weighted' divides replicas by weight according to WeightPreference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#replica_division_preference DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#replica_division_preference}
  */
  readonly replicaDivisionPreference?: string;
  /**
  * ReplicaSchedulingType determines how the replicas is scheduled when karmada propagating a resource. Valid options are Duplicated and Divided. 'Duplicated' duplicates the same replicas to each candidate member cluster from resource. 'Divided' divides replicas into parts according to number of valid candidate member clusters, and exact replicas for each cluster are determined by ReplicaDivisionPreference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#replica_scheduling_type DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#replica_scheduling_type}
  */
  readonly replicaSchedulingType?: string;
  /**
  * WeightPreference describes weight for each cluster or for each group of cluster If ReplicaDivisionPreference is set to 'Weighted', and WeightPreference is not set, scheduler will weight all clusters the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#weight_preference DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#weight_preference}
  */
  readonly weightPreference?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_division_preference: cdktf.stringToTerraform(struct!.replicaDivisionPreference),
    replica_scheduling_type: cdktf.stringToTerraform(struct!.replicaSchedulingType),
    weight_preference: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceToTerraform(struct!.weightPreference),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replica_division_preference: {
      value: cdktf.stringToHclTerraform(struct!.replicaDivisionPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_scheduling_type: {
      value: cdktf.stringToHclTerraform(struct!.replicaSchedulingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight_preference: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceToHclTerraform(struct!.weightPreference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaDivisionPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaDivisionPreference = this._replicaDivisionPreference;
    }
    if (this._replicaSchedulingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSchedulingType = this._replicaSchedulingType;
    }
    if (this._weightPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightPreference = this._weightPreference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaDivisionPreference = undefined;
      this._replicaSchedulingType = undefined;
      this._weightPreference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaDivisionPreference = value.replicaDivisionPreference;
      this._replicaSchedulingType = value.replicaSchedulingType;
      this._weightPreference.internalValue = value.weightPreference;
    }
  }

  // replica_division_preference - computed: false, optional: true, required: false
  private _replicaDivisionPreference?: string; 
  public get replicaDivisionPreference() {
    return this.getStringAttribute('replica_division_preference');
  }
  public set replicaDivisionPreference(value: string) {
    this._replicaDivisionPreference = value;
  }
  public resetReplicaDivisionPreference() {
    this._replicaDivisionPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaDivisionPreferenceInput() {
    return this._replicaDivisionPreference;
  }

  // replica_scheduling_type - computed: false, optional: true, required: false
  private _replicaSchedulingType?: string; 
  public get replicaSchedulingType() {
    return this.getStringAttribute('replica_scheduling_type');
  }
  public set replicaSchedulingType(value: string) {
    this._replicaSchedulingType = value;
  }
  public resetReplicaSchedulingType() {
    this._replicaSchedulingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSchedulingTypeInput() {
    return this._replicaSchedulingType;
  }

  // weight_preference - computed: false, optional: true, required: false
  private _weightPreference = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreferenceOutputReference(this, "weight_preference");
  public get weightPreference() {
    return this._weightPreference;
  }
  public putWeightPreference(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingWeightPreference) {
    this._weightPreference.internalValue = value;
  }
  public resetWeightPreference() {
    this._weightPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightPreferenceInput() {
    return this._weightPreference.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints {
  /**
  * MaxGroups restricts the maximum number of cluster groups to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#max_groups DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#max_groups}
  */
  readonly maxGroups?: number;
  /**
  * MinGroups restricts the minimum number of cluster groups to be selected. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#min_groups DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#min_groups}
  */
  readonly minGroups?: number;
  /**
  * SpreadByField represents the fields on Karmada cluster API used for dynamically grouping member clusters into different groups. Resources will be spread among different cluster groups. Available fields for spreading are: cluster, region, zone, and provider. SpreadByField should not co-exist with SpreadByLabel. If both SpreadByField and SpreadByLabel are empty, SpreadByField will be set to 'cluster' by system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#spread_by_field DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#spread_by_field}
  */
  readonly spreadByField?: string;
  /**
  * SpreadByLabel represents the label key used for grouping member clusters into different groups. Resources will be spread among different cluster groups. SpreadByLabel should not co-exist with SpreadByField.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#spread_by_label DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#spread_by_label}
  */
  readonly spreadByLabel?: string;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_groups: cdktf.numberToTerraform(struct!.maxGroups),
    min_groups: cdktf.numberToTerraform(struct!.minGroups),
    spread_by_field: cdktf.stringToTerraform(struct!.spreadByField),
    spread_by_label: cdktf.stringToTerraform(struct!.spreadByLabel),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_groups: {
      value: cdktf.numberToHclTerraform(struct!.maxGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_groups: {
      value: cdktf.numberToHclTerraform(struct!.minGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spread_by_field: {
      value: cdktf.stringToHclTerraform(struct!.spreadByField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spread_by_label: {
      value: cdktf.stringToHclTerraform(struct!.spreadByLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGroups = this._maxGroups;
    }
    if (this._minGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.minGroups = this._minGroups;
    }
    if (this._spreadByField !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadByField = this._spreadByField;
    }
    if (this._spreadByLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadByLabel = this._spreadByLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxGroups = undefined;
      this._minGroups = undefined;
      this._spreadByField = undefined;
      this._spreadByLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxGroups = value.maxGroups;
      this._minGroups = value.minGroups;
      this._spreadByField = value.spreadByField;
      this._spreadByLabel = value.spreadByLabel;
    }
  }

  // max_groups - computed: false, optional: true, required: false
  private _maxGroups?: number; 
  public get maxGroups() {
    return this.getNumberAttribute('max_groups');
  }
  public set maxGroups(value: number) {
    this._maxGroups = value;
  }
  public resetMaxGroups() {
    this._maxGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupsInput() {
    return this._maxGroups;
  }

  // min_groups - computed: false, optional: true, required: false
  private _minGroups?: number; 
  public get minGroups() {
    return this.getNumberAttribute('min_groups');
  }
  public set minGroups(value: number) {
    this._minGroups = value;
  }
  public resetMinGroups() {
    this._minGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minGroupsInput() {
    return this._minGroups;
  }

  // spread_by_field - computed: false, optional: true, required: false
  private _spreadByField?: string; 
  public get spreadByField() {
    return this.getStringAttribute('spread_by_field');
  }
  public set spreadByField(value: string) {
    this._spreadByField = value;
  }
  public resetSpreadByField() {
    this._spreadByField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadByFieldInput() {
    return this._spreadByField;
  }

  // spread_by_label - computed: false, optional: true, required: false
  private _spreadByLabel?: string; 
  public get spreadByLabel() {
    return this.getStringAttribute('spread_by_label');
  }
  public set spreadByLabel(value: string) {
    this._spreadByLabel = value;
  }
  public resetSpreadByLabel() {
    this._spreadByLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadByLabelInput() {
    return this._spreadByLabel;
  }
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement {
  /**
  * ClusterAffinities represents scheduling restrictions to multiple cluster groups that indicated by ClusterAffinityTerm. The scheduler will evaluate these groups one by one in the order they appear in the spec, the group that does not satisfy scheduling restrictions will be ignored which means all clusters in this group will not be selected unless it also belongs to the next group(a cluster could belong to multiple groups). If none of the groups satisfy the scheduling restrictions, then scheduling fails, which means no cluster will be selected. Note: 1. ClusterAffinities can not co-exist with ClusterAffinity. 2. If both ClusterAffinity and ClusterAffinities are not set, any cluster can be scheduling candidates. Potential use case 1: The private clusters in the local data center could be the main group, and the managed clusters provided by cluster providers could be the secondary group. So that the Karmada scheduler would prefer to schedule workloads to the main group and the second group will only be considered in case of the main group does not satisfy restrictions(like, lack of resources). Potential use case 2: For the disaster recovery scenario, the clusters could be organized to primary and backup groups, the workloads would be scheduled to primary clusters firstly, and when primary cluster fails(like data center power off), Karmada scheduler could migrate workloads to the backup clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#cluster_affinities DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#cluster_affinities}
  */
  readonly clusterAffinities?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities[] | cdktf.IResolvable;
  /**
  * ClusterAffinity represents scheduling restrictions to a certain set of clusters. Note: 1. ClusterAffinity can not co-exist with ClusterAffinities. 2. If both ClusterAffinity and ClusterAffinities are not set, any cluster can be scheduling candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#cluster_affinity DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#cluster_affinity}
  */
  readonly clusterAffinity?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity;
  /**
  * ClusterTolerations represents the tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#cluster_tolerations DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#cluster_tolerations}
  */
  readonly clusterTolerations?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations[] | cdktf.IResolvable;
  /**
  * ReplicaScheduling represents the scheduling policy on dealing with the number of replicas when propagating resources that have replicas in spec (e.g. deployments, statefulsets) to member clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#replica_scheduling DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#replica_scheduling}
  */
  readonly replicaScheduling?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling;
  /**
  * SpreadConstraints represents a list of the scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#spread_constraints DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#spread_constraints}
  */
  readonly spreadConstraints?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_affinities: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesToTerraform, false)(struct!.clusterAffinities),
    cluster_affinity: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityToTerraform(struct!.clusterAffinity),
    cluster_tolerations: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsToTerraform, false)(struct!.clusterTolerations),
    replica_scheduling: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingToTerraform(struct!.replicaScheduling),
    spread_constraints: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsToTerraform, false)(struct!.spreadConstraints),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_affinities: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesToHclTerraform, false)(struct!.clusterAffinities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesList",
    },
    cluster_affinity: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityToHclTerraform(struct!.clusterAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity",
    },
    cluster_tolerations: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsToHclTerraform, false)(struct!.clusterTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsList",
    },
    replica_scheduling: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingToHclTerraform(struct!.replicaScheduling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling",
    },
    spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsToHclTerraform, false)(struct!.spreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterAffinities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAffinities = this._clusterAffinities?.internalValue;
    }
    if (this._clusterAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAffinity = this._clusterAffinity?.internalValue;
    }
    if (this._clusterTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTolerations = this._clusterTolerations?.internalValue;
    }
    if (this._replicaScheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaScheduling = this._replicaScheduling?.internalValue;
    }
    if (this._spreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadConstraints = this._spreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterAffinities.internalValue = undefined;
      this._clusterAffinity.internalValue = undefined;
      this._clusterTolerations.internalValue = undefined;
      this._replicaScheduling.internalValue = undefined;
      this._spreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterAffinities.internalValue = value.clusterAffinities;
      this._clusterAffinity.internalValue = value.clusterAffinity;
      this._clusterTolerations.internalValue = value.clusterTolerations;
      this._replicaScheduling.internalValue = value.replicaScheduling;
      this._spreadConstraints.internalValue = value.spreadConstraints;
    }
  }

  // cluster_affinities - computed: false, optional: true, required: false
  private _clusterAffinities = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinitiesList(this, "cluster_affinities", false);
  public get clusterAffinities() {
    return this._clusterAffinities;
  }
  public putClusterAffinities(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinities[] | cdktf.IResolvable) {
    this._clusterAffinities.internalValue = value;
  }
  public resetClusterAffinities() {
    this._clusterAffinities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAffinitiesInput() {
    return this._clusterAffinities.internalValue;
  }

  // cluster_affinity - computed: false, optional: true, required: false
  private _clusterAffinity = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinityOutputReference(this, "cluster_affinity");
  public get clusterAffinity() {
    return this._clusterAffinity;
  }
  public putClusterAffinity(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterAffinity) {
    this._clusterAffinity.internalValue = value;
  }
  public resetClusterAffinity() {
    this._clusterAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAffinityInput() {
    return this._clusterAffinity.internalValue;
  }

  // cluster_tolerations - computed: false, optional: true, required: false
  private _clusterTolerations = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerationsList(this, "cluster_tolerations", false);
  public get clusterTolerations() {
    return this._clusterTolerations;
  }
  public putClusterTolerations(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementClusterTolerations[] | cdktf.IResolvable) {
    this._clusterTolerations.internalValue = value;
  }
  public resetClusterTolerations() {
    this._clusterTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTolerationsInput() {
    return this._clusterTolerations.internalValue;
  }

  // replica_scheduling - computed: false, optional: true, required: false
  private _replicaScheduling = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaSchedulingOutputReference(this, "replica_scheduling");
  public get replicaScheduling() {
    return this._replicaScheduling;
  }
  public putReplicaScheduling(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementReplicaScheduling) {
    this._replicaScheduling.internalValue = value;
  }
  public resetReplicaScheduling() {
    this._replicaScheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSchedulingInput() {
    return this._replicaScheduling.internalValue;
  }

  // spread_constraints - computed: false, optional: true, required: false
  private _spreadConstraints = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraintsList(this, "spread_constraints", false);
  public get spreadConstraints() {
    return this._spreadConstraints;
  }
  public putSpreadConstraints(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementSpreadConstraints[] | cdktf.IResolvable) {
    this._spreadConstraints.internalValue = value;
  }
  public resetSpreadConstraints() {
    this._spreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadConstraintsInput() {
    return this._spreadConstraints.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#match_labels DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsList",
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors {
  /**
  * APIVersion represents the API version of the target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#api_version DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind represents the Kind of the target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#kind DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * A label query over a set of resources. If name is not empty, labelSelector will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#label_selector DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector;
  /**
  * Name of the target resource. Default is empty, which means selecting all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#name DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the target resource. Default is empty, which means inherit from the parent object scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#namespace DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable): any {
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
    label_selector: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector",
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable | undefined {
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
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
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

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#cluster_names DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClustersToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClustersToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNames = value.clusterNames;
    }
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return this.getListAttribute('cluster_names');
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension {
  /**
  * Dispatching controls whether dispatching should be suspended. nil means not suspend, no default value, only accepts 'true'. Note: true means stop propagating to all clusters. Can not co-exist with DispatchingOnClusters which is used to suspend particular clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#dispatching DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#dispatching}
  */
  readonly dispatching?: boolean | cdktf.IResolvable;
  /**
  * DispatchingOnClusters declares a list of clusters to which the dispatching should be suspended. Note: Can not co-exist with Dispatching which is used to suspend all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#dispatching_on_clusters DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#dispatching_on_clusters}
  */
  readonly dispatchingOnClusters?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dispatching: cdktf.booleanToTerraform(struct!.dispatching),
    dispatching_on_clusters: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClustersToTerraform(struct!.dispatchingOnClusters),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dispatching: {
      value: cdktf.booleanToHclTerraform(struct!.dispatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dispatching_on_clusters: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClustersToHclTerraform(struct!.dispatchingOnClusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dispatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispatching = this._dispatching;
    }
    if (this._dispatchingOnClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispatchingOnClusters = this._dispatchingOnClusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dispatching = undefined;
      this._dispatchingOnClusters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dispatching = value.dispatching;
      this._dispatchingOnClusters.internalValue = value.dispatchingOnClusters;
    }
  }

  // dispatching - computed: false, optional: true, required: false
  private _dispatching?: boolean | cdktf.IResolvable; 
  public get dispatching() {
    return this.getBooleanAttribute('dispatching');
  }
  public set dispatching(value: boolean | cdktf.IResolvable) {
    this._dispatching = value;
  }
  public resetDispatching() {
    this._dispatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchingInput() {
    return this._dispatching;
  }

  // dispatching_on_clusters - computed: false, optional: true, required: false
  private _dispatchingOnClusters = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClustersOutputReference(this, "dispatching_on_clusters");
  public get dispatchingOnClusters() {
    return this._dispatchingOnClusters;
  }
  public putDispatchingOnClusters(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionDispatchingOnClusters) {
    this._dispatchingOnClusters.internalValue = value;
  }
  public resetDispatchingOnClusters() {
    this._dispatchingOnClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchingOnClustersInput() {
    return this._dispatchingOnClusters.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec {
  /**
  * ActivationPreference indicates how the referencing resource template will be propagated, in case of policy changes. If empty, the resource template will respond to policy changes immediately, in other words, any policy changes will drive the resource template to be propagated immediately as per the current propagation rules. If the value is 'Lazy' means the policy changes will not take effect for now but defer to the resource template changes, in other words, the resource template will not be propagated as per the current propagation rules until there is an update on it. This is an experimental feature that might help in a scenario where a policy manages huge amount of resource templates, changes to a policy typically affect numerous applications simultaneously. A minor misconfiguration could lead to widespread failures. With this feature, the change can be gradually rolled out through iterative modifications of resource templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#activation_preference DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#activation_preference}
  */
  readonly activationPreference?: string;
  /**
  * Association tells if relevant resources should be selected automatically. e.g. a ConfigMap referred by a Deployment. default false. Deprecated: in favor of PropagateDeps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#association DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#association}
  */
  readonly association?: boolean | cdktf.IResolvable;
  /**
  * ConflictResolution declares how potential conflict should be handled when a resource that is being propagated already exists in the target cluster. It defaults to 'Abort' which means stop propagating to avoid unexpected overwrites. The 'Overwrite' might be useful when migrating legacy cluster resources to Karmada, in which case conflict is predictable and can be instructed to Karmada take over the resource by overwriting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#conflict_resolution DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#conflict_resolution}
  */
  readonly conflictResolution?: string;
  /**
  * DependentOverrides represents the list of overrides(OverridePolicy) which must present before the current PropagationPolicy takes effect. It used to explicitly specify overrides which current PropagationPolicy rely on. A typical scenario is the users create OverridePolicy(ies) and resources at the same time, they want to ensure the new-created policies would be adopted. Note: For the overrides, OverridePolicy(ies) in current namespace and ClusterOverridePolicy(ies), which not present in this list will still be applied if they matches the resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#dependent_overrides DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#dependent_overrides}
  */
  readonly dependentOverrides?: string[];
  /**
  * Failover indicates how Karmada migrates applications in case of failures. If this value is nil, failover is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#failover DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#failover}
  */
  readonly failover?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover;
  /**
  * Placement represents the rule for select clusters to propagate resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#placement DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#placement}
  */
  readonly placement?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement;
  /**
  * Preemption declares the behaviors for preempting. Valid options are 'Always' and 'Never'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#preemption DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#preemption}
  */
  readonly preemption?: string;
  /**
  * PreserveResourcesOnDeletion controls whether resources should be preserved on the member clusters when the resource template is deleted. If set to true, resources will be preserved on the member clusters. Default is false, which means resources will be deleted along with the resource template. This setting is particularly useful during workload migration scenarios to ensure that rollback can occur quickly without affecting the workloads running on the member clusters. Additionally, this setting applies uniformly across all member clusters and will not selectively control preservation on only some clusters. Note: This setting does not apply to the deletion of the policy itself. When the policy is deleted, the resource templates and their corresponding propagated resources in member clusters will remain unchanged unless explicitly deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#preserve_resources_on_deletion DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#preserve_resources_on_deletion}
  */
  readonly preserveResourcesOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Priority indicates the importance of a policy(PropagationPolicy or ClusterPropagationPolicy). A policy will be applied for the matched resource templates if there is no other policies with higher priority at the point of the resource template be processed. Once a resource template has been claimed by a policy, by default it will not be preempted by following policies even with a higher priority. See Preemption for more details. In case of two policies have the same priority, the one with a more precise matching rules in ResourceSelectors wins: - matching by name(resourceSelector.name) has higher priority than by selector(resourceSelector.labelSelector) - matching by selector(resourceSelector.labelSelector) has higher priority than by APIVersion(resourceSelector.apiVersion) and Kind(resourceSelector.kind). If there is still no winner at this point, the one with the lower alphabetic order wins, e.g. policy 'bar' has higher priority than 'foo'. The higher the value, the higher the priority. Defaults to zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#priority DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * PropagateDeps tells if relevant resources should be propagated automatically. Take 'Deployment' which referencing 'ConfigMap' and 'Secret' as an example, when 'propagateDeps' is 'true', the referencing resources could be omitted(for saving config effort) from 'resourceSelectors' as they will be propagated along with the Deployment. In addition to the propagating process, the referencing resources will be migrated along with the Deployment in the fail-over scenario. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#propagate_deps DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#propagate_deps}
  */
  readonly propagateDeps?: boolean | cdktf.IResolvable;
  /**
  * ResourceSelectors used to select resources. Nil or empty selector is not allowed and doesn't mean match all kinds of resources for security concerns that sensitive resources(like Secret) might be accidentally propagated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#resource_selectors DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#resource_selectors}
  */
  readonly resourceSelectors: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors[] | cdktf.IResolvable;
  /**
  * SchedulerName represents which scheduler to proceed the scheduling. If specified, the policy will be dispatched by specified scheduler. If not specified, the policy will be dispatched by default scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#scheduler_name DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Suspension declares the policy for suspending different aspects of propagation. nil means no suspension. no default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#suspension DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest#suspension}
  */
  readonly suspension?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension;
}

export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_preference: cdktf.stringToTerraform(struct!.activationPreference),
    association: cdktf.booleanToTerraform(struct!.association),
    conflict_resolution: cdktf.stringToTerraform(struct!.conflictResolution),
    dependent_overrides: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependentOverrides),
    failover: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverToTerraform(struct!.failover),
    placement: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToTerraform(struct!.placement),
    preemption: cdktf.stringToTerraform(struct!.preemption),
    preserve_resources_on_deletion: cdktf.booleanToTerraform(struct!.preserveResourcesOnDeletion),
    priority: cdktf.numberToTerraform(struct!.priority),
    propagate_deps: cdktf.booleanToTerraform(struct!.propagateDeps),
    resource_selectors: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsToTerraform, false)(struct!.resourceSelectors),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    suspension: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionToTerraform(struct!.suspension),
  }
}


export function dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_preference: {
      value: cdktf.stringToHclTerraform(struct!.activationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association: {
      value: cdktf.booleanToHclTerraform(struct!.association),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conflict_resolution: {
      value: cdktf.stringToHclTerraform(struct!.conflictResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependent_overrides: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependentOverrides),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failover: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverToHclTerraform(struct!.failover),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover",
    },
    placement: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement",
    },
    preemption: {
      value: cdktf.stringToHclTerraform(struct!.preemption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_resources_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.preserveResourcesOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    propagate_deps: {
      value: cdktf.booleanToHclTerraform(struct!.propagateDeps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_selectors: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsToHclTerraform, false)(struct!.resourceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsList",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspension: {
      value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionToHclTerraform(struct!.suspension),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationPreference = this._activationPreference;
    }
    if (this._association !== undefined) {
      hasAnyValues = true;
      internalValueResult.association = this._association;
    }
    if (this._conflictResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution;
    }
    if (this._dependentOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependentOverrides = this._dependentOverrides;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._preemption !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemption = this._preemption;
    }
    if (this._preserveResourcesOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveResourcesOnDeletion = this._preserveResourcesOnDeletion;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._propagateDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateDeps = this._propagateDeps;
    }
    if (this._resourceSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelectors = this._resourceSelectors?.internalValue;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._suspension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspension = this._suspension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationPreference = undefined;
      this._association = undefined;
      this._conflictResolution = undefined;
      this._dependentOverrides = undefined;
      this._failover.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._preemption = undefined;
      this._preserveResourcesOnDeletion = undefined;
      this._priority = undefined;
      this._propagateDeps = undefined;
      this._resourceSelectors.internalValue = undefined;
      this._schedulerName = undefined;
      this._suspension.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationPreference = value.activationPreference;
      this._association = value.association;
      this._conflictResolution = value.conflictResolution;
      this._dependentOverrides = value.dependentOverrides;
      this._failover.internalValue = value.failover;
      this._placement.internalValue = value.placement;
      this._preemption = value.preemption;
      this._preserveResourcesOnDeletion = value.preserveResourcesOnDeletion;
      this._priority = value.priority;
      this._propagateDeps = value.propagateDeps;
      this._resourceSelectors.internalValue = value.resourceSelectors;
      this._schedulerName = value.schedulerName;
      this._suspension.internalValue = value.suspension;
    }
  }

  // activation_preference - computed: false, optional: true, required: false
  private _activationPreference?: string; 
  public get activationPreference() {
    return this.getStringAttribute('activation_preference');
  }
  public set activationPreference(value: string) {
    this._activationPreference = value;
  }
  public resetActivationPreference() {
    this._activationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationPreferenceInput() {
    return this._activationPreference;
  }

  // association - computed: false, optional: true, required: false
  private _association?: boolean | cdktf.IResolvable; 
  public get association() {
    return this.getBooleanAttribute('association');
  }
  public set association(value: boolean | cdktf.IResolvable) {
    this._association = value;
  }
  public resetAssociation() {
    this._association = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationInput() {
    return this._association;
  }

  // conflict_resolution - computed: false, optional: true, required: false
  private _conflictResolution?: string; 
  public get conflictResolution() {
    return this.getStringAttribute('conflict_resolution');
  }
  public set conflictResolution(value: string) {
    this._conflictResolution = value;
  }
  public resetConflictResolution() {
    this._conflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionInput() {
    return this._conflictResolution;
  }

  // dependent_overrides - computed: false, optional: true, required: false
  private _dependentOverrides?: string[]; 
  public get dependentOverrides() {
    return this.getListAttribute('dependent_overrides');
  }
  public set dependentOverrides(value: string[]) {
    this._dependentOverrides = value;
  }
  public resetDependentOverrides() {
    this._dependentOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependentOverridesInput() {
    return this._dependentOverrides;
  }

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecFailover) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // preemption - computed: false, optional: true, required: false
  private _preemption?: string; 
  public get preemption() {
    return this.getStringAttribute('preemption');
  }
  public set preemption(value: string) {
    this._preemption = value;
  }
  public resetPreemption() {
    this._preemption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionInput() {
    return this._preemption;
  }

  // preserve_resources_on_deletion - computed: false, optional: true, required: false
  private _preserveResourcesOnDeletion?: boolean | cdktf.IResolvable; 
  public get preserveResourcesOnDeletion() {
    return this.getBooleanAttribute('preserve_resources_on_deletion');
  }
  public set preserveResourcesOnDeletion(value: boolean | cdktf.IResolvable) {
    this._preserveResourcesOnDeletion = value;
  }
  public resetPreserveResourcesOnDeletion() {
    this._preserveResourcesOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveResourcesOnDeletionInput() {
    return this._preserveResourcesOnDeletion;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // propagate_deps - computed: false, optional: true, required: false
  private _propagateDeps?: boolean | cdktf.IResolvable; 
  public get propagateDeps() {
    return this.getBooleanAttribute('propagate_deps');
  }
  public set propagateDeps(value: boolean | cdktf.IResolvable) {
    this._propagateDeps = value;
  }
  public resetPropagateDeps() {
    this._propagateDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateDepsInput() {
    return this._propagateDeps;
  }

  // resource_selectors - computed: false, optional: false, required: true
  private _resourceSelectors = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectorsList(this, "resource_selectors", false);
  public get resourceSelectors() {
    return this._resourceSelectors;
  }
  public putResourceSelectors(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecResourceSelectors[] | cdktf.IResolvable) {
    this._resourceSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorsInput() {
    return this._resourceSelectors.internalValue;
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

  // suspension - computed: false, optional: true, required: false
  private _suspension = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspensionOutputReference(this, "suspension");
  public get suspension() {
    return this._suspension;
  }
  public putSuspension(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecSuspension) {
    this._suspension.internalValue = value;
  }
  public resetSuspension() {
    this._suspension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspensionInput() {
    return this._suspension.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest k8s_policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest}
*/
export class DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest k8s_policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_policy_karmada_io_cluster_propagation_policy_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKarmadaIoClusterPropagationPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
