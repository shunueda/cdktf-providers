// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#metadata DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata;
  /**
  * Spec represents the desired behavior of EdgeApplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#spec DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#annotations DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#labels DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#namespace DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#container_name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator represents the operator which will apply on the command/args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#operator DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to command/args. Items in Value which will be appended after command/args when Operator is 'add'. Items in Value which match in command/args will be deleted when Operator is 'remove'. If Value is empty, then the command/args will remain the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#value DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#container_name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator represents the operator which will apply on the command/args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#operator DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to command/args. Items in Value which will be appended after command/args when Operator is 'add'. Items in Value which match in command/args will be deleted when Operator is 'remove'. If Value is empty, then the command/args will remain the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#value DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#key DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#optional DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRefToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#api_version DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#field_path DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRefToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRefToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#container_name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#divisor DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#resource DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRefToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRefToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#key DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#optional DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRefToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRefToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#config_map_key_ref DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#field_ref DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#resource_field_ref DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#secret_key_ref DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromSecretKeyRef) {
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#value DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#value_from DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue | cdktf.IResolvable): any {
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
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueValueFrom) {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#container_name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Operator represents the operator which will apply on the env.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#operator DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Value to be applied to env. Must not be empty when operator is 'add' or 'replace'. When the operator is 'remove', the matched value in env will be deleted and only the name of the value will be matched. If Value is empty, then the env will remain the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#value DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#value}
  */
  readonly value?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueToTerraform, false)(struct!.value),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders | cdktf.IResolvable | undefined) {
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
  private _value = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate {
  /**
  * Path indicates the path of target field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#path DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicateToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicateToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders {
  /**
  * Component is part of image name. Basically we presume an image can be made of '[registry/]repository[:tag]'. The registry could be: - k8s.gcr.io - fictional.registry.example:10443 The repository could be: - kube-apiserver - fictional/nginx The tag cloud be: - latest - v1.19.1 - @sha256:dbcc1c35ac38df41fd2f5e4130b32ffdb93ebae8b3dbe638c23575912276fc9c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#component DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#component}
  */
  readonly component: string;
  /**
  * Operator represents the operator which will apply on the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#operator DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Predicate filters images before applying the rule. Defaults to nil, in that case, the system will automatically detect image fields if the resource type is Pod, ReplicaSet, Deployment or StatefulSet by following rule: - Pod: /spec/containers/<N>/image - ReplicaSet: /spec/template/spec/containers/<N>/image - Deployment: /spec/template/spec/containers/<N>/image - StatefulSet: /spec/template/spec/containers/<N>/image In addition, all images will be processed if the resource object has more than one containers. If not nil, only images matches the filters will be processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#predicate DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#predicate}
  */
  readonly predicate?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate;
  /**
  * Value to be applied to image. Must not be empty when operator is 'add' or 'replace'. Defaults to empty and ignored when operator is 'remove'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#value DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    operator: cdktf.stringToTerraform(struct!.operator),
    predicate: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicateToTerraform(struct!.predicate),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders | cdktf.IResolvable): any {
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
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicateToHclTerraform(struct!.predicate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate",
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders | cdktf.IResolvable | undefined) {
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
  private _predicate = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersPredicate) {
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#claims DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#limits DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#requests DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
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
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders {
  /**
  * The name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#container_name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Value to be applied to resources. Must not be empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#value DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#value}
  */
  readonly value?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueToTerraform(struct!.value),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders | cdktf.IResolvable): any {
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
    value: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
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

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders {
  /**
  * ArgsOverriders represents the rules dedicated to handling container args
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#args_overriders DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#args_overriders}
  */
  readonly argsOverriders?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders[] | cdktf.IResolvable;
  /**
  * CommandOverriders represents the rules dedicated to handling container command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#command_overriders DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#command_overriders}
  */
  readonly commandOverriders?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders[] | cdktf.IResolvable;
  /**
  * EnvOverriders will override the env field of the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#env_overriders DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#env_overriders}
  */
  readonly envOverriders?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders[] | cdktf.IResolvable;
  /**
  * ImageOverriders represents the rules dedicated to handling image overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#image_overriders DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#image_overriders}
  */
  readonly imageOverriders?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders[] | cdktf.IResolvable;
  /**
  * Replicas will override the replicas field of deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#replicas DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * ResourcesOverriders will override the resources field of the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#resources_overriders DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#resources_overriders}
  */
  readonly resourcesOverriders?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args_overriders: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersToTerraform, false)(struct!.argsOverriders),
    command_overriders: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersToTerraform, false)(struct!.commandOverriders),
    env_overriders: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersToTerraform, false)(struct!.envOverriders),
    image_overriders: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersToTerraform, false)(struct!.imageOverriders),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources_overriders: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersToTerraform, false)(struct!.resourcesOverriders),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args_overriders: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersToHclTerraform, false)(struct!.argsOverriders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersList",
    },
    command_overriders: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersToHclTerraform, false)(struct!.commandOverriders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersList",
    },
    env_overriders: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersToHclTerraform, false)(struct!.envOverriders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersList",
    },
    image_overriders: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersToHclTerraform, false)(struct!.imageOverriders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersList",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources_overriders: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersToHclTerraform, false)(struct!.resourcesOverriders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argsOverriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsOverriders = this._argsOverriders?.internalValue;
    }
    if (this._commandOverriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandOverriders = this._commandOverriders?.internalValue;
    }
    if (this._envOverriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverriders = this._envOverriders?.internalValue;
    }
    if (this._imageOverriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOverriders = this._imageOverriders?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resourcesOverriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesOverriders = this._resourcesOverriders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argsOverriders.internalValue = undefined;
      this._commandOverriders.internalValue = undefined;
      this._envOverriders.internalValue = undefined;
      this._imageOverriders.internalValue = undefined;
      this._replicas = undefined;
      this._resourcesOverriders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argsOverriders.internalValue = value.argsOverriders;
      this._commandOverriders.internalValue = value.commandOverriders;
      this._envOverriders.internalValue = value.envOverriders;
      this._imageOverriders.internalValue = value.imageOverriders;
      this._replicas = value.replicas;
      this._resourcesOverriders.internalValue = value.resourcesOverriders;
    }
  }

  // args_overriders - computed: false, optional: true, required: false
  private _argsOverriders = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverridersList(this, "args_overriders", false);
  public get argsOverriders() {
    return this._argsOverriders;
  }
  public putArgsOverriders(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersArgsOverriders[] | cdktf.IResolvable) {
    this._argsOverriders.internalValue = value;
  }
  public resetArgsOverriders() {
    this._argsOverriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsOverridersInput() {
    return this._argsOverriders.internalValue;
  }

  // command_overriders - computed: false, optional: true, required: false
  private _commandOverriders = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverridersList(this, "command_overriders", false);
  public get commandOverriders() {
    return this._commandOverriders;
  }
  public putCommandOverriders(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersCommandOverriders[] | cdktf.IResolvable) {
    this._commandOverriders.internalValue = value;
  }
  public resetCommandOverriders() {
    this._commandOverriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandOverridersInput() {
    return this._commandOverriders.internalValue;
  }

  // env_overriders - computed: false, optional: true, required: false
  private _envOverriders = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverridersList(this, "env_overriders", false);
  public get envOverriders() {
    return this._envOverriders;
  }
  public putEnvOverriders(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersEnvOverriders[] | cdktf.IResolvable) {
    this._envOverriders.internalValue = value;
  }
  public resetEnvOverriders() {
    this._envOverriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridersInput() {
    return this._envOverriders.internalValue;
  }

  // image_overriders - computed: false, optional: true, required: false
  private _imageOverriders = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverridersList(this, "image_overriders", false);
  public get imageOverriders() {
    return this._imageOverriders;
  }
  public putImageOverriders(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersImageOverriders[] | cdktf.IResolvable) {
    this._imageOverriders.internalValue = value;
  }
  public resetImageOverriders() {
    this._imageOverriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOverridersInput() {
    return this._imageOverriders.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources_overriders - computed: false, optional: true, required: false
  private _resourcesOverriders = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverridersList(this, "resources_overriders", false);
  public get resourcesOverriders() {
    return this._resourcesOverriders;
  }
  public putResourcesOverriders(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersResourcesOverriders[] | cdktf.IResolvable) {
    this._resourcesOverriders.internalValue = value;
  }
  public resetResourcesOverriders() {
    this._resourcesOverriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesOverridersInput() {
    return this._resourcesOverriders.internalValue;
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups {
  /**
  * Name represents the name of target node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#name DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Overriders represents the override rules that would apply on workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#overriders DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#overriders}
  */
  readonly overriders?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overriders: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersToTerraform(struct!.overriders),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups | cdktf.IResolvable): any {
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
    overriders: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersToHclTerraform(struct!.overriders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overriders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overriders = this._overriders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overriders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overriders.internalValue = value.overriders;
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

  // overriders - computed: false, optional: true, required: false
  private _overriders = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverridersOutputReference(this, "overriders");
  public get overriders() {
    return this._overriders;
  }
  public putOverriders(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOverriders) {
    this._overriders.internalValue = value;
  }
  public resetOverriders() {
    this._overriders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridersInput() {
    return this._overriders.internalValue;
  }
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOutputReference {
    return new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope {
  /**
  * TargetNodeGroups represents the target node groups of workload to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#target_node_groups DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#target_node_groups}
  */
  readonly targetNodeGroups?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_node_groups: cdktf.listMapper(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsToTerraform, false)(struct!.targetNodeGroups),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_node_groups: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsToHclTerraform, false)(struct!.targetNodeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetNodeGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNodeGroups = this._targetNodeGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetNodeGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetNodeGroups.internalValue = value.targetNodeGroups;
    }
  }

  // target_node_groups - computed: false, optional: true, required: false
  private _targetNodeGroups = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroupsList(this, "target_node_groups", false);
  public get targetNodeGroups() {
    return this._targetNodeGroups;
  }
  public putTargetNodeGroups(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeTargetNodeGroups[] | cdktf.IResolvable) {
    this._targetNodeGroups.internalValue = value;
  }
  public resetTargetNodeGroups() {
    this._targetNodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeGroupsInput() {
    return this._targetNodeGroups.internalValue;
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate {
  /**
  * Manifests represent a list of Kubernetes resources to be deployed on the managed node groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#manifests DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#manifests}
  */
  readonly manifests?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplateToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifests: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.manifests),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplateToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manifests: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.manifests),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifests !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifests = this._manifests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifests = value.manifests;
    }
  }

  // manifests - computed: false, optional: true, required: false
  private _manifests?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get manifests() {
    return this.interpolationForAttribute('manifests');
  }
  public set manifests(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._manifests = value;
  }
  public resetManifests() {
    this._manifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests;
  }
}
export interface DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec {
  /**
  * WorkloadScope represents which node groups the workload will be deployed in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#workload_scope DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#workload_scope}
  */
  readonly workloadScope: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope;
  /**
  * WorkloadTemplate contains original templates of resources to be deployed as an EdgeApplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#workload_template DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest#workload_template}
  */
  readonly workloadTemplate?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate;
}

export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_scope: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeToTerraform(struct!.workloadScope),
    workload_template: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplateToTerraform(struct!.workloadTemplate),
  }
}


export function dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_scope: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeToHclTerraform(struct!.workloadScope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope",
    },
    workload_template: {
      value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplateToHclTerraform(struct!.workloadTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadScope = this._workloadScope?.internalValue;
    }
    if (this._workloadTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadTemplate = this._workloadTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workloadScope.internalValue = undefined;
      this._workloadTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workloadScope.internalValue = value.workloadScope;
      this._workloadTemplate.internalValue = value.workloadTemplate;
    }
  }

  // workload_scope - computed: false, optional: false, required: true
  private _workloadScope = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScopeOutputReference(this, "workload_scope");
  public get workloadScope() {
    return this._workloadScope;
  }
  public putWorkloadScope(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadScope) {
    this._workloadScope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadScopeInput() {
    return this._workloadScope.internalValue;
  }

  // workload_template - computed: false, optional: true, required: false
  private _workloadTemplate = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplateOutputReference(this, "workload_template");
  public get workloadTemplate() {
    return this._workloadTemplate;
  }
  public putWorkloadTemplate(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecWorkloadTemplate) {
    this._workloadTemplate.internalValue = value;
  }
  public resetWorkloadTemplate() {
    this._workloadTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTemplateInput() {
    return this._workloadTemplate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest k8s_apps_kubeedge_io_edge_application_v1alpha1_manifest}
*/
export class DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeedge_io_edge_application_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeedge_io_edge_application_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeedge_io_edge_application_v1alpha1_manifest k8s_apps_kubeedge_io_edge_application_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeedge_io_edge_application_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeedgeIoEdgeApplicationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
