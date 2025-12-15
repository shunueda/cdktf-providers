// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchedulingK8SIoPriorityClassV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#description DataK8SSchedulingK8SIoPriorityClassV1Manifest#description}
  */
  readonly description?: string;
  /**
  * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as 'globalDefault'. However, if more than one PriorityClasses exists with their 'globalDefault' field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#global_default DataK8SSchedulingK8SIoPriorityClassV1Manifest#global_default}
  */
  readonly globalDefault?: boolean | cdktf.IResolvable;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#metadata DataK8SSchedulingK8SIoPriorityClassV1Manifest#metadata}
  */
  readonly metadata: DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata;
  /**
  * preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#preemption_policy DataK8SSchedulingK8SIoPriorityClassV1Manifest#preemption_policy}
  */
  readonly preemptionPolicy?: string;
  /**
  * value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#value DataK8SSchedulingK8SIoPriorityClassV1Manifest#value}
  */
  readonly value: number;
}
export interface DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#annotations DataK8SSchedulingK8SIoPriorityClassV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#labels DataK8SSchedulingK8SIoPriorityClassV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#name DataK8SSchedulingK8SIoPriorityClassV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSchedulingK8SIoPriorityClassV1ManifestMetadataToTerraform(struct?: DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchedulingK8SIoPriorityClassV1ManifestMetadataToHclTerraform(struct?: DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest k8s_scheduling_k8s_io_priority_class_v1_manifest}
*/
export class DataK8SSchedulingK8SIoPriorityClassV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scheduling_k8s_io_priority_class_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchedulingK8SIoPriorityClassV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchedulingK8SIoPriorityClassV1Manifest to import
  * @param importFromId The id of the existing DataK8SSchedulingK8SIoPriorityClassV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchedulingK8SIoPriorityClassV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scheduling_k8s_io_priority_class_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/scheduling_k8s_io_priority_class_v1_manifest k8s_scheduling_k8s_io_priority_class_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchedulingK8SIoPriorityClassV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchedulingK8SIoPriorityClassV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scheduling_k8s_io_priority_class_v1_manifest',
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
    this._description = config.description;
    this._globalDefault = config.globalDefault;
    this._metadata.internalValue = config.metadata;
    this._preemptionPolicy = config.preemptionPolicy;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // global_default - computed: false, optional: true, required: false
  private _globalDefault?: boolean | cdktf.IResolvable; 
  public get globalDefault() {
    return this.getBooleanAttribute('global_default');
  }
  public set globalDefault(value: boolean | cdktf.IResolvable) {
    this._globalDefault = value;
  }
  public resetGlobalDefault() {
    this._globalDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDefaultInput() {
    return this._globalDefault;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // preemption_policy - computed: false, optional: true, required: false
  private _preemptionPolicy?: string; 
  public get preemptionPolicy() {
    return this.getStringAttribute('preemption_policy');
  }
  public set preemptionPolicy(value: string) {
    this._preemptionPolicy = value;
  }
  public resetPreemptionPolicy() {
    this._preemptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionPolicyInput() {
    return this._preemptionPolicy;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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
      description: cdktf.stringToTerraform(this._description),
      global_default: cdktf.booleanToTerraform(this._globalDefault),
      metadata: dataK8SSchedulingK8SIoPriorityClassV1ManifestMetadataToTerraform(this._metadata.internalValue),
      preemption_policy: cdktf.stringToTerraform(this._preemptionPolicy),
      value: cdktf.numberToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_default: {
        value: cdktf.booleanToHclTerraform(this._globalDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: dataK8SSchedulingK8SIoPriorityClassV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingK8SIoPriorityClassV1ManifestMetadata",
      },
      preemption_policy: {
        value: cdktf.stringToHclTerraform(this._preemptionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.numberToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
