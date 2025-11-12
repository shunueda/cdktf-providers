// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#metadata DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata;
  /**
  * Specification of the desired behavior of the queue. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#spec DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec;
}
export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#annotations DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#labels DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#name DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: string[];
}

export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinityToTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinityToHclTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: string[]; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this.getListAttribute('preferred_during_scheduling_ignored_during_execution');
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: string[]) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution?: string[]; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this.getListAttribute('required_during_scheduling_ignored_during_execution');
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: string[]) {
    this._requiredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
}
export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: string[];
}

export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinityToTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinityToHclTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: string[]; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this.getListAttribute('preferred_during_scheduling_ignored_during_execution');
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: string[]) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution?: string[]; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this.getListAttribute('required_during_scheduling_ignored_during_execution');
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: string[]) {
    this._requiredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
}
export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity {
  /**
  * Describes nodegroup affinity scheduling rules for the queue(e.g. putting pods of the queue in the nodes of the nodegroup)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#node_group_affinity DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#node_group_affinity}
  */
  readonly nodeGroupAffinity?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity;
  /**
  * Describes nodegroup anti-affinity scheduling rules for the queue(e.g. avoid putting pods of the queue in the nodes of the nodegroup).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#node_group_anti_affinity DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#node_group_anti_affinity}
  */
  readonly nodeGroupAntiAffinity?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity;
}

export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityToTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_group_affinity: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinityToTerraform(struct!.nodeGroupAffinity),
    node_group_anti_affinity: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinityToTerraform(struct!.nodeGroupAntiAffinity),
  }
}


export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityToHclTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_group_affinity: {
      value: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinityToHclTerraform(struct!.nodeGroupAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity",
    },
    node_group_anti_affinity: {
      value: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinityToHclTerraform(struct!.nodeGroupAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroupAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupAffinity = this._nodeGroupAffinity?.internalValue;
    }
    if (this._nodeGroupAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupAntiAffinity = this._nodeGroupAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeGroupAffinity.internalValue = undefined;
      this._nodeGroupAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeGroupAffinity.internalValue = value.nodeGroupAffinity;
      this._nodeGroupAntiAffinity.internalValue = value.nodeGroupAntiAffinity;
    }
  }

  // node_group_affinity - computed: false, optional: true, required: false
  private _nodeGroupAffinity = new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinityOutputReference(this, "node_group_affinity");
  public get nodeGroupAffinity() {
    return this._nodeGroupAffinity;
  }
  public putNodeGroupAffinity(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAffinity) {
    this._nodeGroupAffinity.internalValue = value;
  }
  public resetNodeGroupAffinity() {
    this._nodeGroupAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupAffinityInput() {
    return this._nodeGroupAffinity.internalValue;
  }

  // node_group_anti_affinity - computed: false, optional: true, required: false
  private _nodeGroupAntiAffinity = new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinityOutputReference(this, "node_group_anti_affinity");
  public get nodeGroupAntiAffinity() {
    return this._nodeGroupAntiAffinity;
  }
  public putNodeGroupAntiAffinity(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityNodeGroupAntiAffinity) {
    this._nodeGroupAntiAffinity.internalValue = value;
  }
  public resetNodeGroupAntiAffinity() {
    this._nodeGroupAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupAntiAffinityInput() {
    return this._nodeGroupAntiAffinity.internalValue;
  }
}
export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters {
  /**
  * ResourceList is a set of (resource name, quantity) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#capacity DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#capacity}
  */
  readonly capacity?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#name DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#weight DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersToTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersToHclTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capacity),
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

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._name = value.name;
      this._weight = value.weight;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: { [key: string]: string }; 
  public get capacity() {
    return this.getStringMapAttribute('capacity');
  }
  public set capacity(value: { [key: string]: string }) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersOutputReference {
    return new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee {
  /**
  * The amount of cluster resource reserved for queue. Just set either 'percentage' or 'resource'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#resource DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#resource}
  */
  readonly resource?: { [key: string]: string };
}

export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuaranteeToTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
  }
}


export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuaranteeToHclTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuaranteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource = value.resource;
    }
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: { [key: string]: string }; 
  public get resource() {
    return this.getStringMapAttribute('resource');
  }
  public set resource(value: { [key: string]: string }) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec {
  /**
  * If specified, the pod owned by the queue will be scheduled with constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#affinity DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#affinity}
  */
  readonly affinity?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity;
  /**
  * ResourceList is a set of (resource name, quantity) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#capability DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#capability}
  */
  readonly capability?: { [key: string]: string };
  /**
  * The amount of resources configured by the user. This part of resource can be shared with other queues and reclaimed back.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#deserved DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#deserved}
  */
  readonly deserved?: { [key: string]: string };
  /**
  * extendCluster indicate the jobs in this Queue will be dispatched to these clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#extend_clusters DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#extend_clusters}
  */
  readonly extendClusters?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters[] | cdktf.IResolvable;
  /**
  * Guarantee indicate configuration about resource reservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#guarantee DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#guarantee}
  */
  readonly guarantee?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee;
  /**
  * Parent define the parent of queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#parent DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#parent}
  */
  readonly parent?: string;
  /**
  * Priority define the priority of queue. Higher values are prioritized for scheduling and considered later during reclamation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#priority DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Reclaimable indicate whether the queue can be reclaimed by other queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#reclaimable DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#reclaimable}
  */
  readonly reclaimable?: boolean | cdktf.IResolvable;
  /**
  * Type define the type of queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#type DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#weight DataK8SSchedulingVolcanoShQueueV1Beta1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecToTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityToTerraform(struct!.affinity),
    capability: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capability),
    deserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deserved),
    extend_clusters: cdktf.listMapper(dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersToTerraform, false)(struct!.extendClusters),
    guarantee: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuaranteeToTerraform(struct!.guarantee),
    parent: cdktf.stringToTerraform(struct!.parent),
    priority: cdktf.numberToTerraform(struct!.priority),
    reclaimable: cdktf.booleanToTerraform(struct!.reclaimable),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity",
    },
    capability: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capability),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extend_clusters: {
      value: cdktf.listMapperHcl(dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersToHclTerraform, false)(struct!.extendClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersList",
    },
    guarantee: {
      value: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuaranteeToHclTerraform(struct!.guarantee),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reclaimable: {
      value: cdktf.booleanToHclTerraform(struct!.reclaimable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._capability !== undefined) {
      hasAnyValues = true;
      internalValueResult.capability = this._capability;
    }
    if (this._deserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.deserved = this._deserved;
    }
    if (this._extendClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendClusters = this._extendClusters?.internalValue;
    }
    if (this._guarantee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guarantee = this._guarantee?.internalValue;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._reclaimable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimable = this._reclaimable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._capability = undefined;
      this._deserved = undefined;
      this._extendClusters.internalValue = undefined;
      this._guarantee.internalValue = undefined;
      this._parent = undefined;
      this._priority = undefined;
      this._reclaimable = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._capability = value.capability;
      this._deserved = value.deserved;
      this._extendClusters.internalValue = value.extendClusters;
      this._guarantee.internalValue = value.guarantee;
      this._parent = value.parent;
      this._priority = value.priority;
      this._reclaimable = value.reclaimable;
      this._type = value.type;
      this._weight = value.weight;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // capability - computed: false, optional: true, required: false
  private _capability?: { [key: string]: string }; 
  public get capability() {
    return this.getStringMapAttribute('capability');
  }
  public set capability(value: { [key: string]: string }) {
    this._capability = value;
  }
  public resetCapability() {
    this._capability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability;
  }

  // deserved - computed: false, optional: true, required: false
  private _deserved?: { [key: string]: string }; 
  public get deserved() {
    return this.getStringMapAttribute('deserved');
  }
  public set deserved(value: { [key: string]: string }) {
    this._deserved = value;
  }
  public resetDeserved() {
    this._deserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deservedInput() {
    return this._deserved;
  }

  // extend_clusters - computed: false, optional: true, required: false
  private _extendClusters = new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClustersList(this, "extend_clusters", false);
  public get extendClusters() {
    return this._extendClusters;
  }
  public putExtendClusters(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecExtendClusters[] | cdktf.IResolvable) {
    this._extendClusters.internalValue = value;
  }
  public resetExtendClusters() {
    this._extendClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendClustersInput() {
    return this._extendClusters.internalValue;
  }

  // guarantee - computed: false, optional: true, required: false
  private _guarantee = new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuaranteeOutputReference(this, "guarantee");
  public get guarantee() {
    return this._guarantee;
  }
  public putGuarantee(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecGuarantee) {
    this._guarantee.internalValue = value;
  }
  public resetGuarantee() {
    this._guarantee.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteeInput() {
    return this._guarantee.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // reclaimable - computed: false, optional: true, required: false
  private _reclaimable?: boolean | cdktf.IResolvable; 
  public get reclaimable() {
    return this.getBooleanAttribute('reclaimable');
  }
  public set reclaimable(value: boolean | cdktf.IResolvable) {
    this._reclaimable = value;
  }
  public resetReclaimable() {
    this._reclaimable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimableInput() {
    return this._reclaimable;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest k8s_scheduling_volcano_sh_queue_v1beta1_manifest}
*/
export class DataK8SSchedulingVolcanoShQueueV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scheduling_volcano_sh_queue_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchedulingVolcanoShQueueV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchedulingVolcanoShQueueV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSchedulingVolcanoShQueueV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchedulingVolcanoShQueueV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scheduling_volcano_sh_queue_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scheduling_volcano_sh_queue_v1beta1_manifest k8s_scheduling_volcano_sh_queue_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchedulingVolcanoShQueueV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scheduling_volcano_sh_queue_v1beta1_manifest',
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
  private _metadata = new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec) {
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
      metadata: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingVolcanoShQueueV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingVolcanoShQueueV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
