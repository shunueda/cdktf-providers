// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#metadata DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#spec DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec;
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#namespace DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations {
  /**
  * Operator specifies the operation. If omitted, defaults to 'overwrite'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the value(s) that will be applied to annotations/labels of resource. If Operator is 'addIfAbsent', items in Value (empty is not allowed) will be added in annotations/labels. - For 'addIfAbsent' Operator, the keys in Value cannot conflict with annotations/labels. If Operator is 'overwrite', items in Value which match in annotations/labels will be replaced. If Operator is 'delete', items in Value which match in annotations/labels will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs {
  /**
  * ContainerName targets the specified container or init container in the pod template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#container_name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator specifies the operation. If omitted, defaults to 'overwrite'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the value(s) that will be applied to command/args of ContainerName. If Operator is 'append', items in Value (empty is not allowed) will be appended to command/args. If Operator is 'overwrite', current command/args of ContainerName will be completely replaced by Value. If Operator is 'delete', items in Value that match in command/args will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value: string[];
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand {
  /**
  * ContainerName targets the specified container or init container in the pod template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#container_name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator specifies the operation. If omitted, defaults to 'overwrite'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the value(s) that will be applied to command/args of ContainerName. If Operator is 'append', items in Value (empty is not allowed) will be appended to command/args. If Operator is 'overwrite', current command/args of ContainerName will be completely replaced by Value. If Operator is 'delete', items in Value that match in command/args will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value: string[];
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#key DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#optional DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#api_version DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#field_path DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRefToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRefToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
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
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#container_name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#divisor DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#resource DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRefToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef | cdktf.IResolvable): any {
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
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#key DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#optional DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRefToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#config_map_key_ref DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#field_ref DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#resource_field_ref DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#secret_key_ref DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value_from DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    value_from: {
      value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs {
  /**
  * ContainerName targets the specified container or init container in the pod template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#container_name DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator specifies the operation. If omitted, defaults to 'overwrite'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * List of environment variables to set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueToTerraform, false)(struct!.value),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs | cdktf.IResolvable | undefined {
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
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._operator = undefined;
      this._value.internalValue = undefined;
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
      this._value.internalValue = value.value;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations {
  /**
  * ImageComponent is the part of the image to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#image_component DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#image_component}
  */
  readonly imageComponent: string;
  /**
  * Operator specifies the operation. If omitted, defaults to 'overwrite'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the value required by the operation. For 'addIfAbsent' Operator, the old value of ImageComponent should be empty, and the Value shouldn't be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_component: cdktf.stringToTerraform(struct!.imageComponent),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_component: {
      value: cdktf.stringToHclTerraform(struct!.imageComponent),
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageComponent = this._imageComponent;
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageComponent = undefined;
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
      this._imageComponent = value.imageComponent;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // image_component - computed: false, optional: false, required: true
  private _imageComponent?: string; 
  public get imageComponent() {
    return this.getStringAttribute('image_component');
  }
  public set imageComponent(value: string) {
    this._imageComponent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageComponentInput() {
    return this._imageComponent;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage {
  /**
  * ContainerNames are ignored when ImagePath is set. If empty, the image override rule applies to all containers. Otherwise, this override targets the specified container(s) or init container(s) in the pod template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#container_names DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#container_names}
  */
  readonly containerNames?: string[];
  /**
  * ImagePath indicates the image path to target. For Example: /spec/template/spec/containers/0/image If empty, the system will automatically resolve the image path if the resource type is Pod, CronJob, Deployment, StatefulSet, DaemonSet or Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#image_path DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#image_path}
  */
  readonly imagePath?: string;
  /**
  * Operations are the specific operations to be performed on ContainerNames or ImagePath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operations DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operations}
  */
  readonly operations: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerNames),
    image_path: cdktf.stringToTerraform(struct!.imagePath),
    operations: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsToTerraform, false)(struct!.operations),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_path: {
      value: cdktf.stringToHclTerraform(struct!.imagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsToHclTerraform, false)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNames = this._containerNames;
    }
    if (this._imagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePath = this._imagePath;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerNames = undefined;
      this._imagePath = undefined;
      this._operations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerNames = value.containerNames;
      this._imagePath = value.imagePath;
      this._operations.internalValue = value.operations;
    }
  }

  // container_names - computed: false, optional: true, required: false
  private _containerNames?: string[]; 
  public get containerNames() {
    return this.getListAttribute('container_names');
  }
  public set containerNames(value: string[]) {
    this._containerNames = value;
  }
  public resetContainerNames() {
    this._containerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNamesInput() {
    return this._containerNames;
  }

  // image_path - computed: false, optional: true, required: false
  private _imagePath?: string; 
  public get imagePath() {
    return this.getStringAttribute('image_path');
  }
  public set imagePath(value: string) {
    this._imagePath = value;
  }
  public resetImagePath() {
    this._imagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePathInput() {
    return this._imagePath;
  }

  // operations - computed: false, optional: false, required: true
  private _operations = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch {
  /**
  * Operator specifies the operation. If omitted, defaults to 'replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Path is a JSON pointer (RFC 6901) specifying the location within the resource document where the operation is performed. Each key in the path should be prefixed with '/', while '~' and '/' should be escaped as '~0' and '~1' respectively. For example, to add a label 'kubeadmiral.io/label', the path should be '/metadata/labels/kubeadmiral.io~1label'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#path DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value is the value(s) required by the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels {
  /**
  * Operator specifies the operation. If omitted, defaults to 'overwrite'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the value(s) that will be applied to annotations/labels of resource. If Operator is 'addIfAbsent', items in Value (empty is not allowed) will be added in annotations/labels. - For 'addIfAbsent' Operator, the keys in Value cannot conflict with annotations/labels. If Operator is 'overwrite', items in Value which match in annotations/labels will be replaced. If Operator is 'delete', items in Value which match in annotations/labels will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders {
  /**
  * Annotation specifies overriders that apply to the resource annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations[] | cdktf.IResolvable;
  /**
  * Args specifies overriders that apply to the container arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#args DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#args}
  */
  readonly args?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs[] | cdktf.IResolvable;
  /**
  * Command specifies overriders that apply to the container commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#command DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#command}
  */
  readonly command?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand[] | cdktf.IResolvable;
  /**
  * Envs specifies overriders that apply to the container envs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#envs DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#envs}
  */
  readonly envs?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs[] | cdktf.IResolvable;
  /**
  * Image specifies the overriders that apply to the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#image DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage[] | cdktf.IResolvable;
  /**
  * JsonPatch specifies overriders in a syntax similar to RFC6902 JSON Patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#jsonpatch DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#jsonpatch}
  */
  readonly jsonpatch?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch[] | cdktf.IResolvable;
  /**
  * Label specifies overriders that apply to the resource labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsToTerraform, false)(struct!.annotations),
    args: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsToTerraform, false)(struct!.args),
    command: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandToTerraform, false)(struct!.command),
    envs: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsToTerraform, false)(struct!.envs),
    image: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageToTerraform, false)(struct!.image),
    jsonpatch: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchToTerraform, false)(struct!.jsonpatch),
    labels: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsToTerraform, false)(struct!.labels),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsList",
    },
    args: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsToHclTerraform, false)(struct!.args),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsList",
    },
    command: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandToHclTerraform, false)(struct!.command),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandList",
    },
    envs: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsToHclTerraform, false)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsList",
    },
    image: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageToHclTerraform, false)(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageList",
    },
    jsonpatch: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchToHclTerraform, false)(struct!.jsonpatch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchList",
    },
    labels: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsToHclTerraform, false)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._command?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command?.internalValue;
    }
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._jsonpatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonpatch = this._jsonpatch?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations.internalValue = undefined;
      this._args.internalValue = undefined;
      this._command.internalValue = undefined;
      this._envs.internalValue = undefined;
      this._image.internalValue = undefined;
      this._jsonpatch.internalValue = undefined;
      this._labels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations.internalValue = value.annotations;
      this._args.internalValue = value.args;
      this._command.internalValue = value.command;
      this._envs.internalValue = value.envs;
      this._image.internalValue = value.image;
      this._jsonpatch.internalValue = value.jsonpatch;
      this._labels.internalValue = value.labels;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotationsList(this, "annotations", false);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgsList(this, "args", false);
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersArgs[] | cdktf.IResolvable) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // command - computed: false, optional: true, required: false
  private _command = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommandList(this, "command", false);
  public get command() {
    return this._command;
  }
  public putCommand(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersCommand[] | cdktf.IResolvable) {
    this._command.internalValue = value;
  }
  public resetCommand() {
    this._command.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // jsonpatch - computed: false, optional: true, required: false
  private _jsonpatch = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatchList(this, "jsonpatch", false);
  public get jsonpatch() {
    return this._jsonpatch;
  }
  public putJsonpatch(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersJsonpatch[] | cdktf.IResolvable) {
    this._jsonpatch.internalValue = value;
  }
  public resetJsonpatch() {
    this._jsonpatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonpatchInput() {
    return this._jsonpatch.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#key DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * ClusterSelectorOperator is the set of operators that can be used in a cluster selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#values DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#values}
  */
  readonly values: string[];
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#key DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * ClusterSelectorOperator is the set of operators that can be used in a cluster selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#values DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#values}
  */
  readonly values: string[];
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity {
  /**
  * A list of cluster selector requirements by cluster labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#match_expressions DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of cluster selector requirements by cluster fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#match_fields DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters {
  /**
  * ClusterAffinity selects FederatedClusters by matching their labels and fields against expressions. If multiple terms are specified, their results are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#cluster_affinity DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#cluster_affinity}
  */
  readonly clusterAffinity?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity[] | cdktf.IResolvable;
  /**
  * ClusterSelector selects FederatedClusters by their labels. Empty labels selects all FederatedClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#cluster_selector DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#cluster_selector}
  */
  readonly clusterSelector?: { [key: string]: string };
  /**
  * Clusters selects FederatedClusters by their names. Empty Clusters selects all FederatedClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#clusters DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#clusters}
  */
  readonly clusters?: string[];
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_affinity: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityToTerraform, false)(struct!.clusterAffinity),
    cluster_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clusterSelector),
    clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusters),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_affinity: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityToHclTerraform, false)(struct!.clusterAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityList",
    },
    cluster_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clusterSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAffinity = this._clusterAffinity?.internalValue;
    }
    if (this._clusterSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelector = this._clusterSelector;
    }
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterAffinity.internalValue = undefined;
      this._clusterSelector = undefined;
      this._clusters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterAffinity.internalValue = value.clusterAffinity;
      this._clusterSelector = value.clusterSelector;
      this._clusters = value.clusters;
    }
  }

  // cluster_affinity - computed: false, optional: true, required: false
  private _clusterAffinity = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinityList(this, "cluster_affinity", false);
  public get clusterAffinity() {
    return this._clusterAffinity;
  }
  public putClusterAffinity(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersClusterAffinity[] | cdktf.IResolvable) {
    this._clusterAffinity.internalValue = value;
  }
  public resetClusterAffinity() {
    this._clusterAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAffinityInput() {
    return this._clusterAffinity.internalValue;
  }

  // cluster_selector - computed: false, optional: true, required: false
  private _clusterSelector?: { [key: string]: string }; 
  public get clusterSelector() {
    return this.getStringMapAttribute('cluster_selector');
  }
  public set clusterSelector(value: { [key: string]: string }) {
    this._clusterSelector = value;
  }
  public resetClusterSelector() {
    this._clusterSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return this.getListAttribute('clusters');
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules {
  /**
  * Overriders specify the overriders to be applied in the target clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#overriders DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#overriders}
  */
  readonly overriders?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders;
  /**
  * TargetClusters selects the clusters in which the overriders in this rule should be applied. If multiple types of selectors are specified, the overall result is the intersection of all of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#target_clusters DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#target_clusters}
  */
  readonly targetClusters?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overriders: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToTerraform(struct!.overriders),
    target_clusters: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersToTerraform(struct!.targetClusters),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overriders: {
      value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersToHclTerraform(struct!.overriders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders",
    },
    target_clusters: {
      value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersToHclTerraform(struct!.targetClusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overriders = this._overriders?.internalValue;
    }
    if (this._targetClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetClusters = this._targetClusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overriders.internalValue = undefined;
      this._targetClusters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overriders.internalValue = value.overriders;
      this._targetClusters.internalValue = value.targetClusters;
    }
  }

  // overriders - computed: false, optional: true, required: false
  private _overriders = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverridersOutputReference(this, "overriders");
  public get overriders() {
    return this._overriders;
  }
  public putOverriders(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOverriders) {
    this._overriders.internalValue = value;
  }
  public resetOverriders() {
    this._overriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridersInput() {
    return this._overriders.internalValue;
  }

  // target_clusters - computed: false, optional: true, required: false
  private _targetClusters = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClustersOutputReference(this, "target_clusters");
  public get targetClusters() {
    return this._targetClusters;
  }
  public putTargetClusters(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesTargetClusters) {
    this._targetClusters.internalValue = value;
  }
  public resetTargetClusters() {
    this._targetClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClustersInput() {
    return this._targetClusters.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOutputReference {
    return new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec {
  /**
  * OverrideRules specify the override rules. Each rule specifies the overriders and the clusters these overriders should be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#override_rules DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest#override_rules}
  */
  readonly overrideRules?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_rules: cdktf.listMapper(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesToTerraform, false)(struct!.overrideRules),
  }
}


export function dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_rules: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesToHclTerraform, false)(struct!.overrideRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideRules = this._overrideRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideRules.internalValue = value.overrideRules;
    }
  }

  // override_rules - computed: false, optional: true, required: false
  private _overrideRules = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRulesList(this, "override_rules", false);
  public get overrideRules() {
    return this._overrideRules;
  }
  public putOverrideRules(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOverrideRules[] | cdktf.IResolvable) {
    this._overrideRules.internalValue = value;
  }
  public resetOverrideRules() {
    this._overrideRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideRulesInput() {
    return this._overrideRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest k8s_core_kubeadmiral_io_override_policy_v1alpha1_manifest}
*/
export class DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_kubeadmiral_io_override_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_kubeadmiral_io_override_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/core_kubeadmiral_io_override_policy_v1alpha1_manifest k8s_core_kubeadmiral_io_override_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_kubeadmiral_io_override_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoOverridePolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
