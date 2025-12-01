// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#metadata DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata;
  /**
  * Spec represents the desired behavior of ClusterOverridePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#spec DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec;
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#annotations DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#labels DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#name DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider {
  /**
  * Operator represents the operator which will apply on the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to annotations/labels of workload. Items in Value which will be appended after annotations/labels when Operator is 'add'. Items in Value which match in annotations/labels will be deleted when Operator is 'remove'. Items in Value which match in annotations/labels will be replaced when Operator is 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#container_name DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator represents the operator which will apply on the command/args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to command/args. Items in Value which will be appended after command/args when Operator is 'add'. Items in Value which match in command/args will be deleted when Operator is 'remove'. If Value is empty, then the command/args will remain the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#container_name DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator represents the operator which will apply on the command/args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to command/args. Items in Value which will be appended after command/args when Operator is 'add'. Items in Value which match in command/args will be deleted when Operator is 'remove'. If Value is empty, then the command/args will remain the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson {
  /**
  * Operator indicates the operation on target field. Available operators are: 'add', 'remove', and 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * SubPath specifies the relative location within the initial FieldPath where the operation should take place. The path uses RFC 6901 for navigating into nested structures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#sub_path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#sub_path}
  */
  readonly subPath: string;
  /**
  * Value is the new value to set for the specified field if the operation is 'add' or 'replace'. For 'remove' operation, this field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._subPath = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._subPath = value.subPath;
      this._value = value.value;
    }
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

  // sub_path - computed: false, optional: false, required: true
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml {
  /**
  * Operator indicates the operation on target field. Available operators are: 'add', 'remove', and 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * SubPath specifies the relative location within the initial FieldPath where the operation should take place. The path uses RFC 6901 for navigating into nested structures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#sub_path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#sub_path}
  */
  readonly subPath: string;
  /**
  * Value is the new value to set for the specified field if the operation is 'add' or 'replace'. For 'remove' operation, this field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._subPath = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._subPath = value.subPath;
      this._value = value.value;
    }
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

  // sub_path - computed: false, optional: false, required: true
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider {
  /**
  * FieldPath specifies the initial location in the instance document where the operation should take place. The path uses RFC 6901 for navigating into nested structures. For example, the path '/data/db-config.yaml' specifies the configuration data key named 'db-config.yaml' in a ConfigMap: '/data/db-config.yaml'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#field_path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
  /**
  * JSON represents the operations performed on the JSON document specified by the FieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#json DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#json}
  */
  readonly json?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson[] | cdktf.IResolvable;
  /**
  * YAML represents the operations performed on the YAML document specified by the FieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#yaml DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#yaml}
  */
  readonly yaml?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    json: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonToTerraform, false)(struct!.json),
    yaml: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlToTerraform, false)(struct!.yaml),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonList",
    },
    yaml: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlToHclTerraform, false)(struct!.yaml),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._yaml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaml = this._yaml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
      this._json.internalValue = undefined;
      this._yaml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
      this._json.internalValue = value.json;
      this._yaml.internalValue = value.yaml;
    }
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // yaml - computed: false, optional: true, required: false
  private _yaml = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYamlList(this, "yaml", false);
  public get yaml() {
    return this._yaml;
  }
  public putYaml(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderYaml[] | cdktf.IResolvable) {
    this._yaml.internalValue = value;
  }
  public resetYaml() {
    this._yaml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml.internalValue;
  }
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate {
  /**
  * Path indicates the path of target field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicateToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicateToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider {
  /**
  * Component is part of image name. Basically we presume an image can be made of '[registry/]repository[:tag]'. The registry could be: - registry.k8s.io - fictional.registry.example:10443 The repository could be: - kube-apiserver - fictional/nginx The tag cloud be: - latest - v1.19.1 - @sha256:dbcc1c35ac38df41fd2f5e4130b32ffdb93ebae8b3dbe638c23575912276fc9c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#component DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#component}
  */
  readonly component: string;
  /**
  * Operator represents the operator which will apply on the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Predicate filters images before applying the rule. Defaults to nil, in that case, the system will automatically detect image fields if the resource type is Pod, ReplicaSet, Deployment, StatefulSet, DaemonSet or Job by following rule: - Pod: /spec/containers/<N>/image - ReplicaSet: /spec/template/spec/containers/<N>/image - Deployment: /spec/template/spec/containers/<N>/image - DaemonSet: /spec/template/spec/containers/<N>/image - StatefulSet: /spec/template/spec/containers/<N>/image - Job: /spec/template/spec/containers/<N>/image In addition, all images will be processed if the resource object has more than one container. If not nil, only images matches the filters will be processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#predicate DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#predicate}
  */
  readonly predicate?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate;
  /**
  * Value to be applied to image. Must not be empty when operator is 'add' or 'replace'. Defaults to empty and ignored when operator is 'remove'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    operator: cdktf.stringToTerraform(struct!.operator),
    predicate: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicateToTerraform(struct!.predicate),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
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
    predicate: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicateToHclTerraform(struct!.predicate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate",
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._operator = undefined;
      this._predicate.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._operator = value.operator;
      this._predicate.internalValue = value.predicate;
      this._value = value.value;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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

  // predicate - computed: false, optional: true, required: false
  private _predicate = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderPredicate) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider {
  /**
  * Operator represents the operator which will apply on the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to annotations/labels of workload. Items in Value which will be appended after annotations/labels when Operator is 'add'. Items in Value which match in annotations/labels will be deleted when Operator is 'remove'. Items in Value which match in annotations/labels will be replaced when Operator is 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext {
  /**
  * Operator indicates the operation on target field. Available operators are: add, replace and remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Path indicates the path of target field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value to be applied to target field. Must be empty when operator is Remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._path = value.path;
      this._value = value.value;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders {
  /**
  * AnnotationsOverrider represents the rules dedicated to handling workload annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#annotations_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#annotations_overrider}
  */
  readonly annotationsOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider[] | cdktf.IResolvable;
  /**
  * ArgsOverrider represents the rules dedicated to handling container args
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#args_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#args_overrider}
  */
  readonly argsOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider[] | cdktf.IResolvable;
  /**
  * CommandOverrider represents the rules dedicated to handling container command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#command_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#command_overrider}
  */
  readonly commandOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider[] | cdktf.IResolvable;
  /**
  * FieldOverrider represents the rules dedicated to modifying a specific field in any Kubernetes resource. This allows changing a single field within the resource with multiple operations. It is designed to handle structured field values such as those found in ConfigMaps or Secrets. The current implementation supports JSON and YAML formats, but can easily be extended to support XML in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#field_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#field_overrider}
  */
  readonly fieldOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider[] | cdktf.IResolvable;
  /**
  * ImageOverrider represents the rules dedicated to handling image overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#image_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#image_overrider}
  */
  readonly imageOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider[] | cdktf.IResolvable;
  /**
  * LabelsOverrider represents the rules dedicated to handling workload labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#labels_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#labels_overrider}
  */
  readonly labelsOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider[] | cdktf.IResolvable;
  /**
  * Plaintext represents override rules defined with plaintext overriders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#plaintext DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#plaintext}
  */
  readonly plaintext?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderToTerraform, false)(struct!.annotationsOverrider),
    args_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderToTerraform, false)(struct!.argsOverrider),
    command_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderToTerraform, false)(struct!.commandOverrider),
    field_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderToTerraform, false)(struct!.fieldOverrider),
    image_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderToTerraform, false)(struct!.imageOverrider),
    labels_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderToTerraform, false)(struct!.labelsOverrider),
    plaintext: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextToTerraform, false)(struct!.plaintext),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderToHclTerraform, false)(struct!.annotationsOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderList",
    },
    args_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderToHclTerraform, false)(struct!.argsOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderList",
    },
    command_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderToHclTerraform, false)(struct!.commandOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderList",
    },
    field_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderToHclTerraform, false)(struct!.fieldOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderList",
    },
    image_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderToHclTerraform, false)(struct!.imageOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderList",
    },
    labels_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderToHclTerraform, false)(struct!.labelsOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderList",
    },
    plaintext: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextToHclTerraform, false)(struct!.plaintext),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationsOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationsOverrider = this._annotationsOverrider?.internalValue;
    }
    if (this._argsOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsOverrider = this._argsOverrider?.internalValue;
    }
    if (this._commandOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandOverrider = this._commandOverrider?.internalValue;
    }
    if (this._fieldOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldOverrider = this._fieldOverrider?.internalValue;
    }
    if (this._imageOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOverrider = this._imageOverrider?.internalValue;
    }
    if (this._labelsOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelsOverrider = this._labelsOverrider?.internalValue;
    }
    if (this._plaintext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationsOverrider.internalValue = undefined;
      this._argsOverrider.internalValue = undefined;
      this._commandOverrider.internalValue = undefined;
      this._fieldOverrider.internalValue = undefined;
      this._imageOverrider.internalValue = undefined;
      this._labelsOverrider.internalValue = undefined;
      this._plaintext.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationsOverrider.internalValue = value.annotationsOverrider;
      this._argsOverrider.internalValue = value.argsOverrider;
      this._commandOverrider.internalValue = value.commandOverrider;
      this._fieldOverrider.internalValue = value.fieldOverrider;
      this._imageOverrider.internalValue = value.imageOverrider;
      this._labelsOverrider.internalValue = value.labelsOverrider;
      this._plaintext.internalValue = value.plaintext;
    }
  }

  // annotations_overrider - computed: false, optional: true, required: false
  private _annotationsOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverriderList(this, "annotations_overrider", false);
  public get annotationsOverrider() {
    return this._annotationsOverrider;
  }
  public putAnnotationsOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOverrider[] | cdktf.IResolvable) {
    this._annotationsOverrider.internalValue = value;
  }
  public resetAnnotationsOverrider() {
    this._annotationsOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsOverriderInput() {
    return this._annotationsOverrider.internalValue;
  }

  // args_overrider - computed: false, optional: true, required: false
  private _argsOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverriderList(this, "args_overrider", false);
  public get argsOverrider() {
    return this._argsOverrider;
  }
  public putArgsOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOverrider[] | cdktf.IResolvable) {
    this._argsOverrider.internalValue = value;
  }
  public resetArgsOverrider() {
    this._argsOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsOverriderInput() {
    return this._argsOverrider.internalValue;
  }

  // command_overrider - computed: false, optional: true, required: false
  private _commandOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverriderList(this, "command_overrider", false);
  public get commandOverrider() {
    return this._commandOverrider;
  }
  public putCommandOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOverrider[] | cdktf.IResolvable) {
    this._commandOverrider.internalValue = value;
  }
  public resetCommandOverrider() {
    this._commandOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandOverriderInput() {
    return this._commandOverrider.internalValue;
  }

  // field_overrider - computed: false, optional: true, required: false
  private _fieldOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverriderList(this, "field_overrider", false);
  public get fieldOverrider() {
    return this._fieldOverrider;
  }
  public putFieldOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersFieldOverrider[] | cdktf.IResolvable) {
    this._fieldOverrider.internalValue = value;
  }
  public resetFieldOverrider() {
    this._fieldOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOverriderInput() {
    return this._fieldOverrider.internalValue;
  }

  // image_overrider - computed: false, optional: true, required: false
  private _imageOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverriderList(this, "image_overrider", false);
  public get imageOverrider() {
    return this._imageOverrider;
  }
  public putImageOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOverrider[] | cdktf.IResolvable) {
    this._imageOverrider.internalValue = value;
  }
  public resetImageOverrider() {
    this._imageOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOverriderInput() {
    return this._imageOverrider.internalValue;
  }

  // labels_overrider - computed: false, optional: true, required: false
  private _labelsOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverriderList(this, "labels_overrider", false);
  public get labelsOverrider() {
    return this._labelsOverrider;
  }
  public putLabelsOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOverrider[] | cdktf.IResolvable) {
    this._labelsOverrider.internalValue = value;
  }
  public resetLabelsOverrider() {
    this._labelsOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsOverriderInput() {
    return this._labelsOverrider.internalValue;
  }

  // plaintext - computed: false, optional: true, required: false
  private _plaintext = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintextList(this, "plaintext", false);
  public get plaintext() {
    return this._plaintext;
  }
  public putPlaintext(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersPlaintext[] | cdktf.IResolvable) {
    this._plaintext.internalValue = value;
  }
  public resetPlaintext() {
    this._plaintext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_labels DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsList",
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#cluster_names DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#exclude DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#field_selector DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#label_selector DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_selector: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector",
    },
    label_selector: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._fieldSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNames = undefined;
      this._exclude = undefined;
      this._fieldSelector.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNames = value.clusterNames;
      this._exclude = value.exclude;
      this._fieldSelector.internalValue = value.fieldSelector;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return this.getListAttribute('cluster_names');
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterFieldSelector) {
    this._fieldSelector.internalValue = value;
  }
  public resetFieldSelector() {
    this._fieldSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules {
  /**
  * Overriders represents the override rules that would apply on resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#overriders DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#overriders}
  */
  readonly overriders: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders;
  /**
  * TargetCluster defines restrictions on this override policy that only applies to resources propagated to the matching clusters. nil means matching all clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#target_cluster DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#target_cluster}
  */
  readonly targetCluster?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overriders: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToTerraform(struct!.overriders),
    target_cluster: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterToTerraform(struct!.targetCluster),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overriders: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToHclTerraform(struct!.overriders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders",
    },
    target_cluster: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterToHclTerraform(struct!.targetCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overriders = this._overriders?.internalValue;
    }
    if (this._targetCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCluster = this._targetCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overriders.internalValue = undefined;
      this._targetCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overriders.internalValue = value.overriders;
      this._targetCluster.internalValue = value.targetCluster;
    }
  }

  // overriders - computed: false, optional: false, required: true
  private _overriders = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersOutputReference(this, "overriders");
  public get overriders() {
    return this._overriders;
  }
  public putOverriders(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders) {
    this._overriders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overridersInput() {
    return this._overriders.internalValue;
  }

  // target_cluster - computed: false, optional: true, required: false
  private _targetCluster = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusterOutputReference(this, "target_cluster");
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetCluster) {
    this._targetCluster.internalValue = value;
  }
  public resetTargetCluster() {
    this._targetCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster.internalValue;
  }
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider {
  /**
  * Operator represents the operator which will apply on the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to annotations/labels of workload. Items in Value which will be appended after annotations/labels when Operator is 'add'. Items in Value which match in annotations/labels will be deleted when Operator is 'remove'. Items in Value which match in annotations/labels will be replaced when Operator is 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#container_name DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator represents the operator which will apply on the command/args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to command/args. Items in Value which will be appended after command/args when Operator is 'add'. Items in Value which match in command/args will be deleted when Operator is 'remove'. If Value is empty, then the command/args will remain the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#container_name DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator represents the operator which will apply on the command/args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to command/args. Items in Value which will be appended after command/args when Operator is 'add'. Items in Value which match in command/args will be deleted when Operator is 'remove'. If Value is empty, then the command/args will remain the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson {
  /**
  * Operator indicates the operation on target field. Available operators are: 'add', 'remove', and 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * SubPath specifies the relative location within the initial FieldPath where the operation should take place. The path uses RFC 6901 for navigating into nested structures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#sub_path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#sub_path}
  */
  readonly subPath: string;
  /**
  * Value is the new value to set for the specified field if the operation is 'add' or 'replace'. For 'remove' operation, this field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._subPath = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._subPath = value.subPath;
      this._value = value.value;
    }
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

  // sub_path - computed: false, optional: false, required: true
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml {
  /**
  * Operator indicates the operation on target field. Available operators are: 'add', 'remove', and 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * SubPath specifies the relative location within the initial FieldPath where the operation should take place. The path uses RFC 6901 for navigating into nested structures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#sub_path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#sub_path}
  */
  readonly subPath: string;
  /**
  * Value is the new value to set for the specified field if the operation is 'add' or 'replace'. For 'remove' operation, this field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._subPath = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._subPath = value.subPath;
      this._value = value.value;
    }
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

  // sub_path - computed: false, optional: false, required: true
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider {
  /**
  * FieldPath specifies the initial location in the instance document where the operation should take place. The path uses RFC 6901 for navigating into nested structures. For example, the path '/data/db-config.yaml' specifies the configuration data key named 'db-config.yaml' in a ConfigMap: '/data/db-config.yaml'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#field_path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
  /**
  * JSON represents the operations performed on the JSON document specified by the FieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#json DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#json}
  */
  readonly json?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson[] | cdktf.IResolvable;
  /**
  * YAML represents the operations performed on the YAML document specified by the FieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#yaml DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#yaml}
  */
  readonly yaml?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    json: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonToTerraform, false)(struct!.json),
    yaml: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlToTerraform, false)(struct!.yaml),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonList",
    },
    yaml: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlToHclTerraform, false)(struct!.yaml),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._yaml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaml = this._yaml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
      this._json.internalValue = undefined;
      this._yaml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
      this._json.internalValue = value.json;
      this._yaml.internalValue = value.yaml;
    }
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // yaml - computed: false, optional: true, required: false
  private _yaml = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYamlList(this, "yaml", false);
  public get yaml() {
    return this._yaml;
  }
  public putYaml(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderYaml[] | cdktf.IResolvable) {
    this._yaml.internalValue = value;
  }
  public resetYaml() {
    this._yaml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml.internalValue;
  }
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate {
  /**
  * Path indicates the path of target field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicateToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicateToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider {
  /**
  * Component is part of image name. Basically we presume an image can be made of '[registry/]repository[:tag]'. The registry could be: - registry.k8s.io - fictional.registry.example:10443 The repository could be: - kube-apiserver - fictional/nginx The tag cloud be: - latest - v1.19.1 - @sha256:dbcc1c35ac38df41fd2f5e4130b32ffdb93ebae8b3dbe638c23575912276fc9c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#component DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#component}
  */
  readonly component: string;
  /**
  * Operator represents the operator which will apply on the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Predicate filters images before applying the rule. Defaults to nil, in that case, the system will automatically detect image fields if the resource type is Pod, ReplicaSet, Deployment, StatefulSet, DaemonSet or Job by following rule: - Pod: /spec/containers/<N>/image - ReplicaSet: /spec/template/spec/containers/<N>/image - Deployment: /spec/template/spec/containers/<N>/image - DaemonSet: /spec/template/spec/containers/<N>/image - StatefulSet: /spec/template/spec/containers/<N>/image - Job: /spec/template/spec/containers/<N>/image In addition, all images will be processed if the resource object has more than one container. If not nil, only images matches the filters will be processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#predicate DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#predicate}
  */
  readonly predicate?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate;
  /**
  * Value to be applied to image. Must not be empty when operator is 'add' or 'replace'. Defaults to empty and ignored when operator is 'remove'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    operator: cdktf.stringToTerraform(struct!.operator),
    predicate: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicateToTerraform(struct!.predicate),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
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
    predicate: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicateToHclTerraform(struct!.predicate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate",
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._operator = undefined;
      this._predicate.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._operator = value.operator;
      this._predicate.internalValue = value.predicate;
      this._value = value.value;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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

  // predicate - computed: false, optional: true, required: false
  private _predicate = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderPredicate) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider {
  /**
  * Operator represents the operator which will apply on the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to annotations/labels of workload. Items in Value which will be appended after annotations/labels when Operator is 'add'. Items in Value which match in annotations/labels will be deleted when Operator is 'remove'. Items in Value which match in annotations/labels will be replaced when Operator is 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext {
  /**
  * Operator indicates the operation on target field. Available operators are: add, replace and remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Path indicates the path of target field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#path DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value to be applied to target field. Must be empty when operator is Remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#value DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._path = value.path;
      this._value = value.value;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders {
  /**
  * AnnotationsOverrider represents the rules dedicated to handling workload annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#annotations_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#annotations_overrider}
  */
  readonly annotationsOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider[] | cdktf.IResolvable;
  /**
  * ArgsOverrider represents the rules dedicated to handling container args
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#args_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#args_overrider}
  */
  readonly argsOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider[] | cdktf.IResolvable;
  /**
  * CommandOverrider represents the rules dedicated to handling container command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#command_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#command_overrider}
  */
  readonly commandOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider[] | cdktf.IResolvable;
  /**
  * FieldOverrider represents the rules dedicated to modifying a specific field in any Kubernetes resource. This allows changing a single field within the resource with multiple operations. It is designed to handle structured field values such as those found in ConfigMaps or Secrets. The current implementation supports JSON and YAML formats, but can easily be extended to support XML in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#field_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#field_overrider}
  */
  readonly fieldOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider[] | cdktf.IResolvable;
  /**
  * ImageOverrider represents the rules dedicated to handling image overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#image_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#image_overrider}
  */
  readonly imageOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider[] | cdktf.IResolvable;
  /**
  * LabelsOverrider represents the rules dedicated to handling workload labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#labels_overrider DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#labels_overrider}
  */
  readonly labelsOverrider?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider[] | cdktf.IResolvable;
  /**
  * Plaintext represents override rules defined with plaintext overriders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#plaintext DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#plaintext}
  */
  readonly plaintext?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderToTerraform, false)(struct!.annotationsOverrider),
    args_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderToTerraform, false)(struct!.argsOverrider),
    command_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderToTerraform, false)(struct!.commandOverrider),
    field_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderToTerraform, false)(struct!.fieldOverrider),
    image_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderToTerraform, false)(struct!.imageOverrider),
    labels_overrider: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderToTerraform, false)(struct!.labelsOverrider),
    plaintext: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextToTerraform, false)(struct!.plaintext),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderToHclTerraform, false)(struct!.annotationsOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderList",
    },
    args_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderToHclTerraform, false)(struct!.argsOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderList",
    },
    command_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderToHclTerraform, false)(struct!.commandOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderList",
    },
    field_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderToHclTerraform, false)(struct!.fieldOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderList",
    },
    image_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderToHclTerraform, false)(struct!.imageOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderList",
    },
    labels_overrider: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderToHclTerraform, false)(struct!.labelsOverrider),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderList",
    },
    plaintext: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextToHclTerraform, false)(struct!.plaintext),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationsOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationsOverrider = this._annotationsOverrider?.internalValue;
    }
    if (this._argsOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsOverrider = this._argsOverrider?.internalValue;
    }
    if (this._commandOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandOverrider = this._commandOverrider?.internalValue;
    }
    if (this._fieldOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldOverrider = this._fieldOverrider?.internalValue;
    }
    if (this._imageOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOverrider = this._imageOverrider?.internalValue;
    }
    if (this._labelsOverrider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelsOverrider = this._labelsOverrider?.internalValue;
    }
    if (this._plaintext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationsOverrider.internalValue = undefined;
      this._argsOverrider.internalValue = undefined;
      this._commandOverrider.internalValue = undefined;
      this._fieldOverrider.internalValue = undefined;
      this._imageOverrider.internalValue = undefined;
      this._labelsOverrider.internalValue = undefined;
      this._plaintext.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationsOverrider.internalValue = value.annotationsOverrider;
      this._argsOverrider.internalValue = value.argsOverrider;
      this._commandOverrider.internalValue = value.commandOverrider;
      this._fieldOverrider.internalValue = value.fieldOverrider;
      this._imageOverrider.internalValue = value.imageOverrider;
      this._labelsOverrider.internalValue = value.labelsOverrider;
      this._plaintext.internalValue = value.plaintext;
    }
  }

  // annotations_overrider - computed: false, optional: true, required: false
  private _annotationsOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverriderList(this, "annotations_overrider", false);
  public get annotationsOverrider() {
    return this._annotationsOverrider;
  }
  public putAnnotationsOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersAnnotationsOverrider[] | cdktf.IResolvable) {
    this._annotationsOverrider.internalValue = value;
  }
  public resetAnnotationsOverrider() {
    this._annotationsOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsOverriderInput() {
    return this._annotationsOverrider.internalValue;
  }

  // args_overrider - computed: false, optional: true, required: false
  private _argsOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverriderList(this, "args_overrider", false);
  public get argsOverrider() {
    return this._argsOverrider;
  }
  public putArgsOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersArgsOverrider[] | cdktf.IResolvable) {
    this._argsOverrider.internalValue = value;
  }
  public resetArgsOverrider() {
    this._argsOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsOverriderInput() {
    return this._argsOverrider.internalValue;
  }

  // command_overrider - computed: false, optional: true, required: false
  private _commandOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverriderList(this, "command_overrider", false);
  public get commandOverrider() {
    return this._commandOverrider;
  }
  public putCommandOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersCommandOverrider[] | cdktf.IResolvable) {
    this._commandOverrider.internalValue = value;
  }
  public resetCommandOverrider() {
    this._commandOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandOverriderInput() {
    return this._commandOverrider.internalValue;
  }

  // field_overrider - computed: false, optional: true, required: false
  private _fieldOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverriderList(this, "field_overrider", false);
  public get fieldOverrider() {
    return this._fieldOverrider;
  }
  public putFieldOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersFieldOverrider[] | cdktf.IResolvable) {
    this._fieldOverrider.internalValue = value;
  }
  public resetFieldOverrider() {
    this._fieldOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOverriderInput() {
    return this._fieldOverrider.internalValue;
  }

  // image_overrider - computed: false, optional: true, required: false
  private _imageOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverriderList(this, "image_overrider", false);
  public get imageOverrider() {
    return this._imageOverrider;
  }
  public putImageOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersImageOverrider[] | cdktf.IResolvable) {
    this._imageOverrider.internalValue = value;
  }
  public resetImageOverrider() {
    this._imageOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOverriderInput() {
    return this._imageOverrider.internalValue;
  }

  // labels_overrider - computed: false, optional: true, required: false
  private _labelsOverrider = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverriderList(this, "labels_overrider", false);
  public get labelsOverrider() {
    return this._labelsOverrider;
  }
  public putLabelsOverrider(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersLabelsOverrider[] | cdktf.IResolvable) {
    this._labelsOverrider.internalValue = value;
  }
  public resetLabelsOverrider() {
    this._labelsOverrider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsOverriderInput() {
    return this._labelsOverrider.internalValue;
  }

  // plaintext - computed: false, optional: true, required: false
  private _plaintext = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintextList(this, "plaintext", false);
  public get plaintext() {
    return this._plaintext;
  }
  public putPlaintext(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersPlaintext[] | cdktf.IResolvable) {
    this._plaintext.internalValue = value;
  }
  public resetPlaintext() {
    this._plaintext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_labels DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsList",
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors {
  /**
  * APIVersion represents the API version of the target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#api_version DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind represents the Kind of the target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#kind DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * A label query over a set of resources. If name is not empty, labelSelector will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#label_selector DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector;
  /**
  * Name of the target resource. Default is empty, which means selecting all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#name DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the target resource. Default is empty, which means inherit from the parent object scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#namespace DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable): any {
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
    label_selector: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector",
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable | undefined {
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
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector {
  /**
  * A list of field selector requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#key DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#operator DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#values DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_expressions DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#match_labels DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsList",
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

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#cluster_names DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * ExcludedClusters is the list of clusters to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#exclude DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FieldSelector is a filter to select member clusters by fields. The key(field) of the match expression should be 'provider', 'region', or 'zone', and the operator of the match expression should be 'In' or 'NotIn'. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#field_selector DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#field_selector}
  */
  readonly fieldSelector?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector;
  /**
  * LabelSelector is a filter to select member clusters by labels. If non-nil and non-empty, only the clusters match this filter will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#label_selector DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    field_selector: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorToTerraform(struct!.fieldSelector),
    label_selector: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_selector: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorToHclTerraform(struct!.fieldSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector",
    },
    label_selector: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._fieldSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNames = undefined;
      this._exclude = undefined;
      this._fieldSelector.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNames = value.clusterNames;
      this._exclude = value.exclude;
      this._fieldSelector.internalValue = value.fieldSelector;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return this.getListAttribute('cluster_names');
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelectorOutputReference(this, "field_selector");
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterFieldSelector) {
    this._fieldSelector.internalValue = value;
  }
  public resetFieldSelector() {
    this._fieldSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}
export interface DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec {
  /**
  * OverrideRules defines a collection of override rules on target clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#override_rules DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#override_rules}
  */
  readonly overrideRules?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules[] | cdktf.IResolvable;
  /**
  * Overriders represents the override rules that would apply on resources Deprecated: This filed is deprecated in v1.0 and please use the OverrideRules instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#overriders DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#overriders}
  */
  readonly overriders?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders;
  /**
  * ResourceSelectors restricts resource types that this override policy applies to. nil means matching all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#resource_selectors DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#resource_selectors}
  */
  readonly resourceSelectors?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors[] | cdktf.IResolvable;
  /**
  * TargetCluster defines restrictions on this override policy that only applies to resources propagated to the matching clusters. nil means matching all clusters. Deprecated: This filed is deprecated in v1.0 and please use the OverrideRules instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#target_cluster DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest#target_cluster}
  */
  readonly targetCluster?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster;
}

export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_rules: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesToTerraform, false)(struct!.overrideRules),
    overriders: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersToTerraform(struct!.overriders),
    resource_selectors: cdktf.listMapper(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsToTerraform, false)(struct!.resourceSelectors),
    target_cluster: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterToTerraform(struct!.targetCluster),
  }
}


export function dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_rules: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesToHclTerraform, false)(struct!.overrideRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesList",
    },
    overriders: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersToHclTerraform(struct!.overriders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders",
    },
    resource_selectors: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsToHclTerraform, false)(struct!.resourceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsList",
    },
    target_cluster: {
      value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterToHclTerraform(struct!.targetCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideRules = this._overrideRules?.internalValue;
    }
    if (this._overriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overriders = this._overriders?.internalValue;
    }
    if (this._resourceSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelectors = this._resourceSelectors?.internalValue;
    }
    if (this._targetCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCluster = this._targetCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideRules.internalValue = undefined;
      this._overriders.internalValue = undefined;
      this._resourceSelectors.internalValue = undefined;
      this._targetCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideRules.internalValue = value.overrideRules;
      this._overriders.internalValue = value.overriders;
      this._resourceSelectors.internalValue = value.resourceSelectors;
      this._targetCluster.internalValue = value.targetCluster;
    }
  }

  // override_rules - computed: false, optional: true, required: false
  private _overrideRules = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRulesList(this, "override_rules", false);
  public get overrideRules() {
    return this._overrideRules;
  }
  public putOverrideRules(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverrideRules[] | cdktf.IResolvable) {
    this._overrideRules.internalValue = value;
  }
  public resetOverrideRules() {
    this._overrideRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideRulesInput() {
    return this._overrideRules.internalValue;
  }

  // overriders - computed: false, optional: true, required: false
  private _overriders = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverridersOutputReference(this, "overriders");
  public get overriders() {
    return this._overriders;
  }
  public putOverriders(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOverriders) {
    this._overriders.internalValue = value;
  }
  public resetOverriders() {
    this._overriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridersInput() {
    return this._overriders.internalValue;
  }

  // resource_selectors - computed: false, optional: true, required: false
  private _resourceSelectors = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectorsList(this, "resource_selectors", false);
  public get resourceSelectors() {
    return this._resourceSelectors;
  }
  public putResourceSelectors(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecResourceSelectors[] | cdktf.IResolvable) {
    this._resourceSelectors.internalValue = value;
  }
  public resetResourceSelectors() {
    this._resourceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorsInput() {
    return this._resourceSelectors.internalValue;
  }

  // target_cluster - computed: false, optional: true, required: false
  private _targetCluster = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetClusterOutputReference(this, "target_cluster");
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecTargetCluster) {
    this._targetCluster.internalValue = value;
  }
  public resetTargetCluster() {
    this._targetCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest k8s_policy_karmada_io_cluster_override_policy_v1alpha1_manifest}
*/
export class DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_policy_karmada_io_cluster_override_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_policy_karmada_io_cluster_override_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/policy_karmada_io_cluster_override_policy_v1alpha1_manifest k8s_policy_karmada_io_cluster_override_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_policy_karmada_io_cluster_override_policy_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKarmadaIoClusterOverridePolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
