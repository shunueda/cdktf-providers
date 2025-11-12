// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#metadata DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#spec DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec;
}
export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration {
  /**
  * Whether or not to automatically migrate unschedulable pods to a different cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#enabled DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigrationToTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigrationToHclTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable | undefined) {
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition {
  /**
  * Path to a numeric field that reflects the number of available replicas that the object currently has. E.g. 'status.availableReplicas' for Deployment and ReplicaSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#available_replicas_status DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#available_replicas_status}
  */
  readonly availableReplicasStatus?: string;
  /**
  * Path to a metav1.LabelSelector field that selects the replicas for this object. E.g. 'spec.selector' for Deployment and ReplicaSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#label_selector DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Path to a numeric field that reflects the number of ready replicas that the object currently has. E.g. 'status.readyReplicas' for Deployment and ReplicaSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#ready_replicas_status DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#ready_replicas_status}
  */
  readonly readyReplicasStatus?: string;
  /**
  * Path to a numeric field that indicates the number of replicas that an object can be divided into. E.g. 'spec.replicas' for Deployment and ReplicaSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#replicas_spec DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#replicas_spec}
  */
  readonly replicasSpec?: string;
  /**
  * Path to a numeric field that reflects the number of replicas that the object currently has. E.g. 'status.replicas' for Deployment and ReplicaSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#replicas_status DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#replicas_status}
  */
  readonly replicasStatus?: string;
}

export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinitionToTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available_replicas_status: cdktf.stringToTerraform(struct!.availableReplicasStatus),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    ready_replicas_status: cdktf.stringToTerraform(struct!.readyReplicasStatus),
    replicas_spec: cdktf.stringToTerraform(struct!.replicasSpec),
    replicas_status: cdktf.stringToTerraform(struct!.replicasStatus),
  }
}


export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinitionToHclTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available_replicas_status: {
      value: cdktf.stringToHclTerraform(struct!.availableReplicasStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready_replicas_status: {
      value: cdktf.stringToHclTerraform(struct!.readyReplicasStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas_spec: {
      value: cdktf.stringToHclTerraform(struct!.replicasSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas_status: {
      value: cdktf.stringToHclTerraform(struct!.replicasStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availableReplicasStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableReplicasStatus = this._availableReplicasStatus;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._readyReplicasStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.readyReplicasStatus = this._readyReplicasStatus;
    }
    if (this._replicasSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasSpec = this._replicasSpec;
    }
    if (this._replicasStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasStatus = this._replicasStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availableReplicasStatus = undefined;
      this._labelSelector = undefined;
      this._readyReplicasStatus = undefined;
      this._replicasSpec = undefined;
      this._replicasStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availableReplicasStatus = value.availableReplicasStatus;
      this._labelSelector = value.labelSelector;
      this._readyReplicasStatus = value.readyReplicasStatus;
      this._replicasSpec = value.replicasSpec;
      this._replicasStatus = value.replicasStatus;
    }
  }

  // available_replicas_status - computed: false, optional: true, required: false
  private _availableReplicasStatus?: string; 
  public get availableReplicasStatus() {
    return this.getStringAttribute('available_replicas_status');
  }
  public set availableReplicasStatus(value: string) {
    this._availableReplicasStatus = value;
  }
  public resetAvailableReplicasStatus() {
    this._availableReplicasStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableReplicasStatusInput() {
    return this._availableReplicasStatus;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // ready_replicas_status - computed: false, optional: true, required: false
  private _readyReplicasStatus?: string; 
  public get readyReplicasStatus() {
    return this.getStringAttribute('ready_replicas_status');
  }
  public set readyReplicasStatus(value: string) {
    this._readyReplicasStatus = value;
  }
  public resetReadyReplicasStatus() {
    this._readyReplicasStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyReplicasStatusInput() {
    return this._readyReplicasStatus;
  }

  // replicas_spec - computed: false, optional: true, required: false
  private _replicasSpec?: string; 
  public get replicasSpec() {
    return this.getStringAttribute('replicas_spec');
  }
  public set replicasSpec(value: string) {
    this._replicasSpec = value;
  }
  public resetReplicasSpec() {
    this._replicasSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasSpecInput() {
    return this._replicasSpec;
  }

  // replicas_status - computed: false, optional: true, required: false
  private _replicasStatus?: string; 
  public get replicasStatus() {
    return this.getStringAttribute('replicas_status');
  }
  public set replicasStatus(value: string) {
    this._replicasStatus = value;
  }
  public resetReplicasStatus() {
    this._replicasStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasStatusInput() {
    return this._replicasStatus;
  }
}
export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType {
  /**
  * Group of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#group DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#kind DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Lower-cased plural name of the resource (e.g. configmaps). If not provided, it will be computed by lower-casing the kind and suffixing an 's'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#plural_name DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#plural_name}
  */
  readonly pluralName: string;
  /**
  * Scope of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#scope DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#scope}
  */
  readonly scope: string;
  /**
  * Version of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#version DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceTypeToTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    plural_name: cdktf.stringToTerraform(struct!.pluralName),
    scope: cdktf.stringToTerraform(struct!.scope),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceTypeToHclTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    plural_name: {
      value: cdktf.stringToHclTerraform(struct!.pluralName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._pluralName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluralName = this._pluralName;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._pluralName = undefined;
      this._scope = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._pluralName = value.pluralName;
      this._scope = value.scope;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // plural_name - computed: false, optional: false, required: true
  private _pluralName?: string; 
  public get pluralName() {
    return this.getStringAttribute('plural_name');
  }
  public set pluralName(value: string) {
    this._pluralName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluralNameInput() {
    return this._pluralName;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation {
  /**
  * Whether or not to enable status aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#enabled DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregationToTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregationToHclTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation | cdktf.IResolvable | undefined) {
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection {
  /**
  * Whether or not to enable status collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#enabled DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Contains the fields to be collected during status collection. Each field is a dot separated string that corresponds to its path in the source object's schema. E.g. 'metadata.creationTimestamp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#fields DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#fields}
  */
  readonly fields?: string[];
}

export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollectionToTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollectionToHclTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection | cdktf.IResolvable): any {
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
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._fields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._fields = value.fields;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}
export interface DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec {
  /**
  * Configuration for AutoMigration. If left empty, the AutoMigration feature will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#auto_migration DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#auto_migration}
  */
  readonly autoMigration?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration;
  /**
  * The controllers that must run before the source object can be propagated to member clusters. Each inner slice specifies a step. Step T must complete before step T+1 can commence. Controllers within each step can execute in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#controllers DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#controllers}
  */
  readonly controllers?: string[];
  /**
  * Defines the paths to various fields in the target object's schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#path_definition DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#path_definition}
  */
  readonly pathDefinition?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition;
  /**
  * The API resource type to be federated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#source_type DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#source_type}
  */
  readonly sourceType: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType;
  /**
  * Configuration for StatusAggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#status_aggregation DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#status_aggregation}
  */
  readonly statusAggregation?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation;
  /**
  * Configuration for StatusCollection. If left empty, the StatusCollection feature will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#status_collection DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest#status_collection}
  */
  readonly statusCollection?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection;
}

export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_migration: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigrationToTerraform(struct!.autoMigration),
    controllers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.controllers),
    path_definition: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinitionToTerraform(struct!.pathDefinition),
    source_type: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceTypeToTerraform(struct!.sourceType),
    status_aggregation: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregationToTerraform(struct!.statusAggregation),
    status_collection: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollectionToTerraform(struct!.statusCollection),
  }
}


export function dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_migration: {
      value: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigrationToHclTerraform(struct!.autoMigration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration",
    },
    controllers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.controllers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_definition: {
      value: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinitionToHclTerraform(struct!.pathDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition",
    },
    source_type: {
      value: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceTypeToHclTerraform(struct!.sourceType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType",
    },
    status_aggregation: {
      value: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregationToHclTerraform(struct!.statusAggregation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation",
    },
    status_collection: {
      value: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollectionToHclTerraform(struct!.statusCollection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMigration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMigration = this._autoMigration?.internalValue;
    }
    if (this._controllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllers = this._controllers;
    }
    if (this._pathDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathDefinition = this._pathDefinition?.internalValue;
    }
    if (this._sourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType?.internalValue;
    }
    if (this._statusAggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusAggregation = this._statusAggregation?.internalValue;
    }
    if (this._statusCollection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCollection = this._statusCollection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoMigration.internalValue = undefined;
      this._controllers = undefined;
      this._pathDefinition.internalValue = undefined;
      this._sourceType.internalValue = undefined;
      this._statusAggregation.internalValue = undefined;
      this._statusCollection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoMigration.internalValue = value.autoMigration;
      this._controllers = value.controllers;
      this._pathDefinition.internalValue = value.pathDefinition;
      this._sourceType.internalValue = value.sourceType;
      this._statusAggregation.internalValue = value.statusAggregation;
      this._statusCollection.internalValue = value.statusCollection;
    }
  }

  // auto_migration - computed: false, optional: true, required: false
  private _autoMigration = new DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigrationOutputReference(this, "auto_migration");
  public get autoMigration() {
    return this._autoMigration;
  }
  public putAutoMigration(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecAutoMigration) {
    this._autoMigration.internalValue = value;
  }
  public resetAutoMigration() {
    this._autoMigration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMigrationInput() {
    return this._autoMigration.internalValue;
  }

  // controllers - computed: false, optional: true, required: false
  private _controllers?: string[]; 
  public get controllers() {
    return this.getListAttribute('controllers');
  }
  public set controllers(value: string[]) {
    this._controllers = value;
  }
  public resetControllers() {
    this._controllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllersInput() {
    return this._controllers;
  }

  // path_definition - computed: false, optional: true, required: false
  private _pathDefinition = new DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinitionOutputReference(this, "path_definition");
  public get pathDefinition() {
    return this._pathDefinition;
  }
  public putPathDefinition(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecPathDefinition) {
    this._pathDefinition.internalValue = value;
  }
  public resetPathDefinition() {
    this._pathDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathDefinitionInput() {
    return this._pathDefinition.internalValue;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType = new DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceTypeOutputReference(this, "source_type");
  public get sourceType() {
    return this._sourceType;
  }
  public putSourceType(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecSourceType) {
    this._sourceType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType.internalValue;
  }

  // status_aggregation - computed: false, optional: true, required: false
  private _statusAggregation = new DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregationOutputReference(this, "status_aggregation");
  public get statusAggregation() {
    return this._statusAggregation;
  }
  public putStatusAggregation(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusAggregation) {
    this._statusAggregation.internalValue = value;
  }
  public resetStatusAggregation() {
    this._statusAggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusAggregationInput() {
    return this._statusAggregation.internalValue;
  }

  // status_collection - computed: false, optional: true, required: false
  private _statusCollection = new DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollectionOutputReference(this, "status_collection");
  public get statusCollection() {
    return this._statusCollection;
  }
  public putStatusCollection(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecStatusCollection) {
    this._statusCollection.internalValue = value;
  }
  public resetStatusCollection() {
    this._statusCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCollectionInput() {
    return this._statusCollection.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest k8s_core_kubeadmiral_io_federated_type_config_v1alpha1_manifest}
*/
export class DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_kubeadmiral_io_federated_type_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_kubeadmiral_io_federated_type_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_federated_type_config_v1alpha1_manifest k8s_core_kubeadmiral_io_federated_type_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_kubeadmiral_io_federated_type_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoFederatedTypeConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
