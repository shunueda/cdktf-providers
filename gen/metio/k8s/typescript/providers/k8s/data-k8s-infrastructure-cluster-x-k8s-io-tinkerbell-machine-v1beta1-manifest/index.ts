// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata;
  /**
  * TinkerbellMachineSpec defines the desired state of TinkerbellMachine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#namespace DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#key DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#operator DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#values DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#match_expressions DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#match_labels DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm {
  /**
  * LabelSelector is used to select for particular hardware by label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#label_selector DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#label_selector}
  */
  readonly labelSelector: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: false, required: true
  private _labelSelector = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred {
  /**
  * HardwareAffinityTerm is the term associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#hardware_affinity_term DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#hardware_affinity_term}
  */
  readonly hardwareAffinityTerm: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm;
  /**
  * Weight associated with matching the corresponding hardwareAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#weight DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_affinity_term: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermToTerraform(struct!.hardwareAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_affinity_term: {
      value: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermToHclTerraform(struct!.hardwareAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm",
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareAffinityTerm = this._hardwareAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareAffinityTerm.internalValue = value.hardwareAffinityTerm;
      this._weight = value.weight;
    }
  }

  // hardware_affinity_term - computed: false, optional: false, required: true
  private _hardwareAffinityTerm = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTermOutputReference(this, "hardware_affinity_term");
  public get hardwareAffinityTerm() {
    return this._hardwareAffinityTerm;
  }
  public putHardwareAffinityTerm(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredHardwareAffinityTerm) {
    this._hardwareAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareAffinityTermInput() {
    return this._hardwareAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#key DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#operator DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#values DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#match_expressions DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#match_labels DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired {
  /**
  * LabelSelector is used to select for particular hardware by label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#label_selector DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#label_selector}
  */
  readonly labelSelector: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: false, required: true
  private _labelSelector = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity {
  /**
  * Preferred are the preferred hardware affinity terms. Hardware matching these terms are preferred according to the weights provided, but are not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#preferred DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#preferred}
  */
  readonly preferred?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred[] | cdktf.IResolvable;
  /**
  * Required are the required hardware affinity terms. The terms are OR'd together, hardware must match one term to be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#required DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#required}
  */
  readonly required?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredToTerraform, false)(struct!.preferred),
    required: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredToTerraform, false)(struct!.required),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredToHclTerraform, false)(struct!.preferred),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredList",
    },
    required: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredToHclTerraform, false)(struct!.required),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred?.internalValue;
    }
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferred.internalValue = undefined;
      this._required.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferred.internalValue = value.preferred;
      this._required.internalValue = value.required;
    }
  }

  // preferred - computed: false, optional: true, required: false
  private _preferred = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferredList(this, "preferred", false);
  public get preferred() {
    return this._preferred;
  }
  public putPreferred(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityPreferred[] | cdktf.IResolvable) {
    this._preferred.internalValue = value;
  }
  public resetPreferred() {
    this._preferred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequiredList(this, "required", false);
  public get required() {
    return this._required;
  }
  public putRequired(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityRequired[] | cdktf.IResolvable) {
    this._required.internalValue = value;
  }
  public resetRequired() {
    this._required.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec {
  /**
  * HardwareAffinity allows filtering for hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#hardware_affinity DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#hardware_affinity}
  */
  readonly hardwareAffinity?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity;
  /**
  * Those fields are set programmatically, but they cannot be re-constructed from 'state of the world', so we put them in spec instead of status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#hardware_name DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#hardware_name}
  */
  readonly hardwareName?: string;
  /**
  * ImageLookupBaseRegistry is the base Registry URL that is used for pulling images, if not set, the default will be to use ghcr.io/tinkerbell/cluster-api-provider-tinkerbell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#image_lookup_base_registry DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#image_lookup_base_registry}
  */
  readonly imageLookupBaseRegistry?: string;
  /**
  * ImageLookupFormat is the URL naming format to use for machine images when a machine does not specify. When set, this will be used for all cluster machines unless a machine specifies a different ImageLookupFormat. Supports substitutions for {{.BaseRegistry}}, {{.OSDistro}}, {{.OSVersion}} and {{.KubernetesVersion}} with the basse URL, OS distribution, OS version, and kubernetes version, respectively. BaseRegistry will be the value in ImageLookupBaseRegistry or ghcr.io/tinkerbell/cluster-api-provider-tinkerbell (the default), OSDistro will be the value in ImageLookupOSDistro or ubuntu (the default), OSVersion will be the value in ImageLookupOSVersion or default based on the OSDistro (if known), and the kubernetes version as defined by the packages produced by kubernetes/release: v1.13.0, v1.12.5-mybuild.1, or v1.17.3. For example, the default image format of {{.BaseRegistry}}/{{.OSDistro}}-{{.OSVersion}}:{{.KubernetesVersion}}.gz will attempt to pull the image from that location. See also: https://golang.org/pkg/text/template/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#image_lookup_format DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#image_lookup_format}
  */
  readonly imageLookupFormat?: string;
  /**
  * ImageLookupOSDistro is the name of the OS distro to use when fetching machine images, if not set it will default to ubuntu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#image_lookup_os_distro DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#image_lookup_os_distro}
  */
  readonly imageLookupOsDistro?: string;
  /**
  * ImageLookupOSVersion is the version of the OS distribution to use when fetching machine images. If not set it will default based on ImageLookupOSDistro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#image_lookup_os_version DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#image_lookup_os_version}
  */
  readonly imageLookupOsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#provider_id DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * TemplateOverride overrides the default Tinkerbell template used by CAPT. You can learn more about Tinkerbell templates here: https://tinkerbell.org/docs/concepts/templates/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#template_override DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest#template_override}
  */
  readonly templateOverride?: string;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_affinity: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityToTerraform(struct!.hardwareAffinity),
    hardware_name: cdktf.stringToTerraform(struct!.hardwareName),
    image_lookup_base_registry: cdktf.stringToTerraform(struct!.imageLookupBaseRegistry),
    image_lookup_format: cdktf.stringToTerraform(struct!.imageLookupFormat),
    image_lookup_os_distro: cdktf.stringToTerraform(struct!.imageLookupOsDistro),
    image_lookup_os_version: cdktf.stringToTerraform(struct!.imageLookupOsVersion),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    template_override: cdktf.stringToTerraform(struct!.templateOverride),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_affinity: {
      value: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityToHclTerraform(struct!.hardwareAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity",
    },
    hardware_name: {
      value: cdktf.stringToHclTerraform(struct!.hardwareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_lookup_base_registry: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupBaseRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_lookup_format: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_lookup_os_distro: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupOsDistro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_lookup_os_version: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupOsVersion),
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
    template_override: {
      value: cdktf.stringToHclTerraform(struct!.templateOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareAffinity = this._hardwareAffinity?.internalValue;
    }
    if (this._hardwareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareName = this._hardwareName;
    }
    if (this._imageLookupBaseRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupBaseRegistry = this._imageLookupBaseRegistry;
    }
    if (this._imageLookupFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupFormat = this._imageLookupFormat;
    }
    if (this._imageLookupOsDistro !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupOsDistro = this._imageLookupOsDistro;
    }
    if (this._imageLookupOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupOsVersion = this._imageLookupOsVersion;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._templateOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateOverride = this._templateOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareAffinity.internalValue = undefined;
      this._hardwareName = undefined;
      this._imageLookupBaseRegistry = undefined;
      this._imageLookupFormat = undefined;
      this._imageLookupOsDistro = undefined;
      this._imageLookupOsVersion = undefined;
      this._providerId = undefined;
      this._templateOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareAffinity.internalValue = value.hardwareAffinity;
      this._hardwareName = value.hardwareName;
      this._imageLookupBaseRegistry = value.imageLookupBaseRegistry;
      this._imageLookupFormat = value.imageLookupFormat;
      this._imageLookupOsDistro = value.imageLookupOsDistro;
      this._imageLookupOsVersion = value.imageLookupOsVersion;
      this._providerId = value.providerId;
      this._templateOverride = value.templateOverride;
    }
  }

  // hardware_affinity - computed: false, optional: true, required: false
  private _hardwareAffinity = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinityOutputReference(this, "hardware_affinity");
  public get hardwareAffinity() {
    return this._hardwareAffinity;
  }
  public putHardwareAffinity(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecHardwareAffinity) {
    this._hardwareAffinity.internalValue = value;
  }
  public resetHardwareAffinity() {
    this._hardwareAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareAffinityInput() {
    return this._hardwareAffinity.internalValue;
  }

  // hardware_name - computed: false, optional: true, required: false
  private _hardwareName?: string; 
  public get hardwareName() {
    return this.getStringAttribute('hardware_name');
  }
  public set hardwareName(value: string) {
    this._hardwareName = value;
  }
  public resetHardwareName() {
    this._hardwareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareNameInput() {
    return this._hardwareName;
  }

  // image_lookup_base_registry - computed: false, optional: true, required: false
  private _imageLookupBaseRegistry?: string; 
  public get imageLookupBaseRegistry() {
    return this.getStringAttribute('image_lookup_base_registry');
  }
  public set imageLookupBaseRegistry(value: string) {
    this._imageLookupBaseRegistry = value;
  }
  public resetImageLookupBaseRegistry() {
    this._imageLookupBaseRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupBaseRegistryInput() {
    return this._imageLookupBaseRegistry;
  }

  // image_lookup_format - computed: false, optional: true, required: false
  private _imageLookupFormat?: string; 
  public get imageLookupFormat() {
    return this.getStringAttribute('image_lookup_format');
  }
  public set imageLookupFormat(value: string) {
    this._imageLookupFormat = value;
  }
  public resetImageLookupFormat() {
    this._imageLookupFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupFormatInput() {
    return this._imageLookupFormat;
  }

  // image_lookup_os_distro - computed: false, optional: true, required: false
  private _imageLookupOsDistro?: string; 
  public get imageLookupOsDistro() {
    return this.getStringAttribute('image_lookup_os_distro');
  }
  public set imageLookupOsDistro(value: string) {
    this._imageLookupOsDistro = value;
  }
  public resetImageLookupOsDistro() {
    this._imageLookupOsDistro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupOsDistroInput() {
    return this._imageLookupOsDistro;
  }

  // image_lookup_os_version - computed: false, optional: true, required: false
  private _imageLookupOsVersion?: string; 
  public get imageLookupOsVersion() {
    return this.getStringAttribute('image_lookup_os_version');
  }
  public set imageLookupOsVersion(value: string) {
    this._imageLookupOsVersion = value;
  }
  public resetImageLookupOsVersion() {
    this._imageLookupOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupOsVersionInput() {
    return this._imageLookupOsVersion;
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

  // template_override - computed: false, optional: true, required: false
  private _templateOverride?: string; 
  public get templateOverride() {
    return this.getStringAttribute('template_override');
  }
  public set templateOverride(value: string) {
    this._templateOverride = value;
  }
  public resetTemplateOverride() {
    this._templateOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateOverrideInput() {
    return this._templateOverride;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_tinkerbell_machine_v1beta1_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellMachineV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
