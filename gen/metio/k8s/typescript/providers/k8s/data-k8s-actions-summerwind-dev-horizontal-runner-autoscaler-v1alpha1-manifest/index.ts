// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#metadata DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata;
  /**
  * HorizontalRunnerAutoscalerSpec defines the desired state of HorizontalRunnerAutoscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#spec DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec;
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#annotations DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#labels DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#name DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#namespace DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#effective_time DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#expiration_time DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#name DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#replicas DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effective_time: cdktf.stringToTerraform(struct!.effectiveTime),
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    name: cdktf.stringToTerraform(struct!.name),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effective_time: {
      value: cdktf.stringToHclTerraform(struct!.effectiveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
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

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectiveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveTime = this._effectiveTime;
    }
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
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

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effectiveTime = undefined;
      this._expirationTime = undefined;
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
      this._effectiveTime = value.effectiveTime;
      this._expirationTime = value.expirationTime;
      this._name = value.name;
      this._replicas = value.replicas;
    }
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsOutputReference {
    return new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#name DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRefToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRefToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#secret_ref DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics {
  /**
  * RepositoryNames is the list of repository names to be used for calculating the metric. For example, a repository name is the REPO part of 'github.com/USER/REPO'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#repository_names DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#repository_names}
  */
  readonly repositoryNames?: string[];
  /**
  * ScaleDownAdjustment is the number of runners removed on scale-down. You can only specify either ScaleDownFactor or ScaleDownAdjustment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_down_adjustment DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_down_adjustment}
  */
  readonly scaleDownAdjustment?: number;
  /**
  * ScaleDownFactor is the multiplicative factor applied to the current number of runners used to determine how many pods should be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_down_factor DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_down_factor}
  */
  readonly scaleDownFactor?: string;
  /**
  * ScaleDownThreshold is the percentage of busy runners less than which will trigger the hpa to scale the runners down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_down_threshold DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_down_threshold}
  */
  readonly scaleDownThreshold?: string;
  /**
  * ScaleUpAdjustment is the number of runners added on scale-up. You can only specify either ScaleUpFactor or ScaleUpAdjustment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_up_adjustment DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_up_adjustment}
  */
  readonly scaleUpAdjustment?: number;
  /**
  * ScaleUpFactor is the multiplicative factor applied to the current number of runners used to determine how many pods should be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_up_factor DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_up_factor}
  */
  readonly scaleUpFactor?: string;
  /**
  * ScaleUpThreshold is the percentage of busy runners greater than which will trigger the hpa to scale runners up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_up_threshold DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_up_threshold}
  */
  readonly scaleUpThreshold?: string;
  /**
  * Type is the type of metric to be used for autoscaling. It can be TotalNumberOfQueuedAndInProgressWorkflowRuns or PercentageRunnersBusy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#type DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositoryNames),
    scale_down_adjustment: cdktf.numberToTerraform(struct!.scaleDownAdjustment),
    scale_down_factor: cdktf.stringToTerraform(struct!.scaleDownFactor),
    scale_down_threshold: cdktf.stringToTerraform(struct!.scaleDownThreshold),
    scale_up_adjustment: cdktf.numberToTerraform(struct!.scaleUpAdjustment),
    scale_up_factor: cdktf.stringToTerraform(struct!.scaleUpFactor),
    scale_up_threshold: cdktf.stringToTerraform(struct!.scaleUpThreshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositoryNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scale_down_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.scaleDownAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_down_factor: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_threshold: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_up_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.scaleUpAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_up_factor: {
      value: cdktf.stringToHclTerraform(struct!.scaleUpFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_up_threshold: {
      value: cdktf.stringToHclTerraform(struct!.scaleUpThreshold),
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

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryNames = this._repositoryNames;
    }
    if (this._scaleDownAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownAdjustment = this._scaleDownAdjustment;
    }
    if (this._scaleDownFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownFactor = this._scaleDownFactor;
    }
    if (this._scaleDownThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownThreshold = this._scaleDownThreshold;
    }
    if (this._scaleUpAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpAdjustment = this._scaleUpAdjustment;
    }
    if (this._scaleUpFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpFactor = this._scaleUpFactor;
    }
    if (this._scaleUpThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpThreshold = this._scaleUpThreshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryNames = undefined;
      this._scaleDownAdjustment = undefined;
      this._scaleDownFactor = undefined;
      this._scaleDownThreshold = undefined;
      this._scaleUpAdjustment = undefined;
      this._scaleUpFactor = undefined;
      this._scaleUpThreshold = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryNames = value.repositoryNames;
      this._scaleDownAdjustment = value.scaleDownAdjustment;
      this._scaleDownFactor = value.scaleDownFactor;
      this._scaleDownThreshold = value.scaleDownThreshold;
      this._scaleUpAdjustment = value.scaleUpAdjustment;
      this._scaleUpFactor = value.scaleUpFactor;
      this._scaleUpThreshold = value.scaleUpThreshold;
      this._type = value.type;
    }
  }

  // repository_names - computed: false, optional: true, required: false
  private _repositoryNames?: string[]; 
  public get repositoryNames() {
    return this.getListAttribute('repository_names');
  }
  public set repositoryNames(value: string[]) {
    this._repositoryNames = value;
  }
  public resetRepositoryNames() {
    this._repositoryNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNamesInput() {
    return this._repositoryNames;
  }

  // scale_down_adjustment - computed: false, optional: true, required: false
  private _scaleDownAdjustment?: number; 
  public get scaleDownAdjustment() {
    return this.getNumberAttribute('scale_down_adjustment');
  }
  public set scaleDownAdjustment(value: number) {
    this._scaleDownAdjustment = value;
  }
  public resetScaleDownAdjustment() {
    this._scaleDownAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownAdjustmentInput() {
    return this._scaleDownAdjustment;
  }

  // scale_down_factor - computed: false, optional: true, required: false
  private _scaleDownFactor?: string; 
  public get scaleDownFactor() {
    return this.getStringAttribute('scale_down_factor');
  }
  public set scaleDownFactor(value: string) {
    this._scaleDownFactor = value;
  }
  public resetScaleDownFactor() {
    this._scaleDownFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownFactorInput() {
    return this._scaleDownFactor;
  }

  // scale_down_threshold - computed: false, optional: true, required: false
  private _scaleDownThreshold?: string; 
  public get scaleDownThreshold() {
    return this.getStringAttribute('scale_down_threshold');
  }
  public set scaleDownThreshold(value: string) {
    this._scaleDownThreshold = value;
  }
  public resetScaleDownThreshold() {
    this._scaleDownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownThresholdInput() {
    return this._scaleDownThreshold;
  }

  // scale_up_adjustment - computed: false, optional: true, required: false
  private _scaleUpAdjustment?: number; 
  public get scaleUpAdjustment() {
    return this.getNumberAttribute('scale_up_adjustment');
  }
  public set scaleUpAdjustment(value: number) {
    this._scaleUpAdjustment = value;
  }
  public resetScaleUpAdjustment() {
    this._scaleUpAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpAdjustmentInput() {
    return this._scaleUpAdjustment;
  }

  // scale_up_factor - computed: false, optional: true, required: false
  private _scaleUpFactor?: string; 
  public get scaleUpFactor() {
    return this.getStringAttribute('scale_up_factor');
  }
  public set scaleUpFactor(value: string) {
    this._scaleUpFactor = value;
  }
  public resetScaleUpFactor() {
    this._scaleUpFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpFactorInput() {
    return this._scaleUpFactor;
  }

  // scale_up_threshold - computed: false, optional: true, required: false
  private _scaleUpThreshold?: string; 
  public get scaleUpThreshold() {
    return this.getStringAttribute('scale_up_threshold');
  }
  public set scaleUpThreshold(value: string) {
    this._scaleUpThreshold = value;
  }
  public resetScaleUpThreshold() {
    this._scaleUpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpThresholdInput() {
    return this._scaleUpThreshold;
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

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsOutputReference {
    return new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef {
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#kind DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#name DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun {
  /**
  * Names is a list of GitHub Actions glob patterns. Any check_run event whose name matches one of patterns in the list can trigger autoscaling. Note that check_run name seem to equal to the job name you've defined in your actions workflow yaml file. So it is very likely that you can utilize this to trigger depending on the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#names DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#names}
  */
  readonly names?: string[];
  /**
  * Repositories is a list of GitHub repositories. Any check_run event whose repository matches one of repositories in the list can trigger autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#repositories DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#repositories}
  */
  readonly repositories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#status DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#status}
  */
  readonly status?: string;
  /**
  * One of: created, rerequested, or completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#types DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRunToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    status: cdktf.stringToTerraform(struct!.status),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRunToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._repositories = undefined;
      this._status = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._repositories = value.repositories;
      this._status = value.status;
      this._types = value.types;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories?: string[]; 
  public get repositories() {
    return this.getListAttribute('repositories');
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  public resetRepositories() {
    this._repositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#branches DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#branches}
  */
  readonly branches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#types DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequestToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.branches),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequestToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.branches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches = value.branches;
      this._types = value.types;
    }
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return this.getListAttribute('branches');
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent {
  /**
  * https://docs.github.com/en/actions/reference/events-that-trigger-workflows#check_run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#check_run DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#check_run}
  */
  readonly checkRun?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun;
  /**
  * https://docs.github.com/en/actions/reference/events-that-trigger-workflows#pull_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#pull_request DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#pull_request}
  */
  readonly pullRequest?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest;
  /**
  * PushSpec is the condition for triggering scale-up on push event Also see https://docs.github.com/en/actions/reference/events-that-trigger-workflows#push
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#push DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#push}
  */
  readonly push?: { [key: string]: string };
  /**
  * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#workflow_job DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#workflow_job}
  */
  readonly workflowJob?: { [key: string]: string };
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_run: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRunToTerraform(struct!.checkRun),
    pull_request: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequestToTerraform(struct!.pullRequest),
    push: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.push),
    workflow_job: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.workflowJob),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_run: {
      value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRunToHclTerraform(struct!.checkRun),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun",
    },
    pull_request: {
      value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest",
    },
    push: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.push),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    workflow_job: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.workflowJob),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkRun = this._checkRun?.internalValue;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push;
    }
    if (this._workflowJob !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowJob = this._workflowJob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkRun.internalValue = undefined;
      this._pullRequest.internalValue = undefined;
      this._push = undefined;
      this._workflowJob = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkRun.internalValue = value.checkRun;
      this._pullRequest.internalValue = value.pullRequest;
      this._push = value.push;
      this._workflowJob = value.workflowJob;
    }
  }

  // check_run - computed: false, optional: true, required: false
  private _checkRun = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRunOutputReference(this, "check_run");
  public get checkRun() {
    return this._checkRun;
  }
  public putCheckRun(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventCheckRun) {
    this._checkRun.internalValue = value;
  }
  public resetCheckRun() {
    this._checkRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRunInput() {
    return this._checkRun.internalValue;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push?: { [key: string]: string }; 
  public get push() {
    return this.getStringMapAttribute('push');
  }
  public set push(value: { [key: string]: string }) {
    this._push = value;
  }
  public resetPush() {
    this._push = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push;
  }

  // workflow_job - computed: false, optional: true, required: false
  private _workflowJob?: { [key: string]: string }; 
  public get workflowJob() {
    return this.getStringMapAttribute('workflow_job');
  }
  public set workflowJob(value: { [key: string]: string }) {
    this._workflowJob = value;
  }
  public resetWorkflowJob() {
    this._workflowJob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowJobInput() {
    return this._workflowJob;
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#amount DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#duration DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#github_event DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#github_event}
  */
  readonly githubEvent?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    duration: cdktf.stringToTerraform(struct!.duration),
    github_event: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventToTerraform(struct!.githubEvent),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_event: {
      value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventToHclTerraform(struct!.githubEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._githubEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEvent = this._githubEvent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._duration = undefined;
      this._githubEvent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._duration = value.duration;
      this._githubEvent.internalValue = value.githubEvent;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // github_event - computed: false, optional: true, required: false
  private _githubEvent = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEventOutputReference(this, "github_event");
  public get githubEvent() {
    return this._githubEvent;
  }
  public putGithubEvent(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersGithubEvent) {
    this._githubEvent.internalValue = value;
  }
  public resetGithubEvent() {
    this._githubEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEventInput() {
    return this._githubEvent.internalValue;
  }
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersOutputReference {
    return new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule {
  /**
  * Frequency is the name of a predefined interval of each recurrence. The valid values are 'Daily', 'Weekly', 'Monthly', and 'Yearly'. If empty, the corresponding override happens only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#frequency DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#frequency}
  */
  readonly frequency?: string;
  /**
  * UntilTime is the time of the final recurrence. If empty, the schedule recurs forever.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#until_time DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#until_time}
  */
  readonly untilTime?: string;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRuleToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    until_time: cdktf.stringToTerraform(struct!.untilTime),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRuleToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    until_time: {
      value: cdktf.stringToHclTerraform(struct!.untilTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._untilTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilTime = this._untilTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._untilTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._untilTime = value.untilTime;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // until_time - computed: false, optional: true, required: false
  private _untilTime?: string; 
  public get untilTime() {
    return this.getStringAttribute('until_time');
  }
  public set untilTime(value: string) {
    this._untilTime = value;
  }
  public resetUntilTime() {
    this._untilTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilTimeInput() {
    return this._untilTime;
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides {
  /**
  * EndTime is the time at which the first override ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#end_time DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#end_time}
  */
  readonly endTime: string;
  /**
  * MinReplicas is the number of runners while overriding. If omitted, it doesn't override minReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#min_replicas DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#recurrence_rule DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#recurrence_rule}
  */
  readonly recurrenceRule?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule;
  /**
  * StartTime is the time at which the first override starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#start_time DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#start_time}
  */
  readonly startTime: string;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    recurrence_rule: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRuleToTerraform(struct!.recurrenceRule),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurrence_rule: {
      value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRuleToHclTerraform(struct!.recurrenceRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._recurrenceRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRule = this._recurrenceRule?.internalValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._minReplicas = undefined;
      this._recurrenceRule.internalValue = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._minReplicas = value.minReplicas;
      this._recurrenceRule.internalValue = value.recurrenceRule;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // recurrence_rule - computed: false, optional: true, required: false
  private _recurrenceRule = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRuleOutputReference(this, "recurrence_rule");
  public get recurrenceRule() {
    return this._recurrenceRule;
  }
  public putRecurrenceRule(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesRecurrenceRule) {
    this._recurrenceRule.internalValue = value;
  }
  public resetRecurrenceRule() {
    this._recurrenceRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRuleInput() {
    return this._recurrenceRule.internalValue;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesOutputReference {
    return new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#capacity_reservations DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#capacity_reservations}
  */
  readonly capacityReservations?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#github_api_credentials_from DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#github_api_credentials_from}
  */
  readonly githubApiCredentialsFrom?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom;
  /**
  * MaxReplicas is the maximum number of replicas the deployment is allowed to scale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#max_replicas DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Metrics is the collection of various metric targets to calculate desired number of runners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#metrics DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable;
  /**
  * MinReplicas is the minimum number of replicas the deployment is allowed to scale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#min_replicas DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * ScaleDownDelaySecondsAfterScaleUp is the approximate delay for a scale down followed by a scale up Used to prevent flapping (down->up->down->... loop)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_down_delay_seconds_after_scale_out DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_down_delay_seconds_after_scale_out}
  */
  readonly scaleDownDelaySecondsAfterScaleOut?: number;
  /**
  * ScaleTargetRef is the reference to scaled resource like RunnerDeployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_target_ref DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_target_ref}
  */
  readonly scaleTargetRef?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef;
  /**
  * ScaleUpTriggers is an experimental feature to increase the desired replicas by 1 on each webhook requested received by the webhookBasedAutoscaler. This feature requires you to also enable and deploy the webhookBasedAutoscaler onto your cluster. Note that the added runners remain until the next sync period at least, and they may or may not be used by GitHub Actions depending on the timing. They are intended to be used to gain 'resource slack' immediately after you receive a webhook from GitHub, so that you can loosely expect MinReplicas runners to be always available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scale_up_triggers DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scale_up_triggers}
  */
  readonly scaleUpTriggers?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers[] | cdktf.IResolvable;
  /**
  * ScheduledOverrides is the list of ScheduledOverride. It can be used to override a few fields of HorizontalRunnerAutoscalerSpec on schedule. The earlier a scheduled override is, the higher it is prioritized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#scheduled_overrides DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest#scheduled_overrides}
  */
  readonly scheduledOverrides?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides[] | cdktf.IResolvable;
}

export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_reservations: cdktf.listMapper(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsToTerraform, false)(struct!.capacityReservations),
    github_api_credentials_from: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromToTerraform(struct!.githubApiCredentialsFrom),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    scale_down_delay_seconds_after_scale_out: cdktf.numberToTerraform(struct!.scaleDownDelaySecondsAfterScaleOut),
    scale_target_ref: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
    scale_up_triggers: cdktf.listMapper(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersToTerraform, false)(struct!.scaleUpTriggers),
    scheduled_overrides: cdktf.listMapper(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesToTerraform, false)(struct!.scheduledOverrides),
  }
}


export function dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_reservations: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsToHclTerraform, false)(struct!.capacityReservations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsList",
    },
    github_api_credentials_from: {
      value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromToHclTerraform(struct!.githubApiCredentialsFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_down_delay_seconds_after_scale_out: {
      value: cdktf.numberToHclTerraform(struct!.scaleDownDelaySecondsAfterScaleOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_target_ref: {
      value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct!.scaleTargetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef",
    },
    scale_up_triggers: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersToHclTerraform, false)(struct!.scaleUpTriggers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersList",
    },
    scheduled_overrides: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesToHclTerraform, false)(struct!.scheduledOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservations = this._capacityReservations?.internalValue;
    }
    if (this._githubApiCredentialsFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubApiCredentialsFrom = this._githubApiCredentialsFrom?.internalValue;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._scaleDownDelaySecondsAfterScaleOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelaySecondsAfterScaleOut = this._scaleDownDelaySecondsAfterScaleOut;
    }
    if (this._scaleTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetRef = this._scaleTargetRef?.internalValue;
    }
    if (this._scaleUpTriggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpTriggers = this._scaleUpTriggers?.internalValue;
    }
    if (this._scheduledOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledOverrides = this._scheduledOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservations.internalValue = undefined;
      this._githubApiCredentialsFrom.internalValue = undefined;
      this._maxReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._minReplicas = undefined;
      this._scaleDownDelaySecondsAfterScaleOut = undefined;
      this._scaleTargetRef.internalValue = undefined;
      this._scaleUpTriggers.internalValue = undefined;
      this._scheduledOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservations.internalValue = value.capacityReservations;
      this._githubApiCredentialsFrom.internalValue = value.githubApiCredentialsFrom;
      this._maxReplicas = value.maxReplicas;
      this._metrics.internalValue = value.metrics;
      this._minReplicas = value.minReplicas;
      this._scaleDownDelaySecondsAfterScaleOut = value.scaleDownDelaySecondsAfterScaleOut;
      this._scaleTargetRef.internalValue = value.scaleTargetRef;
      this._scaleUpTriggers.internalValue = value.scaleUpTriggers;
      this._scheduledOverrides.internalValue = value.scheduledOverrides;
    }
  }

  // capacity_reservations - computed: false, optional: true, required: false
  private _capacityReservations = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservationsList(this, "capacity_reservations", false);
  public get capacityReservations() {
    return this._capacityReservations;
  }
  public putCapacityReservations(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecCapacityReservations[] | cdktf.IResolvable) {
    this._capacityReservations.internalValue = value;
  }
  public resetCapacityReservations() {
    this._capacityReservations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationsInput() {
    return this._capacityReservations.internalValue;
  }

  // github_api_credentials_from - computed: false, optional: true, required: false
  private _githubApiCredentialsFrom = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFromOutputReference(this, "github_api_credentials_from");
  public get githubApiCredentialsFrom() {
    return this._githubApiCredentialsFrom;
  }
  public putGithubApiCredentialsFrom(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecGithubApiCredentialsFrom) {
    this._githubApiCredentialsFrom.internalValue = value;
  }
  public resetGithubApiCredentialsFrom() {
    this._githubApiCredentialsFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubApiCredentialsFromInput() {
    return this._githubApiCredentialsFrom.internalValue;
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // scale_down_delay_seconds_after_scale_out - computed: false, optional: true, required: false
  private _scaleDownDelaySecondsAfterScaleOut?: number; 
  public get scaleDownDelaySecondsAfterScaleOut() {
    return this.getNumberAttribute('scale_down_delay_seconds_after_scale_out');
  }
  public set scaleDownDelaySecondsAfterScaleOut(value: number) {
    this._scaleDownDelaySecondsAfterScaleOut = value;
  }
  public resetScaleDownDelaySecondsAfterScaleOut() {
    this._scaleDownDelaySecondsAfterScaleOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelaySecondsAfterScaleOutInput() {
    return this._scaleDownDelaySecondsAfterScaleOut;
  }

  // scale_target_ref - computed: false, optional: true, required: false
  private _scaleTargetRef = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRefOutputReference(this, "scale_target_ref");
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  public resetScaleTargetRef() {
    this._scaleTargetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }

  // scale_up_triggers - computed: false, optional: true, required: false
  private _scaleUpTriggers = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggersList(this, "scale_up_triggers", false);
  public get scaleUpTriggers() {
    return this._scaleUpTriggers;
  }
  public putScaleUpTriggers(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScaleUpTriggers[] | cdktf.IResolvable) {
    this._scaleUpTriggers.internalValue = value;
  }
  public resetScaleUpTriggers() {
    this._scaleUpTriggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpTriggersInput() {
    return this._scaleUpTriggers.internalValue;
  }

  // scheduled_overrides - computed: false, optional: true, required: false
  private _scheduledOverrides = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverridesList(this, "scheduled_overrides", false);
  public get scheduledOverrides() {
    return this._scheduledOverrides;
  }
  public putScheduledOverrides(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecScheduledOverrides[] | cdktf.IResolvable) {
    this._scheduledOverrides.internalValue = value;
  }
  public resetScheduledOverrides() {
    this._scheduledOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledOverridesInput() {
    return this._scheduledOverrides.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest k8s_actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest}
*/
export class DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest k8s_actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_actions_summerwind_dev_horizontal_runner_autoscaler_v1alpha1_manifest',
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
  private _metadata = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SActionsSummerwindDevHorizontalRunnerAutoscalerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
