// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata;
  /**
  * ActionSetSpec defines the desired state of ActionSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#spec DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec;
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress {
  /**
  * Determines if the backup progress should be synchronized. If set to true, a sidecar container will be instantiated to synchronize the backup progress with the Backup Custom Resource (CR) status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#enabled DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defines the interval in seconds for synchronizing the backup progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#interval_seconds DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#interval_seconds}
  */
  readonly intervalSeconds?: number;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgressToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgressToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress | cdktf.IResolvable): any {
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
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._intervalSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._intervalSeconds = value.intervalSeconds;
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

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData {
  /**
  * Defines the commands to back up the volume data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the image of the backup container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#image DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Determines whether to run the job workload on the target pod node. If the backup container needs to mount the target pod's volumes, this field should be set to true. Otherwise, the target pod's volumes will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#run_on_target_pod_node DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#run_on_target_pod_node}
  */
  readonly runOnTargetPodNode?: boolean | cdktf.IResolvable;
  /**
  * Determines if the backup progress should be synchronized and the interval for synchronization in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#sync_progress DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#sync_progress}
  */
  readonly syncProgress?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    on_error: cdktf.stringToTerraform(struct!.onError),
    run_on_target_pod_node: cdktf.booleanToTerraform(struct!.runOnTargetPodNode),
    sync_progress: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgressToTerraform(struct!.syncProgress),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_on_target_pod_node: {
      value: cdktf.booleanToHclTerraform(struct!.runOnTargetPodNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_progress: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgressToHclTerraform(struct!.syncProgress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._runOnTargetPodNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnTargetPodNode = this._runOnTargetPodNode;
    }
    if (this._syncProgress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncProgress = this._syncProgress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
      this._onError = undefined;
      this._runOnTargetPodNode = undefined;
      this._syncProgress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
      this._onError = value.onError;
      this._runOnTargetPodNode = value.runOnTargetPodNode;
      this._syncProgress.internalValue = value.syncProgress;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // run_on_target_pod_node - computed: false, optional: true, required: false
  private _runOnTargetPodNode?: boolean | cdktf.IResolvable; 
  public get runOnTargetPodNode() {
    return this.getBooleanAttribute('run_on_target_pod_node');
  }
  public set runOnTargetPodNode(value: boolean | cdktf.IResolvable) {
    this._runOnTargetPodNode = value;
  }
  public resetRunOnTargetPodNode() {
    this._runOnTargetPodNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnTargetPodNodeInput() {
    return this._runOnTargetPodNode;
  }

  // sync_progress - computed: false, optional: true, required: false
  private _syncProgress = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgressOutputReference(this, "sync_progress");
  public get syncProgress() {
    return this._syncProgress;
  }
  public putSyncProgress(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataSyncProgress) {
    this._syncProgress.internalValue = value;
  }
  public resetSyncProgress() {
    this._syncProgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncProgressInput() {
    return this._syncProgress.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec {
  /**
  * Defines the command and arguments to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the container within the pod where the command should be executed. If not specified, the first container in the pod is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#container DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#container}
  */
  readonly container?: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Specifies the maximum duration to wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#timeout DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    on_error: cdktf.stringToTerraform(struct!.onError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._container = undefined;
      this._onError = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._container = value.container;
      this._onError = value.onError;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob {
  /**
  * Defines the commands to back up the volume data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the image of the backup container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#image DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Determines whether to run the job workload on the target pod node. If the backup container needs to mount the target pod's volumes, this field should be set to true. Otherwise, the target pod's volumes will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#run_on_target_pod_node DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#run_on_target_pod_node}
  */
  readonly runOnTargetPodNode?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJobToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    on_error: cdktf.stringToTerraform(struct!.onError),
    run_on_target_pod_node: cdktf.booleanToTerraform(struct!.runOnTargetPodNode),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJobToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_on_target_pod_node: {
      value: cdktf.booleanToHclTerraform(struct!.runOnTargetPodNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._runOnTargetPodNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnTargetPodNode = this._runOnTargetPodNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
      this._onError = undefined;
      this._runOnTargetPodNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
      this._onError = value.onError;
      this._runOnTargetPodNode = value.runOnTargetPodNode;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // run_on_target_pod_node - computed: false, optional: true, required: false
  private _runOnTargetPodNode?: boolean | cdktf.IResolvable; 
  public get runOnTargetPodNode() {
    return this.getBooleanAttribute('run_on_target_pod_node');
  }
  public set runOnTargetPodNode(value: boolean | cdktf.IResolvable) {
    this._runOnTargetPodNode = value;
  }
  public resetRunOnTargetPodNode() {
    this._runOnTargetPodNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnTargetPodNodeInput() {
    return this._runOnTargetPodNode;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup {
  /**
  * Specifies that the action should be executed using the pod's exec API within a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#exec DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec;
  /**
  * Specifies that the action should be executed by a Kubernetes Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#job DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#job}
  */
  readonly job?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExecToTerraform(struct!.exec),
    job: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJobToTerraform(struct!.job),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec",
    },
    job: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._job.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._job.internalValue = value.job;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupOutputReference {
    return new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec {
  /**
  * Defines the command and arguments to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the container within the pod where the command should be executed. If not specified, the first container in the pod is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#container DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#container}
  */
  readonly container?: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Specifies the maximum duration to wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#timeout DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    on_error: cdktf.stringToTerraform(struct!.onError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._container = undefined;
      this._onError = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._container = value.container;
      this._onError = value.onError;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob {
  /**
  * Defines the commands to back up the volume data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the image of the backup container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#image DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Determines whether to run the job workload on the target pod node. If the backup container needs to mount the target pod's volumes, this field should be set to true. Otherwise, the target pod's volumes will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#run_on_target_pod_node DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#run_on_target_pod_node}
  */
  readonly runOnTargetPodNode?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJobToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    on_error: cdktf.stringToTerraform(struct!.onError),
    run_on_target_pod_node: cdktf.booleanToTerraform(struct!.runOnTargetPodNode),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJobToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_on_target_pod_node: {
      value: cdktf.booleanToHclTerraform(struct!.runOnTargetPodNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._runOnTargetPodNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnTargetPodNode = this._runOnTargetPodNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
      this._onError = undefined;
      this._runOnTargetPodNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
      this._onError = value.onError;
      this._runOnTargetPodNode = value.runOnTargetPodNode;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // run_on_target_pod_node - computed: false, optional: true, required: false
  private _runOnTargetPodNode?: boolean | cdktf.IResolvable; 
  public get runOnTargetPodNode() {
    return this.getBooleanAttribute('run_on_target_pod_node');
  }
  public set runOnTargetPodNode(value: boolean | cdktf.IResolvable) {
    this._runOnTargetPodNode = value;
  }
  public resetRunOnTargetPodNode() {
    this._runOnTargetPodNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnTargetPodNodeInput() {
    return this._runOnTargetPodNode;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup {
  /**
  * Specifies that the action should be executed using the pod's exec API within a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#exec DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec;
  /**
  * Specifies that the action should be executed by a Kubernetes Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#job DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#job}
  */
  readonly job?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExecToTerraform(struct!.exec),
    job: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJobToTerraform(struct!.job),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec",
    },
    job: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._job.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._job.internalValue = value.job;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupOutputReference {
    return new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete {
  /**
  * Defines the commands to back up the volume data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the image of the backup container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#image DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDeleteToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDeleteToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup {
  /**
  * Represents the action to be performed for backing up data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#backup_data DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#backup_data}
  */
  readonly backupData?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData;
  /**
  * Represents a set of actions that should be executed after the backup process has completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#post_backup DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#post_backup}
  */
  readonly postBackup?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup[] | cdktf.IResolvable;
  /**
  * Represents a set of actions that should be executed before the backup process begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#pre_backup DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#pre_backup}
  */
  readonly preBackup?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup[] | cdktf.IResolvable;
  /**
  * Represents a custom deletion action that can be executed before the built-in deletion action. Note: The preDelete action job will ignore the env/envFrom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#pre_delete DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#pre_delete}
  */
  readonly preDelete?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_data: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataToTerraform(struct!.backupData),
    post_backup: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupToTerraform, false)(struct!.postBackup),
    pre_backup: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupToTerraform, false)(struct!.preBackup),
    pre_delete: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDeleteToTerraform(struct!.preDelete),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_data: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataToHclTerraform(struct!.backupData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData",
    },
    post_backup: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupToHclTerraform, false)(struct!.postBackup),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupList",
    },
    pre_backup: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupToHclTerraform, false)(struct!.preBackup),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupList",
    },
    pre_delete: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDeleteToHclTerraform(struct!.preDelete),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupData = this._backupData?.internalValue;
    }
    if (this._postBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBackup = this._postBackup?.internalValue;
    }
    if (this._preBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preBackup = this._preBackup?.internalValue;
    }
    if (this._preDelete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preDelete = this._preDelete?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupData.internalValue = undefined;
      this._postBackup.internalValue = undefined;
      this._preBackup.internalValue = undefined;
      this._preDelete.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupData.internalValue = value.backupData;
      this._postBackup.internalValue = value.postBackup;
      this._preBackup.internalValue = value.preBackup;
      this._preDelete.internalValue = value.preDelete;
    }
  }

  // backup_data - computed: false, optional: true, required: false
  private _backupData = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupDataOutputReference(this, "backup_data");
  public get backupData() {
    return this._backupData;
  }
  public putBackupData(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupBackupData) {
    this._backupData.internalValue = value;
  }
  public resetBackupData() {
    this._backupData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDataInput() {
    return this._backupData.internalValue;
  }

  // post_backup - computed: false, optional: true, required: false
  private _postBackup = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackupList(this, "post_backup", false);
  public get postBackup() {
    return this._postBackup;
  }
  public putPostBackup(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPostBackup[] | cdktf.IResolvable) {
    this._postBackup.internalValue = value;
  }
  public resetPostBackup() {
    this._postBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBackupInput() {
    return this._postBackup.internalValue;
  }

  // pre_backup - computed: false, optional: true, required: false
  private _preBackup = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackupList(this, "pre_backup", false);
  public get preBackup() {
    return this._preBackup;
  }
  public putPreBackup(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreBackup[] | cdktf.IResolvable) {
    this._preBackup.internalValue = value;
  }
  public resetPreBackup() {
    this._preBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBackupInput() {
    return this._preBackup.internalValue;
  }

  // pre_delete - computed: false, optional: true, required: false
  private _preDelete = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDeleteOutputReference(this, "pre_delete");
  public get preDelete() {
    return this._preDelete;
  }
  public putPreDelete(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupPreDelete) {
    this._preDelete.internalValue = value;
  }
  public resetPreDelete() {
    this._preDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preDeleteInput() {
    return this._preDelete.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec {
  /**
  * Defines the command and arguments to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the container within the pod where the command should be executed. If not specified, the first container in the pod is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#container DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#container}
  */
  readonly container?: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Specifies the maximum duration to wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#timeout DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    on_error: cdktf.stringToTerraform(struct!.onError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._container = undefined;
      this._onError = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._container = value.container;
      this._onError = value.onError;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob {
  /**
  * Defines the commands to back up the volume data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the image of the backup container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#image DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Determines whether to run the job workload on the target pod node. If the backup container needs to mount the target pod's volumes, this field should be set to true. Otherwise, the target pod's volumes will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#run_on_target_pod_node DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#run_on_target_pod_node}
  */
  readonly runOnTargetPodNode?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJobToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    on_error: cdktf.stringToTerraform(struct!.onError),
    run_on_target_pod_node: cdktf.booleanToTerraform(struct!.runOnTargetPodNode),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJobToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_on_target_pod_node: {
      value: cdktf.booleanToHclTerraform(struct!.runOnTargetPodNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._runOnTargetPodNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnTargetPodNode = this._runOnTargetPodNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
      this._onError = undefined;
      this._runOnTargetPodNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
      this._onError = value.onError;
      this._runOnTargetPodNode = value.runOnTargetPodNode;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // run_on_target_pod_node - computed: false, optional: true, required: false
  private _runOnTargetPodNode?: boolean | cdktf.IResolvable; 
  public get runOnTargetPodNode() {
    return this.getBooleanAttribute('run_on_target_pod_node');
  }
  public set runOnTargetPodNode(value: boolean | cdktf.IResolvable) {
    this._runOnTargetPodNode = value;
  }
  public resetRunOnTargetPodNode() {
    this._runOnTargetPodNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnTargetPodNodeInput() {
    return this._runOnTargetPodNode;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady {
  /**
  * Specifies that the action should be executed using the pod's exec API within a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#exec DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec;
  /**
  * Specifies that the action should be executed by a Kubernetes Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#job DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#job}
  */
  readonly job?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExecToTerraform(struct!.exec),
    job: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJobToTerraform(struct!.job),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec",
    },
    job: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._job.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._job.internalValue = value.job;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyOutputReference {
    return new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData {
  /**
  * Defines the commands to back up the volume data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Specifies the image of the backup container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#image DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Indicates how to behave if an error is encountered during the execution of this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#on_error DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Determines whether to run the job workload on the target pod node. If the backup container needs to mount the target pod's volumes, this field should be set to true. Otherwise, the target pod's volumes will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#run_on_target_pod_node DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#run_on_target_pod_node}
  */
  readonly runOnTargetPodNode?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareDataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    on_error: cdktf.stringToTerraform(struct!.onError),
    run_on_target_pod_node: cdktf.booleanToTerraform(struct!.runOnTargetPodNode),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareDataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_on_target_pod_node: {
      value: cdktf.booleanToHclTerraform(struct!.runOnTargetPodNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._runOnTargetPodNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnTargetPodNode = this._runOnTargetPodNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
      this._onError = undefined;
      this._runOnTargetPodNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
      this._onError = value.onError;
      this._runOnTargetPodNode = value.runOnTargetPodNode;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // run_on_target_pod_node - computed: false, optional: true, required: false
  private _runOnTargetPodNode?: boolean | cdktf.IResolvable; 
  public get runOnTargetPodNode() {
    return this.getBooleanAttribute('run_on_target_pod_node');
  }
  public set runOnTargetPodNode(value: boolean | cdktf.IResolvable) {
    this._runOnTargetPodNode = value;
  }
  public resetRunOnTargetPodNode() {
    this._runOnTargetPodNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnTargetPodNodeInput() {
    return this._runOnTargetPodNode;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore {
  /**
  * Determines if a base backup is required during restoration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#base_backup_required DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#base_backup_required}
  */
  readonly baseBackupRequired?: boolean | cdktf.IResolvable;
  /**
  * Specifies the actions that should be executed after the data has been prepared and is ready for restoration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#post_ready DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#post_ready}
  */
  readonly postReady?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady[] | cdktf.IResolvable;
  /**
  * Specifies the action required to prepare data for restoration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#prepare_data DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#prepare_data}
  */
  readonly prepareData?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestoreToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_backup_required: cdktf.booleanToTerraform(struct!.baseBackupRequired),
    post_ready: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyToTerraform, false)(struct!.postReady),
    prepare_data: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareDataToTerraform(struct!.prepareData),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestoreToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_backup_required: {
      value: cdktf.booleanToHclTerraform(struct!.baseBackupRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_ready: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyToHclTerraform, false)(struct!.postReady),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyList",
    },
    prepare_data: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareDataToHclTerraform(struct!.prepareData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseBackupRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseBackupRequired = this._baseBackupRequired;
    }
    if (this._postReady?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postReady = this._postReady?.internalValue;
    }
    if (this._prepareData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepareData = this._prepareData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseBackupRequired = undefined;
      this._postReady.internalValue = undefined;
      this._prepareData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseBackupRequired = value.baseBackupRequired;
      this._postReady.internalValue = value.postReady;
      this._prepareData.internalValue = value.prepareData;
    }
  }

  // base_backup_required - computed: false, optional: true, required: false
  private _baseBackupRequired?: boolean | cdktf.IResolvable; 
  public get baseBackupRequired() {
    return this.getBooleanAttribute('base_backup_required');
  }
  public set baseBackupRequired(value: boolean | cdktf.IResolvable) {
    this._baseBackupRequired = value;
  }
  public resetBaseBackupRequired() {
    this._baseBackupRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBackupRequiredInput() {
    return this._baseBackupRequired;
  }

  // post_ready - computed: false, optional: true, required: false
  private _postReady = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReadyList(this, "post_ready", false);
  public get postReady() {
    return this._postReady;
  }
  public putPostReady(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePostReady[] | cdktf.IResolvable) {
    this._postReady.internalValue = value;
  }
  public resetPostReady() {
    this._postReady.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postReadyInput() {
    return this._postReady.internalValue;
  }

  // prepare_data - computed: false, optional: true, required: false
  private _prepareData = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareDataOutputReference(this, "prepare_data");
  public get prepareData() {
    return this._prepareData;
  }
  public putPrepareData(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestorePrepareData) {
    this._prepareData.internalValue = value;
  }
  public resetPrepareData() {
    this._prepareData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareDataInput() {
    return this._prepareData.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec {
  /**
  * Specifies the backup action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#backup DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#backup}
  */
  readonly backup?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup;
  /**
  * Specifies the backup type. Supported values include: - 'Full' for a full backup. - 'Incremental' back up data that have changed since the last backup (either full or incremental). - 'Differential' back up data that has changed since the last full backup. - 'Continuous' back up transaction logs continuously, such as MySQL binlog, PostgreSQL WAL, etc. Continuous backup is essential for implementing Point-in-Time Recovery (PITR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#backup_type DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#backup_type}
  */
  readonly backupType: string;
  /**
  * Specifies a list of environment variables to be set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#env DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Specifies a list of sources to populate environment variables in the container. The keys within a source must be a C_IDENTIFIER. Any invalid keys will be reported as an event when the container starts. If a key exists in multiple sources, the value from the last source will take precedence. Any values defined by an Env with a duplicate key will take precedence. This field cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#env_from DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: { [key: string]: string };
  /**
  * Specifies the restore action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#restore DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest#restore}
  */
  readonly restore?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore;
}

export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupToTerraform(struct!.backup),
    backup_type: cdktf.stringToTerraform(struct!.backupType),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    env_from: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envFrom),
    restore: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestoreToTerraform(struct!.restore),
  }
}


export function dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup",
    },
    backup_type: {
      value: cdktf.stringToHclTerraform(struct!.backupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    env_from: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envFrom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restore: {
      value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestoreToHclTerraform(struct!.restore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._backupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupType = this._backupType;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._envFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom;
    }
    if (this._restore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restore = this._restore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup.internalValue = undefined;
      this._backupType = undefined;
      this._env = undefined;
      this._envFrom = undefined;
      this._restore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup.internalValue = value.backup;
      this._backupType = value.backupType;
      this._env = value.env;
      this._envFrom = value.envFrom;
      this._restore.internalValue = value.restore;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // backup_type - computed: false, optional: false, required: true
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom?: { [key: string]: string }; 
  public get envFrom() {
    return this.getStringMapAttribute('env_from');
  }
  public set envFrom(value: { [key: string]: string }) {
    this._envFrom = value;
  }
  public resetEnvFrom() {
    this._envFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_action_set_v1alpha1_manifest}
*/
export class DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dataprotection_kubeblocks_io_action_set_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dataprotection_kubeblocks_io_action_set_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/dataprotection_kubeblocks_io_action_set_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_action_set_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dataprotection_kubeblocks_io_action_set_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoActionSetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
