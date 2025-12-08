// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#metadata DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#spec DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec;
}
export interface DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#annotations DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#labels DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#namespace DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadataToTerraform(struct?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#allow_non_restored_state DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#allow_non_restored_state}
  */
  readonly allowNonRestoredState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#args DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#checkpoint_trigger_nonce DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#checkpoint_trigger_nonce}
  */
  readonly checkpointTriggerNonce?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#entry_class DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#entry_class}
  */
  readonly entryClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#initial_savepoint_path DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#initial_savepoint_path}
  */
  readonly initialSavepointPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#jar_uri DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#parallelism DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#savepoint_redeploy_nonce DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#savepoint_redeploy_nonce}
  */
  readonly savepointRedeployNonce?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#savepoint_trigger_nonce DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#savepoint_trigger_nonce}
  */
  readonly savepointTriggerNonce?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#state DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#upgrade_mode DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#upgrade_mode}
  */
  readonly upgradeMode?: string;
}

export function dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJobToTerraform(struct?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_non_restored_state: cdktf.booleanToTerraform(struct!.allowNonRestoredState),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    checkpoint_trigger_nonce: cdktf.numberToTerraform(struct!.checkpointTriggerNonce),
    entry_class: cdktf.stringToTerraform(struct!.entryClass),
    initial_savepoint_path: cdktf.stringToTerraform(struct!.initialSavepointPath),
    jar_uri: cdktf.stringToTerraform(struct!.jarUri),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    savepoint_redeploy_nonce: cdktf.numberToTerraform(struct!.savepointRedeployNonce),
    savepoint_trigger_nonce: cdktf.numberToTerraform(struct!.savepointTriggerNonce),
    state: cdktf.stringToTerraform(struct!.state),
    upgrade_mode: cdktf.stringToTerraform(struct!.upgradeMode),
  }
}


export function dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJobToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_non_restored_state: {
      value: cdktf.booleanToHclTerraform(struct!.allowNonRestoredState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    checkpoint_trigger_nonce: {
      value: cdktf.numberToHclTerraform(struct!.checkpointTriggerNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_class: {
      value: cdktf.stringToHclTerraform(struct!.entryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_savepoint_path: {
      value: cdktf.stringToHclTerraform(struct!.initialSavepointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jar_uri: {
      value: cdktf.stringToHclTerraform(struct!.jarUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    savepoint_redeploy_nonce: {
      value: cdktf.numberToHclTerraform(struct!.savepointRedeployNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    savepoint_trigger_nonce: {
      value: cdktf.numberToHclTerraform(struct!.savepointTriggerNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_mode: {
      value: cdktf.stringToHclTerraform(struct!.upgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNonRestoredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNonRestoredState = this._allowNonRestoredState;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._checkpointTriggerNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointTriggerNonce = this._checkpointTriggerNonce;
    }
    if (this._entryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryClass = this._entryClass;
    }
    if (this._initialSavepointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSavepointPath = this._initialSavepointPath;
    }
    if (this._jarUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarUri = this._jarUri;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._savepointRedeployNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.savepointRedeployNonce = this._savepointRedeployNonce;
    }
    if (this._savepointTriggerNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.savepointTriggerNonce = this._savepointTriggerNonce;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._upgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeMode = this._upgradeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNonRestoredState = undefined;
      this._args = undefined;
      this._checkpointTriggerNonce = undefined;
      this._entryClass = undefined;
      this._initialSavepointPath = undefined;
      this._jarUri = undefined;
      this._parallelism = undefined;
      this._savepointRedeployNonce = undefined;
      this._savepointTriggerNonce = undefined;
      this._state = undefined;
      this._upgradeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNonRestoredState = value.allowNonRestoredState;
      this._args = value.args;
      this._checkpointTriggerNonce = value.checkpointTriggerNonce;
      this._entryClass = value.entryClass;
      this._initialSavepointPath = value.initialSavepointPath;
      this._jarUri = value.jarUri;
      this._parallelism = value.parallelism;
      this._savepointRedeployNonce = value.savepointRedeployNonce;
      this._savepointTriggerNonce = value.savepointTriggerNonce;
      this._state = value.state;
      this._upgradeMode = value.upgradeMode;
    }
  }

  // allow_non_restored_state - computed: false, optional: true, required: false
  private _allowNonRestoredState?: boolean | cdktf.IResolvable; 
  public get allowNonRestoredState() {
    return this.getBooleanAttribute('allow_non_restored_state');
  }
  public set allowNonRestoredState(value: boolean | cdktf.IResolvable) {
    this._allowNonRestoredState = value;
  }
  public resetAllowNonRestoredState() {
    this._allowNonRestoredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonRestoredStateInput() {
    return this._allowNonRestoredState;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // checkpoint_trigger_nonce - computed: false, optional: true, required: false
  private _checkpointTriggerNonce?: number; 
  public get checkpointTriggerNonce() {
    return this.getNumberAttribute('checkpoint_trigger_nonce');
  }
  public set checkpointTriggerNonce(value: number) {
    this._checkpointTriggerNonce = value;
  }
  public resetCheckpointTriggerNonce() {
    this._checkpointTriggerNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointTriggerNonceInput() {
    return this._checkpointTriggerNonce;
  }

  // entry_class - computed: false, optional: true, required: false
  private _entryClass?: string; 
  public get entryClass() {
    return this.getStringAttribute('entry_class');
  }
  public set entryClass(value: string) {
    this._entryClass = value;
  }
  public resetEntryClass() {
    this._entryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryClassInput() {
    return this._entryClass;
  }

  // initial_savepoint_path - computed: false, optional: true, required: false
  private _initialSavepointPath?: string; 
  public get initialSavepointPath() {
    return this.getStringAttribute('initial_savepoint_path');
  }
  public set initialSavepointPath(value: string) {
    this._initialSavepointPath = value;
  }
  public resetInitialSavepointPath() {
    this._initialSavepointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSavepointPathInput() {
    return this._initialSavepointPath;
  }

  // jar_uri - computed: false, optional: true, required: false
  private _jarUri?: string; 
  public get jarUri() {
    return this.getStringAttribute('jar_uri');
  }
  public set jarUri(value: string) {
    this._jarUri = value;
  }
  public resetJarUri() {
    this._jarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarUriInput() {
    return this._jarUri;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // savepoint_redeploy_nonce - computed: false, optional: true, required: false
  private _savepointRedeployNonce?: number; 
  public get savepointRedeployNonce() {
    return this.getNumberAttribute('savepoint_redeploy_nonce');
  }
  public set savepointRedeployNonce(value: number) {
    this._savepointRedeployNonce = value;
  }
  public resetSavepointRedeployNonce() {
    this._savepointRedeployNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savepointRedeployNonceInput() {
    return this._savepointRedeployNonce;
  }

  // savepoint_trigger_nonce - computed: false, optional: true, required: false
  private _savepointTriggerNonce?: number; 
  public get savepointTriggerNonce() {
    return this.getNumberAttribute('savepoint_trigger_nonce');
  }
  public set savepointTriggerNonce(value: number) {
    this._savepointTriggerNonce = value;
  }
  public resetSavepointTriggerNonce() {
    this._savepointTriggerNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savepointTriggerNonceInput() {
    return this._savepointTriggerNonce;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }
}
export interface DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#deployment_name DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#deployment_name}
  */
  readonly deploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#flink_configuration DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#flink_configuration}
  */
  readonly flinkConfiguration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#job DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#job}
  */
  readonly job?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#restart_nonce DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest#restart_nonce}
  */
  readonly restartNonce?: number;
}

export function dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecToTerraform(struct?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    flink_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.flinkConfiguration),
    job: dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJobToTerraform(struct!.job),
    restart_nonce: cdktf.numberToTerraform(struct!.restartNonce),
  }
}


export function dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flink_configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.flinkConfiguration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    job: {
      value: dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob",
    },
    restart_nonce: {
      value: cdktf.numberToHclTerraform(struct!.restartNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._flinkConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.flinkConfiguration = this._flinkConfiguration;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._restartNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartNonce = this._restartNonce;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentName = undefined;
      this._flinkConfiguration = undefined;
      this._job.internalValue = undefined;
      this._restartNonce = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentName = value.deploymentName;
      this._flinkConfiguration = value.flinkConfiguration;
      this._job.internalValue = value.job;
      this._restartNonce = value.restartNonce;
    }
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

  // flink_configuration - computed: false, optional: true, required: false
  private _flinkConfiguration?: { [key: string]: string }; 
  public get flinkConfiguration() {
    return this.getStringMapAttribute('flink_configuration');
  }
  public set flinkConfiguration(value: { [key: string]: string }) {
    this._flinkConfiguration = value;
  }
  public resetFlinkConfiguration() {
    this._flinkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkConfigurationInput() {
    return this._flinkConfiguration;
  }

  // job - computed: false, optional: true, required: false
  private _job = new DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // restart_nonce - computed: false, optional: true, required: false
  private _restartNonce?: number; 
  public get restartNonce() {
    return this.getNumberAttribute('restart_nonce');
  }
  public set restartNonce(value: number) {
    this._restartNonce = value;
  }
  public resetRestartNonce() {
    this._restartNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartNonceInput() {
    return this._restartNonce;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest k8s_flink_apache_org_flink_session_job_v1beta1_manifest}
*/
export class DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flink_apache_org_flink_session_job_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flink_apache_org_flink_session_job_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/flink_apache_org_flink_session_job_v1beta1_manifest k8s_flink_apache_org_flink_session_job_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flink_apache_org_flink_session_job_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec) {
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
      metadata: dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlinkApacheOrgFlinkSessionJobV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
