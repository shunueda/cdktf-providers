// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#metadata DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata;
  /**
  * MachinePoolSpec defines the desired state of MachinePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#spec DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec;
}
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#annotations DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#labels DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#namespace DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate {
  /**
  * The maximum number of machines that can be scheduled above the desired number of machines. Value can be an absolute number (ex: 5) or a percentage of desired machines (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 1. Example: when this is set to 30%, the new MachineSet can be scaled up immediately when the rolling update starts, such that the total number of old and new machines do not exceed 130% of desired machines. Once old machines have been killed, new MachineSet can be scaled up further, ensuring that total number of machines running at any time during the update is at most 130% of desired machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#max_surge DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of machines that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired machines (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 0. Example: when this is set to 30%, the old MachineSet can be scaled down to 70% of desired machines immediately when the rolling update starts. Once new machines are ready, old MachineSet can be scaled down further, followed by scaling up the new MachineSet, ensuring that the total number of machines available at all times during the update is at least 70% of desired machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#max_unavailable DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdateToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdateToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy {
  /**
  * Rolling update config params. Present only if MachineDeploymentStrategyType = RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#rolling_update DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate;
  /**
  * Type of deployment. Currently the only supported strategy is 'RollingUpdate'. Default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#type DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate",
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

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
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
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#api_version DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * If true, AND if the owner has the 'foregroundDeletion' finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs 'delete' permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#block_owner_deletion DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#block_owner_deletion}
  */
  readonly blockOwnerDeletion?: boolean | cdktf.IResolvable;
  /**
  * If true, this reference points to the managing controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#controller DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#controller}
  */
  readonly controller?: boolean | cdktf.IResolvable;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#kind DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#uid DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    block_owner_deletion: cdktf.booleanToTerraform(struct!.blockOwnerDeletion),
    controller: cdktf.booleanToTerraform(struct!.controller),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable): any {
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
    block_owner_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.blockOwnerDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    controller: {
      value: cdktf.booleanToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._blockOwnerDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockOwnerDeletion = this._blockOwnerDeletion;
    }
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._blockOwnerDeletion = undefined;
      this._controller = undefined;
      this._kind = undefined;
      this._name = undefined;
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
      this._blockOwnerDeletion = value.blockOwnerDeletion;
      this._controller = value.controller;
      this._kind = value.kind;
      this._name = value.name;
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

  // block_owner_deletion - computed: false, optional: true, required: false
  private _blockOwnerDeletion?: boolean | cdktf.IResolvable; 
  public get blockOwnerDeletion() {
    return this.getBooleanAttribute('block_owner_deletion');
  }
  public set blockOwnerDeletion(value: boolean | cdktf.IResolvable) {
    this._blockOwnerDeletion = value;
  }
  public resetBlockOwnerDeletion() {
    this._blockOwnerDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOwnerDeletionInput() {
    return this._blockOwnerDeletion;
  }

  // controller - computed: false, optional: true, required: false
  private _controller?: boolean | cdktf.IResolvable; 
  public get controller() {
    return this.getBooleanAttribute('controller');
  }
  public set controller(value: boolean | cdktf.IResolvable) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
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

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesOutputReference {
    return new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#annotations DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server. If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header). Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#generate_name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#labels DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the 'default' namespace, but 'default' is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#namespace DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#owner_references DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#owner_references}
  */
  readonly ownerReferences?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    owner_references: cdktf.listMapper(dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToTerraform, false)(struct!.ownerReferences),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
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
    generate_name: {
      value: cdktf.stringToHclTerraform(struct!.generateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    owner_references: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToHclTerraform, false)(struct!.ownerReferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
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
    if (this._ownerReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerReferences = this._ownerReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._ownerReferences.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
      this._ownerReferences.internalValue = value.ownerReferences;
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

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
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

  // owner_references - computed: false, optional: true, required: false
  private _ownerReferences = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesList(this, "owner_references", false);
  public get ownerReferences() {
    return this._ownerReferences;
  }
  public putOwnerReferences(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOwnerReferences[] | cdktf.IResolvable) {
    this._ownerReferences.internalValue = value;
  }
  public resetOwnerReferences() {
    this._ownerReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferencesInput() {
    return this._ownerReferences.internalValue;
  }
}
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#api_version DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#field_path DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#kind DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#namespace DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#resource_version DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#uid DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRefToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRefToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap {
  /**
  * ConfigRef is a reference to a bootstrap provider-specific resource that holds configuration details. The reference is optional to allow users/operators to specify Bootstrap.Data without the need of a controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#config_ref DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#config_ref}
  */
  readonly configRef?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef;
  /**
  * Data contains the bootstrap data, such as cloud-init details scripts. If nil, the Machine should remain in the Pending state. Deprecated: Switch to DataSecretName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#data DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#data}
  */
  readonly data?: string;
  /**
  * DataSecretName is the name of the secret that stores the bootstrap data script. If nil, the Machine should remain in the Pending state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#data_secret_name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#data_secret_name}
  */
  readonly dataSecretName?: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_ref: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRefToTerraform(struct!.configRef),
    data: cdktf.stringToTerraform(struct!.data),
    data_secret_name: cdktf.stringToTerraform(struct!.dataSecretName),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_ref: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRefToHclTerraform(struct!.configRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRef = this._configRef?.internalValue;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecretName = this._dataSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configRef.internalValue = undefined;
      this._data = undefined;
      this._dataSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configRef.internalValue = value.configRef;
      this._data = value.data;
      this._dataSecretName = value.dataSecretName;
    }
  }

  // config_ref - computed: false, optional: true, required: false
  private _configRef = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRefOutputReference(this, "config_ref");
  public get configRef() {
    return this._configRef;
  }
  public putConfigRef(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapConfigRef) {
    this._configRef.internalValue = value;
  }
  public resetConfigRef() {
    this._configRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRefInput() {
    return this._configRef.internalValue;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_secret_name - computed: false, optional: true, required: false
  private _dataSecretName?: string; 
  public get dataSecretName() {
    return this.getStringAttribute('data_secret_name');
  }
  public set dataSecretName(value: string) {
    this._dataSecretName = value;
  }
  public resetDataSecretName() {
    this._dataSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecretNameInput() {
    return this._dataSecretName;
  }
}
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#api_version DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#field_path DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#kind DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#namespace DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#resource_version DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#uid DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec {
  /**
  * Bootstrap is a reference to a local struct which encapsulates fields to configure the Machine’s bootstrapping mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#bootstrap DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#bootstrap}
  */
  readonly bootstrap: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap;
  /**
  * ClusterName is the name of the Cluster this object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#cluster_name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * FailureDomain is the failure domain the machine will be created in. Must match a key in the FailureDomains map stored on the cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#failure_domain DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * InfrastructureRef is a required reference to a custom resource offered by an infrastructure provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#infrastructure_ref DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#infrastructure_ref}
  */
  readonly infrastructureRef: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#node_drain_timeout DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * ProviderID is the identification ID of the machine provided by the provider. This field must match the provider ID as seen on the node object corresponding to this machine. This field is required by higher level consumers of cluster-api. Example use case is cluster autoscaler with cluster-api as provider. Clean-up logic in the autoscaler compares machines to nodes to find out machines at provider which could not get registered as Kubernetes nodes. With cluster-api as a generic out-of-tree provider for autoscaler, this field is required by autoscaler to be able to have a provider view of the list of machines. Another list of nodes is queried from the k8s apiserver and then a comparison is done to find out unregistered machines and are marked for delete. This field will be set by the actuators and consumed by higher level entities like autoscaler that will be interfacing with cluster-api as generic provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#provider_id DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * Version defines the desired Kubernetes version. This field is meant to be optionally used by bootstrap providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#version DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapToTerraform(struct!.bootstrap),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    infrastructure_ref: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRefToTerraform(struct!.infrastructureRef),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapToHclTerraform(struct!.bootstrap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_ref: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRefToHclTerraform(struct!.infrastructureRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef",
    },
    node_drain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
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

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrap = this._bootstrap?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._infrastructureRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRef = this._infrastructureRef?.internalValue;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrap.internalValue = undefined;
      this._clusterName = undefined;
      this._failureDomain = undefined;
      this._infrastructureRef.internalValue = undefined;
      this._nodeDrainTimeout = undefined;
      this._providerId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrap.internalValue = value.bootstrap;
      this._clusterName = value.clusterName;
      this._failureDomain = value.failureDomain;
      this._infrastructureRef.internalValue = value.infrastructureRef;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._providerId = value.providerId;
      this._version = value.version;
    }
  }

  // bootstrap - computed: false, optional: false, required: true
  private _bootstrap = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrapOutputReference(this, "bootstrap");
  public get bootstrap() {
    return this._bootstrap;
  }
  public putBootstrap(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecBootstrap) {
    this._bootstrap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap.internalValue;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // infrastructure_ref - computed: false, optional: false, required: true
  private _infrastructureRef = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRefOutputReference(this, "infrastructure_ref");
  public get infrastructureRef() {
    return this._infrastructureRef;
  }
  public putInfrastructureRef(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecInfrastructureRef) {
    this._infrastructureRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRefInput() {
    return this._infrastructureRef.internalValue;
  }

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: string; 
  public get nodeDrainTimeout() {
    return this.getStringAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: string) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
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
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate {
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#metadata DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata;
  /**
  * Specification of the desired behavior of the machine. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#spec DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec {
  /**
  * ClusterName is the name of the Cluster this object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#cluster_name DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * FailureDomains is the list of failure domains this MachinePool should be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#failure_domains DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#failure_domains}
  */
  readonly failureDomains?: string[];
  /**
  * Minimum number of seconds for which a newly created machine instances should be ready. Defaults to 0 (machine instance will be considered available as soon as it is ready)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#min_ready_seconds DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * ProviderIDList are the identification IDs of machine instances provided by the provider. This field must match the provider IDs as seen on the node objects corresponding to a machine pool's machine instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#provider_id_list DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#provider_id_list}
  */
  readonly providerIdList?: string[];
  /**
  * Number of desired machines. Defaults to 1. This is a pointer to distinguish between explicit zero and not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#replicas DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * The deployment strategy to use to replace existing machine instances with new ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#strategy DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#strategy}
  */
  readonly strategy?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy;
  /**
  * Template describes the machines that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#template DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest#template}
  */
  readonly template: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate;
}

export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecToTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    failure_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failureDomains),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    provider_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.providerIdList),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    strategy: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyToTerraform(struct!.strategy),
    template: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failureDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.providerIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy",
    },
    template: {
      value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._failureDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomains = this._failureDomains;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._providerIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerIdList = this._providerIdList;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._failureDomains = undefined;
      this._minReadySeconds = undefined;
      this._providerIdList = undefined;
      this._replicas = undefined;
      this._strategy.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._failureDomains = value.failureDomains;
      this._minReadySeconds = value.minReadySeconds;
      this._providerIdList = value.providerIdList;
      this._replicas = value.replicas;
      this._strategy.internalValue = value.strategy;
      this._template.internalValue = value.template;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // failure_domains - computed: false, optional: true, required: false
  private _failureDomains?: string[]; 
  public get failureDomains() {
    return this.getListAttribute('failure_domains');
  }
  public set failureDomains(value: string[]) {
    this._failureDomains = value;
  }
  public resetFailureDomains() {
    this._failureDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainsInput() {
    return this._failureDomains;
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // provider_id_list - computed: false, optional: true, required: false
  private _providerIdList?: string[]; 
  public get providerIdList() {
    return this.getListAttribute('provider_id_list');
  }
  public set providerIdList(value: string[]) {
    this._providerIdList = value;
  }
  public resetProviderIdList() {
    this._providerIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdListInput() {
    return this._providerIdList;
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

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest k8s_cluster_x_k8s_io_machine_pool_v1alpha3_manifest}
*/
export class DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_x_k8s_io_machine_pool_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterXK8SIoMachinePoolV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_x_k8s_io_machine_pool_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_x_k8s_io_machine_pool_v1alpha3_manifest k8s_cluster_x_k8s_io_machine_pool_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_x_k8s_io_machine_pool_v1alpha3_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec) {
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
      metadata: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoMachinePoolV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
