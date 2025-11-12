// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#metadata DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata;
  /**
  * Spec represents the desired behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#spec DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#spec}
  */
  readonly spec: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec;
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#annotations DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#labels DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#namespace DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters {
  /**
  * Name of target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Replicas in target cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replicas DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._replicas = value.replicas;
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions {
  /**
  * TolerationSeconds represents the period of time Karmada should wait after reaching the desired state before performing failover process. If not specified, Karmada will immediately perform failover process. Defaults to 300s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#toleration_seconds DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication {
  /**
  * DecisionConditions indicates the decision conditions of performing the failover process. Only when all conditions are met can the failover process be performed. Currently, DecisionConditions includes several conditions: - TolerationSeconds (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#decision_conditions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#decision_conditions}
  */
  readonly decisionConditions: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions;
  /**
  * GracePeriodSeconds is the maximum waiting duration in seconds before application on the migrated cluster should be deleted. Required only when PurgeMode is 'Graciously' and defaults to 600s. If the application on the new cluster cannot reach a Healthy state, Karmada will delete the application after GracePeriodSeconds is reached. Value must be positive integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#grace_period_seconds DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#grace_period_seconds}
  */
  readonly gracePeriodSeconds?: number;
  /**
  * PurgeMode represents how to deal with the legacy applications on the cluster from which the application is migrated. Valid options are 'Immediately', 'Graciously' and 'Never'. Defaults to 'Graciously'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#purge_mode DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#purge_mode}
  */
  readonly purgeMode?: string;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_conditions: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditionsToTerraform(struct!.decisionConditions),
    grace_period_seconds: cdktf.numberToTerraform(struct!.gracePeriodSeconds),
    purge_mode: cdktf.stringToTerraform(struct!.purgeMode),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_conditions: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditionsToHclTerraform(struct!.decisionConditions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions",
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication | cdktf.IResolvable | undefined) {
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
  private _decisionConditions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditionsOutputReference(this, "decision_conditions");
  public get decisionConditions() {
    return this._decisionConditions;
  }
  public putDecisionConditions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationDecisionConditions) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover {
  /**
  * Application indicates failover behaviors in case of application failure. If this value is nil, failover is disabled. If set, the PropagateDeps should be true so that the dependencies could be migrated along with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#application DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#application}
  */
  readonly application?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationToTerraform(struct!.application),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationToHclTerraform(struct!.application),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover | cdktf.IResolvable | undefined) {
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
  private _application = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplicationOutputReference(this, "application");
  public get application() {
    return this._application;
  }
  public putApplication(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverApplication) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks {
  /**
  * CreationTimestamp is a timestamp representing the server time when this object was created. Clients should not set this value to avoid the time inconsistency issue. It is represented in RFC3339 form(like '2021-04-25T10:02:10Z') and is in UTC. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#creation_timestamp DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#creation_timestamp}
  */
  readonly creationTimestamp?: string;
  /**
  * FromCluster which cluster the eviction perform from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#from_cluster DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#from_cluster}
  */
  readonly fromCluster: string;
  /**
  * GracePeriodSeconds is the maximum waiting duration in seconds before the item should be deleted. If the application on the new cluster cannot reach a Healthy state, Karmada will delete the item after GracePeriodSeconds is reached. Value must be positive integer. It can not co-exist with SuppressDeletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#grace_period_seconds DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#grace_period_seconds}
  */
  readonly gracePeriodSeconds?: number;
  /**
  * Message is a human-readable message indicating details about the eviction. This may be an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#message DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#message}
  */
  readonly message?: string;
  /**
  * Producer indicates the controller who triggered the eviction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#producer DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#producer}
  */
  readonly producer: string;
  /**
  * Reason contains a programmatic identifier indicating the reason for the eviction. Producers may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#reason DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#reason}
  */
  readonly reason: string;
  /**
  * Replicas indicates the number of replicas should be evicted. Should be ignored for resource type that doesn't have replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replicas DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * SuppressDeletion represents the grace period will be persistent until the tools or human intervention stops it. It can not co-exist with GracePeriodSeconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#suppress_deletion DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#suppress_deletion}
  */
  readonly suppressDeletion?: boolean | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_timestamp: cdktf.stringToTerraform(struct!.creationTimestamp),
    from_cluster: cdktf.stringToTerraform(struct!.fromCluster),
    grace_period_seconds: cdktf.numberToTerraform(struct!.gracePeriodSeconds),
    message: cdktf.stringToTerraform(struct!.message),
    producer: cdktf.stringToTerraform(struct!.producer),
    reason: cdktf.stringToTerraform(struct!.reason),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    suppress_deletion: cdktf.booleanToTerraform(struct!.suppressDeletion),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.creationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_cluster: {
      value: cdktf.stringToHclTerraform(struct!.fromCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer: {
      value: cdktf.stringToHclTerraform(struct!.producer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suppress_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.suppressDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTimestamp = this._creationTimestamp;
    }
    if (this._fromCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCluster = this._fromCluster;
    }
    if (this._gracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodSeconds = this._gracePeriodSeconds;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._producer !== undefined) {
      hasAnyValues = true;
      internalValueResult.producer = this._producer;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._suppressDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressDeletion = this._suppressDeletion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationTimestamp = undefined;
      this._fromCluster = undefined;
      this._gracePeriodSeconds = undefined;
      this._message = undefined;
      this._producer = undefined;
      this._reason = undefined;
      this._replicas = undefined;
      this._suppressDeletion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationTimestamp = value.creationTimestamp;
      this._fromCluster = value.fromCluster;
      this._gracePeriodSeconds = value.gracePeriodSeconds;
      this._message = value.message;
      this._producer = value.producer;
      this._reason = value.reason;
      this._replicas = value.replicas;
      this._suppressDeletion = value.suppressDeletion;
    }
  }

  // creation_timestamp - computed: false, optional: true, required: false
  private _creationTimestamp?: string; 
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }
  public set creationTimestamp(value: string) {
    this._creationTimestamp = value;
  }
  public resetCreationTimestamp() {
    this._creationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimestampInput() {
    return this._creationTimestamp;
  }

  // from_cluster - computed: false, optional: false, required: true
  private _fromCluster?: string; 
  public get fromCluster() {
    return this.getStringAttribute('from_cluster');
  }
  public set fromCluster(value: string) {
    this._fromCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromClusterInput() {
    return this._fromCluster;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // producer - computed: false, optional: false, required: true
  private _producer?: string; 
  public get producer() {
    return this.getStringAttribute('producer');
  }
  public set producer(value: string) {
    this._producer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get producerInput() {
    return this._producer;
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
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

  // suppress_deletion - computed: false, optional: true, required: false
  private _suppressDeletion?: boolean | cdktf.IResolvable; 
  public get suppressDeletion() {
    return this.getBooleanAttribute('suppress_deletion');
  }
  public set suppressDeletion(value: boolean | cdktf.IResolvable) {
    this._suppressDeletion = value;
  }
  public resetSuppressDeletion() {
    this._suppressDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressDeletionInput() {
    return this._suppressDeletion;
  }
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_expressions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_expressions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_labels DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsList",
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities {
  /**
  * AffinityName is the name of the cluster group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#affinity_name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#affinity_name}
  */
  readonly affinityName: string;
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#cluster_names DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#exclude DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#field_selector DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#label_selector DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity_name: cdktf.stringToTerraform(struct!.affinityName),
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities | cdktf.IResolvable): any {
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
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector",
    },
    label_selector: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities | cdktf.IResolvable | undefined) {
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
  private _fieldSelector = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesFieldSelector) {
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
  private _labelSelector = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesLabelSelector) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_expressions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_expressions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_labels DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsList",
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#cluster_names DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#exclude DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#field_selector DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#label_selector DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity | cdktf.IResolvable): any {
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
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector",
    },
    label_selector: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity | cdktf.IResolvable | undefined) {
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
  private _fieldSelector = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityFieldSelector) {
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
  private _labelSelector = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityLabelSelector) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#effect DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#toleration_seconds DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#value DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_expressions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_expressions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_labels DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsList",
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#cluster_names DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#exclude DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#field_selector DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#label_selector DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable): any {
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
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector",
    },
    label_selector: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster | cdktf.IResolvable | undefined) {
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
  private _fieldSelector = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterFieldSelector) {
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
  private _labelSelector = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterLabelSelector) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct {
  /**
  * TargetCluster describes the filter to select clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#target_cluster DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#target_cluster}
  */
  readonly targetCluster: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster;
  /**
  * Weight expressing the preference to the cluster(s) specified by 'TargetCluster'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#weight DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_cluster: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToTerraform(struct!.targetCluster),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_cluster: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterToHclTerraform(struct!.targetCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster",
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct | cdktf.IResolvable | undefined) {
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
  private _targetCluster = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetClusterOutputReference(this, "target_cluster");
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListTargetCluster) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference {
  /**
  * DynamicWeight specifies the factor to generates dynamic weight list. If specified, StaticWeightList will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#dynamic_weight DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#dynamic_weight}
  */
  readonly dynamicWeight?: string;
  /**
  * StaticWeightList defines the static cluster weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#static_weight_list DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#static_weight_list}
  */
  readonly staticWeightList?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_weight: cdktf.stringToTerraform(struct!.dynamicWeight),
    static_weight_list: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToTerraform, false)(struct!.staticWeightList),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructToHclTerraform, false)(struct!.staticWeightList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference | cdktf.IResolvable | undefined) {
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
  private _staticWeightList = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStructList(this, "static_weight_list", false);
  public get staticWeightList() {
    return this._staticWeightList;
  }
  public putStaticWeightList(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceStaticWeightListStruct[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling {
  /**
  * ReplicaDivisionPreference determines how the replicas is divided when ReplicaSchedulingType is 'Divided'. Valid options are Aggregated and Weighted. 'Aggregated' divides replicas into clusters as few as possible, while respecting clusters' resource availabilities during the division. 'Weighted' divides replicas by weight according to WeightPreference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replica_division_preference DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replica_division_preference}
  */
  readonly replicaDivisionPreference?: string;
  /**
  * ReplicaSchedulingType determines how the replicas is scheduled when karmada propagating a resource. Valid options are Duplicated and Divided. 'Duplicated' duplicates the same replicas to each candidate member cluster from resource. 'Divided' divides replicas into parts according to number of valid candidate member clusters, and exact replicas for each cluster are determined by ReplicaDivisionPreference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replica_scheduling_type DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replica_scheduling_type}
  */
  readonly replicaSchedulingType?: string;
  /**
  * WeightPreference describes weight for each cluster or for each group of cluster If ReplicaDivisionPreference is set to 'Weighted', and WeightPreference is not set, scheduler will weight all clusters the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#weight_preference DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#weight_preference}
  */
  readonly weightPreference?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_division_preference: cdktf.stringToTerraform(struct!.replicaDivisionPreference),
    replica_scheduling_type: cdktf.stringToTerraform(struct!.replicaSchedulingType),
    weight_preference: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceToTerraform(struct!.weightPreference),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable): any {
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
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceToHclTerraform(struct!.weightPreference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling | cdktf.IResolvable | undefined) {
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
  private _weightPreference = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreferenceOutputReference(this, "weight_preference");
  public get weightPreference() {
    return this._weightPreference;
  }
  public putWeightPreference(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingWeightPreference) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints {
  /**
  * MaxGroups restricts the maximum number of cluster groups to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#max_groups DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#max_groups}
  */
  readonly maxGroups?: number;
  /**
  * MinGroups restricts the minimum number of cluster groups to be selected. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#min_groups DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#min_groups}
  */
  readonly minGroups?: number;
  /**
  * SpreadByField represents the fields on Karmada cluster API used for dynamically grouping member clusters into different groups. Resources will be spread among different cluster groups. Available fields for spreading are: cluster, region, zone, and provider. SpreadByField should not co-exist with SpreadByLabel. If both SpreadByField and SpreadByLabel are empty, SpreadByField will be set to 'cluster' by system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#spread_by_field DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#spread_by_field}
  */
  readonly spreadByField?: string;
  /**
  * SpreadByLabel represents the label key used for grouping member clusters into different groups. Resources will be spread among different cluster groups. SpreadByLabel should not co-exist with SpreadByField.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#spread_by_label DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#spread_by_label}
  */
  readonly spreadByLabel?: string;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement {
  /**
  * ClusterAffinities represents scheduling restrictions to multiple cluster groups that indicated by ClusterAffinityTerm. The scheduler will evaluate these groups one by one in the order they appear in the spec, the group that does not satisfy scheduling restrictions will be ignored which means all clusters in this group will not be selected unless it also belongs to the next group(a cluster could belong to multiple groups). If none of the groups satisfy the scheduling restrictions, then scheduling fails, which means no cluster will be selected. Note: 1. ClusterAffinities can not co-exist with ClusterAffinity. 2. If both ClusterAffinity and ClusterAffinities are not set, any cluster can be scheduling candidates. Potential use case 1: The private clusters in the local data center could be the main group, and the managed clusters provided by cluster providers could be the secondary group. So that the Karmada scheduler would prefer to schedule workloads to the main group and the second group will only be considered in case of the main group does not satisfy restrictions(like, lack of resources). Potential use case 2: For the disaster recovery scenario, the clusters could be organized to primary and backup groups, the workloads would be scheduled to primary clusters firstly, and when primary cluster fails(like data center power off), Karmada scheduler could migrate workloads to the backup clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#cluster_affinities DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#cluster_affinities}
  */
  readonly clusterAffinities?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities[] | cdktf.IResolvable;
  /**
  * ClusterAffinity represents scheduling restrictions to a certain set of clusters. Note: 1. ClusterAffinity can not co-exist with ClusterAffinities. 2. If both ClusterAffinity and ClusterAffinities are not set, any cluster can be scheduling candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#cluster_affinity DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#cluster_affinity}
  */
  readonly clusterAffinity?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity;
  /**
  * ClusterTolerations represents the tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#cluster_tolerations DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#cluster_tolerations}
  */
  readonly clusterTolerations?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations[] | cdktf.IResolvable;
  /**
  * ReplicaScheduling represents the scheduling policy on dealing with the number of replicas when propagating resources that have replicas in spec (e.g. deployments, statefulsets) to member clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replica_scheduling DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replica_scheduling}
  */
  readonly replicaScheduling?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling;
  /**
  * SpreadConstraints represents a list of the scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#spread_constraints DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#spread_constraints}
  */
  readonly spreadConstraints?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_affinities: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesToTerraform, false)(struct!.clusterAffinities),
    cluster_affinity: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityToTerraform(struct!.clusterAffinity),
    cluster_tolerations: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsToTerraform, false)(struct!.clusterTolerations),
    replica_scheduling: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingToTerraform(struct!.replicaScheduling),
    spread_constraints: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsToTerraform, false)(struct!.spreadConstraints),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_affinities: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesToHclTerraform, false)(struct!.clusterAffinities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesList",
    },
    cluster_affinity: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityToHclTerraform(struct!.clusterAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity",
    },
    cluster_tolerations: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsToHclTerraform, false)(struct!.clusterTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsList",
    },
    replica_scheduling: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingToHclTerraform(struct!.replicaScheduling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling",
    },
    spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsToHclTerraform, false)(struct!.spreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement | cdktf.IResolvable | undefined) {
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
  private _clusterAffinities = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinitiesList(this, "cluster_affinities", false);
  public get clusterAffinities() {
    return this._clusterAffinities;
  }
  public putClusterAffinities(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinities[] | cdktf.IResolvable) {
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
  private _clusterAffinity = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinityOutputReference(this, "cluster_affinity");
  public get clusterAffinity() {
    return this._clusterAffinity;
  }
  public putClusterAffinity(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterAffinity) {
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
  private _clusterTolerations = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerationsList(this, "cluster_tolerations", false);
  public get clusterTolerations() {
    return this._clusterTolerations;
  }
  public putClusterTolerations(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementClusterTolerations[] | cdktf.IResolvable) {
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
  private _replicaScheduling = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaSchedulingOutputReference(this, "replica_scheduling");
  public get replicaScheduling() {
    return this._replicaScheduling;
  }
  public putReplicaScheduling(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementReplicaScheduling) {
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
  private _spreadConstraints = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraintsList(this, "spread_constraints", false);
  public get spreadConstraints() {
    return this._spreadConstraints;
  }
  public putSpreadConstraints(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementSpreadConstraints[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#values DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_expressions DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#match_fields DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#node_selector_terms DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#effect DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#key DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#operator DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#toleration_seconds DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#value DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim {
  /**
  * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. Note that only PodSpec.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution is included here because it has a hard limit on pod scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#hard_node_affinity DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#hard_node_affinity}
  */
  readonly hardNodeAffinity?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#node_selector DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#tolerations DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard_node_affinity: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityToTerraform(struct!.hardNodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hard_node_affinity: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityToHclTerraform(struct!.hardNodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardNodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardNodeAffinity = this._hardNodeAffinity?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardNodeAffinity.internalValue = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardNodeAffinity.internalValue = value.hardNodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // hard_node_affinity - computed: false, optional: true, required: false
  private _hardNodeAffinity = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinityOutputReference(this, "hard_node_affinity");
  public get hardNodeAffinity() {
    return this._hardNodeAffinity;
  }
  public putHardNodeAffinity(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimHardNodeAffinity) {
    this._hardNodeAffinity.internalValue = value;
  }
  public resetHardNodeAffinity() {
    this._hardNodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardNodeAffinityInput() {
    return this._hardNodeAffinity.internalValue;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimTolerations[] | cdktf.IResolvable) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements {
  /**
  * Namespace represents the resources namespaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#namespace DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NodeClaim represents the node claim HardNodeAffinity, NodeSelector and Tolerations required by each replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#node_claim DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#node_claim}
  */
  readonly nodeClaim?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim;
  /**
  * PriorityClassName represents the resources priorityClassName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#priority_class_name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * ResourceRequest represents the resources required by each replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#resource_request DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#resource_request}
  */
  readonly resourceRequest?: { [key: string]: string };
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_claim: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimToTerraform(struct!.nodeClaim),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    resource_request: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceRequest),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_claim: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimToHclTerraform(struct!.nodeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_request: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceRequest),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClaim = this._nodeClaim?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._resourceRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequest = this._resourceRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._nodeClaim.internalValue = undefined;
      this._priorityClassName = undefined;
      this._resourceRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._nodeClaim.internalValue = value.nodeClaim;
      this._priorityClassName = value.priorityClassName;
      this._resourceRequest = value.resourceRequest;
    }
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

  // node_claim - computed: false, optional: true, required: false
  private _nodeClaim = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaimOutputReference(this, "node_claim");
  public get nodeClaim() {
    return this._nodeClaim;
  }
  public putNodeClaim(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsNodeClaim) {
    this._nodeClaim.internalValue = value;
  }
  public resetNodeClaim() {
    this._nodeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClaimInput() {
    return this._nodeClaim.internalValue;
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

  // resource_request - computed: false, optional: true, required: false
  private _resourceRequest?: { [key: string]: string }; 
  public get resourceRequest() {
    return this.getStringMapAttribute('resource_request');
  }
  public set resourceRequest(value: { [key: string]: string }) {
    this._resourceRequest = value;
  }
  public resetResourceRequest() {
    this._resourceRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequestInput() {
    return this._resourceRequest;
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters {
  /**
  * Name of target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Replicas in target cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replicas DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._replicas = value.replicas;
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy {
  /**
  * Clusters represents the scheduled result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#clusters DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters[] | cdktf.IResolvable;
  /**
  * Name represents the name of the Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace represents the namespace of the Binding. It is required for ResourceBinding. If Namespace is not specified, means the referencing is ClusterResourceBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#namespace DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersToTerraform, false)(struct!.clusters),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersList",
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
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
      this._clusters.internalValue = value.clusters;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByOutputReference {
    return new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource {
  /**
  * APIVersion represents the API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#api_version DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind represents the Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#kind DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name represents the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace represents the namespace for the referent. For non-namespace scoped resources(e.g. 'ClusterRole')，do not need specify Namespace, and for namespace scoped resources, Namespace is required. If Namespace is not specified, means the resource is non-namespace scoped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#namespace DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ResourceVersion represents the internal version of the referenced object, that can be used by clients to determine when object has changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#resource_version DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#uid DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResourceToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResourceToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#cluster_names DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClustersToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClustersToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension {
  /**
  * Dispatching controls whether dispatching should be suspended. nil means not suspend, no default value, only accepts 'true'. Note: true means stop propagating to all clusters. Can not co-exist with DispatchingOnClusters which is used to suspend particular clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#dispatching DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#dispatching}
  */
  readonly dispatching?: boolean | cdktf.IResolvable;
  /**
  * DispatchingOnClusters declares a list of clusters to which the dispatching should be suspended. Note: Can not co-exist with Dispatching which is used to suspend all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#dispatching_on_clusters DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#dispatching_on_clusters}
  */
  readonly dispatchingOnClusters?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dispatching: cdktf.booleanToTerraform(struct!.dispatching),
    dispatching_on_clusters: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClustersToTerraform(struct!.dispatchingOnClusters),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension | cdktf.IResolvable): any {
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
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClustersToHclTerraform(struct!.dispatchingOnClusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension | cdktf.IResolvable | undefined) {
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
  private _dispatchingOnClusters = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClustersOutputReference(this, "dispatching_on_clusters");
  public get dispatchingOnClusters() {
    return this._dispatchingOnClusters;
  }
  public putDispatchingOnClusters(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionDispatchingOnClusters) {
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
export interface DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec {
  /**
  * Clusters represents target member clusters where the resource to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#clusters DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters[] | cdktf.IResolvable;
  /**
  * ConflictResolution declares how potential conflict should be handled when a resource that is being propagated already exists in the target cluster. It defaults to 'Abort' which means stop propagating to avoid unexpected overwrites. The 'Overwrite' might be useful when migrating legacy cluster resources to Karmada, in which case conflict is predictable and can be instructed to Karmada take over the resource by overwriting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#conflict_resolution DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#conflict_resolution}
  */
  readonly conflictResolution?: string;
  /**
  * Failover indicates how Karmada migrates applications in case of failures. It inherits directly from the associated PropagationPolicy(or ClusterPropagationPolicy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#failover DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#failover}
  */
  readonly failover?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover;
  /**
  * GracefulEvictionTasks holds the eviction tasks that are expected to perform the eviction in a graceful way. The intended workflow is: 1. Once the controller(such as 'taint-manager') decided to evict the resource that is referenced by current ResourceBinding or ClusterResourceBinding from a target cluster, it removes(or scale down the replicas) the target from Clusters(.spec.Clusters) and builds a graceful eviction task. 2. The scheduler may perform a re-scheduler and probably select a substitute cluster to take over the evicting workload(resource). 3. The graceful eviction controller takes care of the graceful eviction tasks and performs the final removal after the workload(resource) is available on the substitute cluster or exceed the grace termination period(defaults to 10 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#graceful_eviction_tasks DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#graceful_eviction_tasks}
  */
  readonly gracefulEvictionTasks?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks[] | cdktf.IResolvable;
  /**
  * Placement represents the rule for select clusters to propagate resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#placement DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#placement}
  */
  readonly placement?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement;
  /**
  * PreserveResourcesOnDeletion controls whether resources should be preserved on the member clusters when the binding object is deleted. If set to true, resources will be preserved on the member clusters. Default is false, which means resources will be deleted along with the binding object. This setting applies to all Work objects created under this binding object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#preserve_resources_on_deletion DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#preserve_resources_on_deletion}
  */
  readonly preserveResourcesOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * PropagateDeps tells if relevant resources should be propagated automatically. It is inherited from PropagationPolicy or ClusterPropagationPolicy. default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#propagate_deps DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#propagate_deps}
  */
  readonly propagateDeps?: boolean | cdktf.IResolvable;
  /**
  * ReplicaRequirements represents the requirements required by each replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replica_requirements DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replica_requirements}
  */
  readonly replicaRequirements?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements;
  /**
  * Replicas represents the replica number of the referencing resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#replicas DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * RequiredBy represents the list of Bindings that depend on the referencing resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#required_by DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#required_by}
  */
  readonly requiredBy?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy[] | cdktf.IResolvable;
  /**
  * RescheduleTriggeredAt is a timestamp representing when the referenced resource is triggered rescheduling. When this field is updated, it means a rescheduling is manually triggered by user, and the expected behavior of this action is to do a complete recalculation without referring to last scheduling results. It works with the status.lastScheduledTime field, and only when this timestamp is later than timestamp in status.lastScheduledTime will the rescheduling actually execute, otherwise, ignored. It is represented in RFC3339 form (like '2006-01-02T15:04:05Z') and is in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#reschedule_triggered_at DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#reschedule_triggered_at}
  */
  readonly rescheduleTriggeredAt?: string;
  /**
  * Resource represents the Kubernetes resource to be propagated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#resource DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#resource}
  */
  readonly resource: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource;
  /**
  * SchedulerName represents which scheduler to proceed the scheduling. It inherits directly from the associated PropagationPolicy(or ClusterPropagationPolicy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#scheduler_name DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Suspension declares the policy for suspending different aspects of propagation. nil means no suspension. no default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#suspension DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest#suspension}
  */
  readonly suspension?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension;
}

export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecToTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersToTerraform, false)(struct!.clusters),
    conflict_resolution: cdktf.stringToTerraform(struct!.conflictResolution),
    failover: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverToTerraform(struct!.failover),
    graceful_eviction_tasks: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksToTerraform, false)(struct!.gracefulEvictionTasks),
    placement: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementToTerraform(struct!.placement),
    preserve_resources_on_deletion: cdktf.booleanToTerraform(struct!.preserveResourcesOnDeletion),
    propagate_deps: cdktf.booleanToTerraform(struct!.propagateDeps),
    replica_requirements: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsToTerraform(struct!.replicaRequirements),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    required_by: cdktf.listMapper(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByToTerraform, false)(struct!.requiredBy),
    reschedule_triggered_at: cdktf.stringToTerraform(struct!.rescheduleTriggeredAt),
    resource: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResourceToTerraform(struct!.resource),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    suspension: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionToTerraform(struct!.suspension),
  }
}


export function dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersList",
    },
    conflict_resolution: {
      value: cdktf.stringToHclTerraform(struct!.conflictResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverToHclTerraform(struct!.failover),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover",
    },
    graceful_eviction_tasks: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksToHclTerraform, false)(struct!.gracefulEvictionTasks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksList",
    },
    placement: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement",
    },
    preserve_resources_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.preserveResourcesOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagate_deps: {
      value: cdktf.booleanToHclTerraform(struct!.propagateDeps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replica_requirements: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsToHclTerraform(struct!.replicaRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_by: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByToHclTerraform, false)(struct!.requiredBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByList",
    },
    reschedule_triggered_at: {
      value: cdktf.stringToHclTerraform(struct!.rescheduleTriggeredAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspension: {
      value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionToHclTerraform(struct!.suspension),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._conflictResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._gracefulEvictionTasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulEvictionTasks = this._gracefulEvictionTasks?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._preserveResourcesOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveResourcesOnDeletion = this._preserveResourcesOnDeletion;
    }
    if (this._propagateDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateDeps = this._propagateDeps;
    }
    if (this._replicaRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaRequirements = this._replicaRequirements?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._requiredBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredBy = this._requiredBy?.internalValue;
    }
    if (this._rescheduleTriggeredAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleTriggeredAt = this._rescheduleTriggeredAt;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
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

  public set internalValue(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
      this._conflictResolution = undefined;
      this._failover.internalValue = undefined;
      this._gracefulEvictionTasks.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._preserveResourcesOnDeletion = undefined;
      this._propagateDeps = undefined;
      this._replicaRequirements.internalValue = undefined;
      this._replicas = undefined;
      this._requiredBy.internalValue = undefined;
      this._rescheduleTriggeredAt = undefined;
      this._resource.internalValue = undefined;
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
      this._clusters.internalValue = value.clusters;
      this._conflictResolution = value.conflictResolution;
      this._failover.internalValue = value.failover;
      this._gracefulEvictionTasks.internalValue = value.gracefulEvictionTasks;
      this._placement.internalValue = value.placement;
      this._preserveResourcesOnDeletion = value.preserveResourcesOnDeletion;
      this._propagateDeps = value.propagateDeps;
      this._replicaRequirements.internalValue = value.replicaRequirements;
      this._replicas = value.replicas;
      this._requiredBy.internalValue = value.requiredBy;
      this._rescheduleTriggeredAt = value.rescheduleTriggeredAt;
      this._resource.internalValue = value.resource;
      this._schedulerName = value.schedulerName;
      this._suspension.internalValue = value.suspension;
    }
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecFailover) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // graceful_eviction_tasks - computed: false, optional: true, required: false
  private _gracefulEvictionTasks = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasksList(this, "graceful_eviction_tasks", false);
  public get gracefulEvictionTasks() {
    return this._gracefulEvictionTasks;
  }
  public putGracefulEvictionTasks(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecGracefulEvictionTasks[] | cdktf.IResolvable) {
    this._gracefulEvictionTasks.internalValue = value;
  }
  public resetGracefulEvictionTasks() {
    this._gracefulEvictionTasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulEvictionTasksInput() {
    return this._gracefulEvictionTasks.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
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

  // replica_requirements - computed: false, optional: true, required: false
  private _replicaRequirements = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirementsOutputReference(this, "replica_requirements");
  public get replicaRequirements() {
    return this._replicaRequirements;
  }
  public putReplicaRequirements(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecReplicaRequirements) {
    this._replicaRequirements.internalValue = value;
  }
  public resetReplicaRequirements() {
    this._replicaRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRequirementsInput() {
    return this._replicaRequirements.internalValue;
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

  // required_by - computed: false, optional: true, required: false
  private _requiredBy = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredByList(this, "required_by", false);
  public get requiredBy() {
    return this._requiredBy;
  }
  public putRequiredBy(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecRequiredBy[] | cdktf.IResolvable) {
    this._requiredBy.internalValue = value;
  }
  public resetRequiredBy() {
    this._requiredBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredByInput() {
    return this._requiredBy.internalValue;
  }

  // reschedule_triggered_at - computed: false, optional: true, required: false
  private _rescheduleTriggeredAt?: string; 
  public get rescheduleTriggeredAt() {
    return this.getStringAttribute('reschedule_triggered_at');
  }
  public set rescheduleTriggeredAt(value: string) {
    this._rescheduleTriggeredAt = value;
  }
  public resetRescheduleTriggeredAt() {
    this._rescheduleTriggeredAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleTriggeredAtInput() {
    return this._rescheduleTriggeredAt;
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
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
  private _suspension = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspensionOutputReference(this, "suspension");
  public get suspension() {
    return this._suspension;
  }
  public putSuspension(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecSuspension) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest k8s_work_karmada_io_resource_binding_v1alpha2_manifest}
*/
export class DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_work_karmada_io_resource_binding_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SWorkKarmadaIoResourceBindingV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_work_karmada_io_resource_binding_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/work_karmada_io_resource_binding_v1alpha2_manifest k8s_work_karmada_io_resource_binding_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_work_karmada_io_resource_binding_v1alpha2_manifest',
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
  private _metadata = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec) {
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
      metadata: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkKarmadaIoResourceBindingV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
