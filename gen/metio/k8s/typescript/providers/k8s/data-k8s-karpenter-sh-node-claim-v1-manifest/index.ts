// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKarpenterShNodeClaimV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#metadata DataK8SKarpenterShNodeClaimV1Manifest#metadata}
  */
  readonly metadata: DataK8SKarpenterShNodeClaimV1ManifestMetadata;
  /**
  * NodeClaimSpec describes the desired state of the NodeClaim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#spec DataK8SKarpenterShNodeClaimV1Manifest#spec}
  */
  readonly spec: DataK8SKarpenterShNodeClaimV1ManifestSpec;
}
export interface DataK8SKarpenterShNodeClaimV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#annotations DataK8SKarpenterShNodeClaimV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#labels DataK8SKarpenterShNodeClaimV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#name DataK8SKarpenterShNodeClaimV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKarpenterShNodeClaimV1ManifestMetadataToTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKarpenterShNodeClaimV1ManifestMetadataToHclTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodeClaimV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodeClaimV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodeClaimV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#group DataK8SKarpenterShNodeClaimV1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#kind DataK8SKarpenterShNodeClaimV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#name DataK8SKarpenterShNodeClaimV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRefToTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRefToHclTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
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
export interface DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#key DataK8SKarpenterShNodeClaimV1Manifest#key}
  */
  readonly key: string;
  /**
  * This field is ALPHA and can be dropped or replaced at any time MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#min_values DataK8SKarpenterShNodeClaimV1Manifest#min_values}
  */
  readonly minValues?: number;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#operator DataK8SKarpenterShNodeClaimV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#values DataK8SKarpenterShNodeClaimV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsToTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    min_values: cdktf.numberToTerraform(struct!.minValues),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsToHclTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_values: {
      value: cdktf.numberToHclTerraform(struct!.minValues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._minValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValues = this._minValues;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._minValues = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._minValues = value.minValues;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // min_values - computed: false, optional: true, required: false
  private _minValues?: number; 
  public get minValues() {
    return this.getNumberAttribute('min_values');
  }
  public set minValues(value: number) {
    this._minValues = value;
  }
  public resetMinValues() {
    this._minValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValuesInput() {
    return this._minValues;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsOutputReference {
    return new DataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodeClaimV1ManifestSpecResources {
  /**
  * Requests describes the minimum required resources for the NodeClaim to launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#requests DataK8SKarpenterShNodeClaimV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKarpenterShNodeClaimV1ManifestSpecResourcesToTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKarpenterShNodeClaimV1ManifestSpecResourcesToHclTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodeClaimV1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodeClaimV1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requests = value.requests;
    }
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#effect DataK8SKarpenterShNodeClaimV1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#key DataK8SKarpenterShNodeClaimV1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#time_added DataK8SKarpenterShNodeClaimV1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#value DataK8SKarpenterShNodeClaimV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsToTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsToHclTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsOutputReference {
    return new DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodeClaimV1ManifestSpecTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#effect DataK8SKarpenterShNodeClaimV1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#key DataK8SKarpenterShNodeClaimV1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#time_added DataK8SKarpenterShNodeClaimV1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#value DataK8SKarpenterShNodeClaimV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKarpenterShNodeClaimV1ManifestSpecTaintsToTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKarpenterShNodeClaimV1ManifestSpecTaintsToHclTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodeClaimV1ManifestSpecTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodeClaimV1ManifestSpecTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodeClaimV1ManifestSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodeClaimV1ManifestSpecTaintsOutputReference {
    return new DataK8SKarpenterShNodeClaimV1ManifestSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodeClaimV1ManifestSpec {
  /**
  * ExpireAfter is the duration the controller will wait before terminating a node, measured from when the node is created. This is useful to implement features like eventually consistent node upgrade, memory leak protection, and disruption testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#expire_after DataK8SKarpenterShNodeClaimV1Manifest#expire_after}
  */
  readonly expireAfter?: string;
  /**
  * NodeClassRef is a reference to an object that defines provider specific configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#node_class_ref DataK8SKarpenterShNodeClaimV1Manifest#node_class_ref}
  */
  readonly nodeClassRef: DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef;
  /**
  * Requirements are layered with GetLabels and applied to every node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#requirements DataK8SKarpenterShNodeClaimV1Manifest#requirements}
  */
  readonly requirements: DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements[] | cdktf.IResolvable;
  /**
  * Resources models the resource requirements for the NodeClaim to launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#resources DataK8SKarpenterShNodeClaimV1Manifest#resources}
  */
  readonly resources?: DataK8SKarpenterShNodeClaimV1ManifestSpecResources;
  /**
  * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by daemonsets to allow initialization and enforce startup ordering. StartupTaints are ignored for provisioning purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#startup_taints DataK8SKarpenterShNodeClaimV1Manifest#startup_taints}
  */
  readonly startupTaints?: DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints[] | cdktf.IResolvable;
  /**
  * Taints will be applied to the NodeClaim's node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#taints DataK8SKarpenterShNodeClaimV1Manifest#taints}
  */
  readonly taints?: DataK8SKarpenterShNodeClaimV1ManifestSpecTaints[] | cdktf.IResolvable;
  /**
  * TerminationGracePeriod is the maximum duration the controller will wait before forcefully deleting the pods on a node, measured from when deletion is first initiated. Warning: this feature takes precedence over a Pod's terminationGracePeriodSeconds value, and bypasses any blocked PDBs or the karpenter.sh/do-not-disrupt annotation. This field is intended to be used by cluster administrators to enforce that nodes can be cycled within a given time period. When set, drifted nodes will begin draining even if there are pods blocking eviction. Draining will respect PDBs and the do-not-disrupt annotation until the TGP is reached. Karpenter will preemptively delete pods so their terminationGracePeriodSeconds align with the node's terminationGracePeriod. If a pod would be terminated without being granted its full terminationGracePeriodSeconds prior to the node timeout, that pod will be deleted at T = node timeout - pod terminationGracePeriodSeconds. The feature can also be used to allow maximum time limits for long-running jobs which can delay node termination with preStop hooks. If left undefined, the controller will wait indefinitely for pods to be drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#termination_grace_period DataK8SKarpenterShNodeClaimV1Manifest#termination_grace_period}
  */
  readonly terminationGracePeriod?: string;
}

export function dataK8SKarpenterShNodeClaimV1ManifestSpecToTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
    node_class_ref: dataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRefToTerraform(struct!.nodeClassRef),
    requirements: cdktf.listMapper(dataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsToTerraform, false)(struct!.requirements),
    resources: dataK8SKarpenterShNodeClaimV1ManifestSpecResourcesToTerraform(struct!.resources),
    startup_taints: cdktf.listMapper(dataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsToTerraform, false)(struct!.startupTaints),
    taints: cdktf.listMapper(dataK8SKarpenterShNodeClaimV1ManifestSpecTaintsToTerraform, false)(struct!.taints),
    termination_grace_period: cdktf.stringToTerraform(struct!.terminationGracePeriod),
  }
}


export function dataK8SKarpenterShNodeClaimV1ManifestSpecToHclTerraform(struct?: DataK8SKarpenterShNodeClaimV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_class_ref: {
      value: dataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRefToHclTerraform(struct!.nodeClassRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef",
    },
    requirements: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsToHclTerraform, false)(struct!.requirements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsList",
    },
    resources: {
      value: dataK8SKarpenterShNodeClaimV1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodeClaimV1ManifestSpecResources",
    },
    startup_taints: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsToHclTerraform, false)(struct!.startupTaints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsList",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodeClaimV1ManifestSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodeClaimV1ManifestSpecTaintsList",
    },
    termination_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.terminationGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodeClaimV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodeClaimV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    if (this._nodeClassRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClassRef = this._nodeClassRef?.internalValue;
    }
    if (this._requirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._startupTaints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupTaints = this._startupTaints?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._terminationGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriod = this._terminationGracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodeClaimV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expireAfter = undefined;
      this._nodeClassRef.internalValue = undefined;
      this._requirements.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._startupTaints.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._terminationGracePeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expireAfter = value.expireAfter;
      this._nodeClassRef.internalValue = value.nodeClassRef;
      this._requirements.internalValue = value.requirements;
      this._resources.internalValue = value.resources;
      this._startupTaints.internalValue = value.startupTaints;
      this._taints.internalValue = value.taints;
      this._terminationGracePeriod = value.terminationGracePeriod;
    }
  }

  // expire_after - computed: false, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }

  // node_class_ref - computed: false, optional: false, required: true
  private _nodeClassRef = new DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRefOutputReference(this, "node_class_ref");
  public get nodeClassRef() {
    return this._nodeClassRef;
  }
  public putNodeClassRef(value: DataK8SKarpenterShNodeClaimV1ManifestSpecNodeClassRef) {
    this._nodeClassRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassRefInput() {
    return this._nodeClassRef.internalValue;
  }

  // requirements - computed: false, optional: false, required: true
  private _requirements = new DataK8SKarpenterShNodeClaimV1ManifestSpecRequirementsList(this, "requirements", false);
  public get requirements() {
    return this._requirements;
  }
  public putRequirements(value: DataK8SKarpenterShNodeClaimV1ManifestSpecRequirements[] | cdktf.IResolvable) {
    this._requirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKarpenterShNodeClaimV1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKarpenterShNodeClaimV1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // startup_taints - computed: false, optional: true, required: false
  private _startupTaints = new DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaintsList(this, "startup_taints", false);
  public get startupTaints() {
    return this._startupTaints;
  }
  public putStartupTaints(value: DataK8SKarpenterShNodeClaimV1ManifestSpecStartupTaints[] | cdktf.IResolvable) {
    this._startupTaints.internalValue = value;
  }
  public resetStartupTaints() {
    this._startupTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupTaintsInput() {
    return this._startupTaints.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SKarpenterShNodeClaimV1ManifestSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SKarpenterShNodeClaimV1ManifestSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // termination_grace_period - computed: false, optional: true, required: false
  private _terminationGracePeriod?: string; 
  public get terminationGracePeriod() {
    return this.getStringAttribute('termination_grace_period');
  }
  public set terminationGracePeriod(value: string) {
    this._terminationGracePeriod = value;
  }
  public resetTerminationGracePeriod() {
    this._terminationGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodInput() {
    return this._terminationGracePeriod;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest k8s_karpenter_sh_node_claim_v1_manifest}
*/
export class DataK8SKarpenterShNodeClaimV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_karpenter_sh_node_claim_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKarpenterShNodeClaimV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKarpenterShNodeClaimV1Manifest to import
  * @param importFromId The id of the existing DataK8SKarpenterShNodeClaimV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKarpenterShNodeClaimV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_karpenter_sh_node_claim_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_claim_v1_manifest k8s_karpenter_sh_node_claim_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKarpenterShNodeClaimV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKarpenterShNodeClaimV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_karpenter_sh_node_claim_v1_manifest',
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
  private _metadata = new DataK8SKarpenterShNodeClaimV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKarpenterShNodeClaimV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKarpenterShNodeClaimV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKarpenterShNodeClaimV1ManifestSpec) {
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
      metadata: dataK8SKarpenterShNodeClaimV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKarpenterShNodeClaimV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKarpenterShNodeClaimV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterShNodeClaimV1ManifestMetadata",
      },
      spec: {
        value: dataK8SKarpenterShNodeClaimV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterShNodeClaimV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
