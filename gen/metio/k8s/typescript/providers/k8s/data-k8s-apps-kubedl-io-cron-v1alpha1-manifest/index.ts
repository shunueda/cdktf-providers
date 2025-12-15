// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubedlIoCronV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#metadata DataK8SAppsKubedlIoCronV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#spec DataK8SAppsKubedlIoCronV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#annotations DataK8SAppsKubedlIoCronV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#labels DataK8SAppsKubedlIoCronV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#name DataK8SAppsKubedlIoCronV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#namespace DataK8SAppsKubedlIoCronV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsKubedlIoCronV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsKubedlIoCronV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#api_version DataK8SAppsKubedlIoCronV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#kind DataK8SAppsKubedlIoCronV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#workload DataK8SAppsKubedlIoCronV1Alpha1Manifest#workload}
  */
  readonly workload?: { [key: string]: string };
}

export function dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    workload: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.workload),
  }
}


export function dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
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
    workload: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.workload),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
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
    if (this._workload !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._workload = undefined;
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
      this._workload = value.workload;
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

  // workload - computed: false, optional: true, required: false
  private _workload?: { [key: string]: string }; 
  public get workload() {
    return this.getStringMapAttribute('workload');
  }
  public set workload(value: { [key: string]: string }) {
    this._workload = value;
  }
  public resetWorkload() {
    this._workload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload;
  }
}
export interface DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#concurrency_policy DataK8SAppsKubedlIoCronV1Alpha1Manifest#concurrency_policy}
  */
  readonly concurrencyPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#deadline DataK8SAppsKubedlIoCronV1Alpha1Manifest#deadline}
  */
  readonly deadline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#history_limit DataK8SAppsKubedlIoCronV1Alpha1Manifest#history_limit}
  */
  readonly historyLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#schedule DataK8SAppsKubedlIoCronV1Alpha1Manifest#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#suspend DataK8SAppsKubedlIoCronV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#template DataK8SAppsKubedlIoCronV1Alpha1Manifest#template}
  */
  readonly template: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate;
}

export function dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency_policy: cdktf.stringToTerraform(struct!.concurrencyPolicy),
    deadline: cdktf.stringToTerraform(struct!.deadline),
    history_limit: cdktf.numberToTerraform(struct!.historyLimit),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    template: dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency_policy: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deadline: {
      value: cdktf.stringToHclTerraform(struct!.deadline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    history_limit: {
      value: cdktf.numberToHclTerraform(struct!.historyLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrencyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyPolicy = this._concurrencyPolicy;
    }
    if (this._deadline !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadline = this._deadline;
    }
    if (this._historyLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyLimit = this._historyLimit;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrencyPolicy = undefined;
      this._deadline = undefined;
      this._historyLimit = undefined;
      this._schedule = undefined;
      this._suspend = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrencyPolicy = value.concurrencyPolicy;
      this._deadline = value.deadline;
      this._historyLimit = value.historyLimit;
      this._schedule = value.schedule;
      this._suspend = value.suspend;
      this._template.internalValue = value.template;
    }
  }

  // concurrency_policy - computed: false, optional: true, required: false
  private _concurrencyPolicy?: string; 
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }
  public set concurrencyPolicy(value: string) {
    this._concurrencyPolicy = value;
  }
  public resetConcurrencyPolicy() {
    this._concurrencyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyPolicyInput() {
    return this._concurrencyPolicy;
  }

  // deadline - computed: false, optional: true, required: false
  private _deadline?: string; 
  public get deadline() {
    return this.getStringAttribute('deadline');
  }
  public set deadline(value: string) {
    this._deadline = value;
  }
  public resetDeadline() {
    this._deadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlineInput() {
    return this._deadline;
  }

  // history_limit - computed: false, optional: true, required: false
  private _historyLimit?: number; 
  public get historyLimit() {
    return this.getNumberAttribute('history_limit');
  }
  public set historyLimit(value: number) {
    this._historyLimit = value;
  }
  public resetHistoryLimit() {
    this._historyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyLimitInput() {
    return this._historyLimit;
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

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest k8s_apps_kubedl_io_cron_v1alpha1_manifest}
*/
export class DataK8SAppsKubedlIoCronV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubedl_io_cron_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubedlIoCronV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubedlIoCronV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubedlIoCronV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubedlIoCronV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubedl_io_cron_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubedl_io_cron_v1alpha1_manifest k8s_apps_kubedl_io_cron_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubedlIoCronV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubedlIoCronV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubedl_io_cron_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubedlIoCronV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubedlIoCronV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubedlIoCronV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubedlIoCronV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubedlIoCronV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubedlIoCronV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
