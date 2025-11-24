// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#metadata DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#rbac_bindings DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#rbac_bindings}
  */
  readonly rbacBindings: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings[] | cdktf.IResolvable;
}
export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#annotations DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#labels DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#name DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadataToTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#cluster_role DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#cluster_role}
  */
  readonly clusterRole: string;
}

export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsToTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role: cdktf.stringToTerraform(struct!.clusterRole),
  }
}


export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsToHclTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role: {
      value: cdktf.stringToHclTerraform(struct!.clusterRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRole = this._clusterRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRole = value.clusterRole;
    }
  }

  // cluster_role - computed: false, optional: false, required: true
  private _clusterRole?: string; 
  public get clusterRole() {
    return this.getStringAttribute('cluster_role');
  }
  public set clusterRole(value: string) {
    this._clusterRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleInput() {
    return this._clusterRole;
  }
}

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsOutputReference {
    return new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#key DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#operator DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#values DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#match_expressions DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#match_labels DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorToTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorToHclTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsList",
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

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#cluster_role DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#cluster_role}
  */
  readonly clusterRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#namespace DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#namespace_selector DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#role DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#role}
  */
  readonly role?: string;
}

export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsToTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role: cdktf.stringToTerraform(struct!.clusterRole),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_selector: dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorToTerraform(struct!.namespaceSelector),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsToHclTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role: {
      value: cdktf.stringToHclTerraform(struct!.clusterRole),
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
    namespace_selector: {
      value: dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRole = this._clusterRole;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRole = undefined;
      this._namespace = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRole = value.clusterRole;
      this._namespace = value.namespace;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._role = value.role;
    }
  }

  // cluster_role - computed: false, optional: true, required: false
  private _clusterRole?: string; 
  public get clusterRole() {
    return this.getStringAttribute('cluster_role');
  }
  public set clusterRole(value: string) {
    this._clusterRole = value;
  }
  public resetClusterRole() {
    this._clusterRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleInput() {
    return this._clusterRole;
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

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsOutputReference {
    return new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#automount_service_account_token DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#image_pull_secrets DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#kind DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#name DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#namespace DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsToTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    image_pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullSecrets),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsToHclTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._imagePullSecrets = undefined;
      this._kind = undefined;
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
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._imagePullSecrets = value.imagePullSecrets;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string[]; 
  public get imagePullSecrets() {
    return this.getListAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string[]) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
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

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsOutputReference {
    return new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#cluster_role_bindings DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#cluster_role_bindings}
  */
  readonly clusterRoleBindings?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#name DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#role_bindings DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#role_bindings}
  */
  readonly roleBindings?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#subjects DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest#subjects}
  */
  readonly subjects: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects[] | cdktf.IResolvable;
}

export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsToTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_bindings: cdktf.listMapper(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsToTerraform, false)(struct!.clusterRoleBindings),
    name: cdktf.stringToTerraform(struct!.name),
    role_bindings: cdktf.listMapper(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsToTerraform, false)(struct!.roleBindings),
    subjects: cdktf.listMapper(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsToHclTerraform(struct?: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role_bindings: {
      value: cdktf.listMapperHcl(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsToHclTerraform, false)(struct!.clusterRoleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_bindings: {
      value: cdktf.listMapperHcl(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsToHclTerraform, false)(struct!.roleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleBindings = this._clusterRoleBindings?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBindings = this._roleBindings?.internalValue;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoleBindings.internalValue = undefined;
      this._name = undefined;
      this._roleBindings.internalValue = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoleBindings.internalValue = value.clusterRoleBindings;
      this._name = value.name;
      this._roleBindings.internalValue = value.roleBindings;
      this._subjects.internalValue = value.subjects;
    }
  }

  // cluster_role_bindings - computed: false, optional: true, required: false
  private _clusterRoleBindings = new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindingsList(this, "cluster_role_bindings", false);
  public get clusterRoleBindings() {
    return this._clusterRoleBindings;
  }
  public putClusterRoleBindings(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsClusterRoleBindings[] | cdktf.IResolvable) {
    this._clusterRoleBindings.internalValue = value;
  }
  public resetClusterRoleBindings() {
    this._clusterRoleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleBindingsInput() {
    return this._clusterRoleBindings.internalValue;
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

  // role_bindings - computed: false, optional: true, required: false
  private _roleBindings = new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
  public putRoleBindings(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsRoleBindings[] | cdktf.IResolvable) {
    this._roleBindings.internalValue = value;
  }
  public resetRoleBindings() {
    this._roleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingsInput() {
    return this._roleBindings.internalValue;
  }

  // subjects - computed: false, optional: false, required: true
  private _subjects = new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsOutputReference {
    return new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest k8s_rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest}
*/
export class DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest k8s_rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_rbacmanager_reactiveops_io_rbac_definition_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
    this._rbacBindings.internalValue = config.rbacBindings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // rbac_bindings - computed: false, optional: false, required: true
  private _rbacBindings = new DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsList(this, "rbac_bindings", false);
  public get rbacBindings() {
    return this._rbacBindings;
  }
  public putRbacBindings(value: DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindings[] | cdktf.IResolvable) {
    this._rbacBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacBindingsInput() {
    return this._rbacBindings.internalValue;
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
      metadata: dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      rbac_bindings: cdktf.listMapper(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsToTerraform, false)(this._rbacBindings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestMetadata",
      },
      rbac_bindings: {
        value: cdktf.listMapperHcl(dataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsToHclTerraform, false)(this._rbacBindings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SRbacmanagerReactiveopsIoRbacDefinitionV1Beta1ManifestRbacBindingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
