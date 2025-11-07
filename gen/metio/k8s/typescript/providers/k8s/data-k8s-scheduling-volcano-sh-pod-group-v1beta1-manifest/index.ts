// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#metadata DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata;
  /**
  * Specification of the desired behavior of the pod group. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#spec DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec;
}
export interface DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#annotations DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#labels DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#name DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#namespace DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec {
  /**
  * MinMember defines the minimal number of members/tasks to run the pod group; if there's not enough resources to start all tasks, the scheduler will not start anyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#min_member DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#min_member}
  */
  readonly minMember?: number;
  /**
  * MinResources defines the minimal resource of members/tasks to run the pod group; if there's not enough resources to start all tasks, the scheduler will not start anyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#min_resources DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#min_resources}
  */
  readonly minResources?: { [key: string]: string };
  /**
  * MinTaskMember defines the minimal number of pods to run each task in the pod group; if there's not enough resources to start each task, the scheduler will not start anyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#min_task_member DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#min_task_member}
  */
  readonly minTaskMember?: { [key: string]: string };
  /**
  * If specified, indicates the PodGroup's priority. 'system-node-critical' and 'system-cluster-critical' are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the PodGroup priority will be default or zero if there is no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#priority_class_name DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Queue defines the queue to allocate resource for PodGroup; if queue does not exist, the PodGroup will not be scheduled. Defaults to 'default' Queue with the lowest weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#queue DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest#queue}
  */
  readonly queue?: string;
}

export function dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpecToTerraform(struct?: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_member: cdktf.numberToTerraform(struct!.minMember),
    min_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.minResources),
    min_task_member: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.minTaskMember),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    queue: cdktf.stringToTerraform(struct!.queue),
  }
}


export function dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_member: {
      value: cdktf.numberToHclTerraform(struct!.minMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.minResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_task_member: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.minTaskMember),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktf.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMember = this._minMember;
    }
    if (this._minResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResources = this._minResources;
    }
    if (this._minTaskMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskMember = this._minTaskMember;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minMember = undefined;
      this._minResources = undefined;
      this._minTaskMember = undefined;
      this._priorityClassName = undefined;
      this._queue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minMember = value.minMember;
      this._minResources = value.minResources;
      this._minTaskMember = value.minTaskMember;
      this._priorityClassName = value.priorityClassName;
      this._queue = value.queue;
    }
  }

  // min_member - computed: false, optional: true, required: false
  private _minMember?: number; 
  public get minMember() {
    return this.getNumberAttribute('min_member');
  }
  public set minMember(value: number) {
    this._minMember = value;
  }
  public resetMinMember() {
    this._minMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemberInput() {
    return this._minMember;
  }

  // min_resources - computed: false, optional: true, required: false
  private _minResources?: { [key: string]: string }; 
  public get minResources() {
    return this.getStringMapAttribute('min_resources');
  }
  public set minResources(value: { [key: string]: string }) {
    this._minResources = value;
  }
  public resetMinResources() {
    this._minResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcesInput() {
    return this._minResources;
  }

  // min_task_member - computed: false, optional: true, required: false
  private _minTaskMember?: { [key: string]: string }; 
  public get minTaskMember() {
    return this.getStringMapAttribute('min_task_member');
  }
  public set minTaskMember(value: { [key: string]: string }) {
    this._minTaskMember = value;
  }
  public resetMinTaskMember() {
    this._minTaskMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskMemberInput() {
    return this._minTaskMember;
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

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest k8s_scheduling_volcano_sh_pod_group_v1beta1_manifest}
*/
export class DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scheduling_volcano_sh_pod_group_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchedulingVolcanoShPodGroupV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scheduling_volcano_sh_pod_group_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_pod_group_v1beta1_manifest k8s_scheduling_volcano_sh_pod_group_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scheduling_volcano_sh_pod_group_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec) {
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
      metadata: dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingVolcanoShPodGroupV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
