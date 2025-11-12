// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#metadata DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata;
  /**
  * ComponentResourceConstraintSpec defines the desired state of ComponentResourceConstraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#spec DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#annotations DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#labels DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#name DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector {
  /**
  * In versions prior to KB 0.8.0, ComponentDefRef is the name of the component definition in the ClusterDefinition. In KB 0.8.0 and later versions, ComponentDefRef is the name of ComponentDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#component_def_ref DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#component_def_ref}
  */
  readonly componentDefRef: string;
  /**
  * rules are the constraint rules that will be applied to the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#rules DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#rules}
  */
  readonly rules: string[];
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_def_ref: cdktf.stringToTerraform(struct!.componentDefRef),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_def_ref: {
      value: cdktf.stringToHclTerraform(struct!.componentDefRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentDefRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDefRef = this._componentDefRef;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentDefRef = undefined;
      this._rules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentDefRef = value.componentDefRef;
      this._rules = value.rules;
    }
  }

  // component_def_ref - computed: false, optional: false, required: true
  private _componentDefRef?: string; 
  public get componentDefRef() {
    return this.getStringAttribute('component_def_ref');
  }
  public set componentDefRef(value: string) {
    this._componentDefRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefRefInput() {
    return this._componentDefRef;
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorOutputReference {
    return new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu {
  /**
  * The maximum count of vcpu cores, [Min, Max] defines a range for valid vcpu cores, and the value in this range must be multiple times of Step. It's useful to define a large number of valid values without defining them one by one. Please see the documentation for Step for some examples. If Slots is specified, Max, Min, and Step are ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#max DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimum count of vcpu cores, [Min, Max] defines a range for valid vcpu cores, and the value in this range must be multiple times of Step. It's useful to define a large number of valid values without defining them one by one. Please see the documentation for Step for some examples. If Slots is specified, Max, Min, and Step are ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#min DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#min}
  */
  readonly min?: string;
  /**
  * The valid vcpu cores, it's useful if you want to define valid vcpu cores explicitly. If Slots is specified, Max, Min, and Step are ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#slots DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#slots}
  */
  readonly slots?: string[];
  /**
  * The minimum granularity of vcpu cores, [Min, Max] defines a range for valid vcpu cores and the value in this range must be multiple times of Step. For example: 1. Min is 2, Max is 8, Step is 2, and the valid vcpu core is {2, 4, 6, 8}. 2. Min is 0.5, Max is 2, Step is 0.5, and the valid vcpu core is {0.5, 1, 1.5, 2}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#step DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#step}
  */
  readonly step?: string;
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpuToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    slots: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slots),
    step: cdktf.stringToTerraform(struct!.step),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpuToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slots: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slots),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    step: {
      value: cdktf.stringToHclTerraform(struct!.step),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._slots !== undefined) {
      hasAnyValues = true;
      internalValueResult.slots = this._slots;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._slots = undefined;
      this._step = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._slots = value.slots;
      this._step = value.step;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // slots - computed: false, optional: true, required: false
  private _slots?: string[]; 
  public get slots() {
    return this.getListAttribute('slots');
  }
  public set slots(value: string[]) {
    this._slots = value;
  }
  public resetSlots() {
    this._slots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotsInput() {
    return this._slots;
  }

  // step - computed: false, optional: true, required: false
  private _step?: string; 
  public get step() {
    return this.getStringAttribute('step');
  }
  public set step(value: string) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory {
  /**
  * The maximum size of memory per vcpu core, [MinPerCPU, MaxPerCPU] defines a range for valid memory size per vcpu core. It is useful on GCP as the ratio between the CPU and memory may be a range. If SizePerCPU is specified, MinPerCPU and MaxPerCPU are ignored. Reference: https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#max_per_cpu DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#max_per_cpu}
  */
  readonly maxPerCpu?: string;
  /**
  * The minimum size of memory per vcpu core, [MinPerCPU, MaxPerCPU] defines a range for valid memory size per vcpu core. It is useful on GCP as the ratio between the CPU and memory may be a range. If SizePerCPU is specified, MinPerCPU and MaxPerCPU are ignored. Reference: https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#min_per_cpu DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#min_per_cpu}
  */
  readonly minPerCpu?: string;
  /**
  * The size of memory per vcpu core. For example: 1Gi, 200Mi. If SizePerCPU is specified, MinPerCPU and MaxPerCPU are ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#size_per_cpu DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#size_per_cpu}
  */
  readonly sizePerCpu?: string;
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemoryToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_per_cpu: cdktf.stringToTerraform(struct!.maxPerCpu),
    min_per_cpu: cdktf.stringToTerraform(struct!.minPerCpu),
    size_per_cpu: cdktf.stringToTerraform(struct!.sizePerCpu),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemoryToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_per_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxPerCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_per_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minPerCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_per_cpu: {
      value: cdktf.stringToHclTerraform(struct!.sizePerCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPerCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPerCpu = this._maxPerCpu;
    }
    if (this._minPerCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPerCpu = this._minPerCpu;
    }
    if (this._sizePerCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizePerCpu = this._sizePerCpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPerCpu = undefined;
      this._minPerCpu = undefined;
      this._sizePerCpu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPerCpu = value.maxPerCpu;
      this._minPerCpu = value.minPerCpu;
      this._sizePerCpu = value.sizePerCpu;
    }
  }

  // max_per_cpu - computed: false, optional: true, required: false
  private _maxPerCpu?: string; 
  public get maxPerCpu() {
    return this.getStringAttribute('max_per_cpu');
  }
  public set maxPerCpu(value: string) {
    this._maxPerCpu = value;
  }
  public resetMaxPerCpu() {
    this._maxPerCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPerCpuInput() {
    return this._maxPerCpu;
  }

  // min_per_cpu - computed: false, optional: true, required: false
  private _minPerCpu?: string; 
  public get minPerCpu() {
    return this.getStringAttribute('min_per_cpu');
  }
  public set minPerCpu(value: string) {
    this._minPerCpu = value;
  }
  public resetMinPerCpu() {
    this._minPerCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPerCpuInput() {
    return this._minPerCpu;
  }

  // size_per_cpu - computed: false, optional: true, required: false
  private _sizePerCpu?: string; 
  public get sizePerCpu() {
    return this.getStringAttribute('size_per_cpu');
  }
  public set sizePerCpu(value: string) {
    this._sizePerCpu = value;
  }
  public resetSizePerCpu() {
    this._sizePerCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizePerCpuInput() {
    return this._sizePerCpu;
  }
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage {
  /**
  * The maximum size of storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#max DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimum size of storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#min DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorageToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorageToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules {
  /**
  * The constraint for vcpu cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#cpu DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#cpu}
  */
  readonly cpu: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu;
  /**
  * The constraint for memory size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#memory DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#memory}
  */
  readonly memory: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory;
  /**
  * The name of the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#name DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The constraint for storage size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#storage DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage;
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpuToTerraform(struct!.cpu),
    memory: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemoryToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    storage: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu",
    },
    memory: {
      value: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._name = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._name = value.name;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesCpu) {
    this._cpu.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: false, required: true
  private _memory = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesMemory) {
    this._memory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
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

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesOutputReference {
    return new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents {
  /**
  * In versions prior to KB 0.8.0, ComponentDefRef is the name of the component definition in the ClusterDefinition. In KB 0.8.0 and later versions, ComponentDefRef is the name of ComponentDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#component_def_ref DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#component_def_ref}
  */
  readonly componentDefRef: string;
  /**
  * rules are the constraint rules that will be applied to the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#rules DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#rules}
  */
  readonly rules: string[];
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_def_ref: cdktf.stringToTerraform(struct!.componentDefRef),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_def_ref: {
      value: cdktf.stringToHclTerraform(struct!.componentDefRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentDefRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDefRef = this._componentDefRef;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentDefRef = undefined;
      this._rules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentDefRef = value.componentDefRef;
      this._rules = value.rules;
    }
  }

  // component_def_ref - computed: false, optional: false, required: true
  private _componentDefRef?: string; 
  public get componentDefRef() {
    return this.getStringAttribute('component_def_ref');
  }
  public set componentDefRef(value: string) {
    this._componentDefRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefRefInput() {
    return this._componentDefRef;
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsOutputReference {
    return new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector {
  /**
  * clusterDefRef is the name of the cluster definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#cluster_def_ref DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#cluster_def_ref}
  */
  readonly clusterDefRef: string;
  /**
  * selector is used to bind the resource constraint to components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#components DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#components}
  */
  readonly components: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_def_ref: cdktf.stringToTerraform(struct!.clusterDefRef),
    components: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsToTerraform, false)(struct!.components),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_def_ref: {
      value: cdktf.stringToHclTerraform(struct!.clusterDefRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDefRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDefRef = this._clusterDefRef;
    }
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDefRef = undefined;
      this._components.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDefRef = value.clusterDefRef;
      this._components.internalValue = value.components;
    }
  }

  // cluster_def_ref - computed: false, optional: false, required: true
  private _clusterDefRef?: string; 
  public get clusterDefRef() {
    return this.getStringAttribute('cluster_def_ref');
  }
  public set clusterDefRef(value: string) {
    this._clusterDefRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDefRefInput() {
    return this._clusterDefRef;
  }

  // components - computed: false, optional: false, required: true
  private _components = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorOutputReference {
    return new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec {
  /**
  * componentSelector is used to bind the resource constraint to components based on ComponentDefinition API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#component_selector DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#component_selector}
  */
  readonly componentSelector?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector[] | cdktf.IResolvable;
  /**
  * Component resource constraint rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#rules DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#rules}
  */
  readonly rules: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules[] | cdktf.IResolvable;
  /**
  * selector is used to bind the resource constraint to cluster definitions based on ClusterDefinition API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#selector DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_selector: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorToTerraform, false)(struct!.componentSelector),
    rules: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesToTerraform, false)(struct!.rules),
    selector: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorToTerraform, false)(struct!.selector),
  }
}


export function dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_selector: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorToHclTerraform, false)(struct!.componentSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorList",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesList",
    },
    selector: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorToHclTerraform, false)(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentSelector = this._componentSelector?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentSelector.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentSelector.internalValue = value.componentSelector;
      this._rules.internalValue = value.rules;
      this._selector.internalValue = value.selector;
    }
  }

  // component_selector - computed: false, optional: true, required: false
  private _componentSelector = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelectorList(this, "component_selector", false);
  public get componentSelector() {
    return this._componentSelector;
  }
  public putComponentSelector(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecComponentSelector[] | cdktf.IResolvable) {
    this._componentSelector.internalValue = value;
  }
  public resetComponentSelector() {
    this._componentSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentSelectorInput() {
    return this._componentSelector.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecSelector[] | cdktf.IResolvable) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest k8s_apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest}
*/
export class DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest k8s_apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_component_resource_constraint_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoComponentResourceConstraintV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
