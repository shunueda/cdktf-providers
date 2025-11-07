// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#metadata DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata;
  /**
  * KeycloakUserSpec defines the desired state of KeycloakUser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#spec DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec;
}
export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#annotations DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#labels DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#namespace DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#match_labels DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorToTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsList",
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

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials {
  /**
  * True if this credential object is temporary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#temporary DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#temporary}
  */
  readonly temporary?: boolean | cdktf.IResolvable;
  /**
  * Credential Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Credential Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#value DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsToTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    temporary: cdktf.booleanToTerraform(struct!.temporary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    temporary: {
      value: cdktf.booleanToHclTerraform(struct!.temporary),
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

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._temporary !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporary = this._temporary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._temporary = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._temporary = value.temporary;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // temporary - computed: false, optional: true, required: false
  private _temporary?: boolean | cdktf.IResolvable; 
  public get temporary() {
    return this.getBooleanAttribute('temporary');
  }
  public set temporary(value: boolean | cdktf.IResolvable) {
    this._temporary = value;
  }
  public resetTemporary() {
    this._temporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryInput() {
    return this._temporary;
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

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsOutputReference {
    return new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities {
  /**
  * Federated Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#identity_provider DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * Federated Identity User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#user_id DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#user_id}
  */
  readonly userId?: string;
  /**
  * Federated Identity User Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#user_name DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#user_name}
  */
  readonly userName?: string;
}

export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesToTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider: cdktf.stringToTerraform(struct!.identityProvider),
    user_id: cdktf.stringToTerraform(struct!.userId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider: {
      value: cdktf.stringToHclTerraform(struct!.identityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProvider = this._identityProvider;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProvider = undefined;
      this._userId = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProvider = value.identityProvider;
      this._userId = value.userId;
      this._userName = value.userName;
    }
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesOutputReference {
    return new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser {
  /**
  * A set of Attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A set of Client Roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#client_roles DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#client_roles}
  */
  readonly clientRoles?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A set of Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#credentials DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials[] | cdktf.IResolvable;
  /**
  * Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#email DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#email}
  */
  readonly email?: string;
  /**
  * True if email has already been verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#email_verified DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#email_verified}
  */
  readonly emailVerified?: boolean | cdktf.IResolvable;
  /**
  * User enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A set of Federated Identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#federated_identities DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#federated_identities}
  */
  readonly federatedIdentities?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities[] | cdktf.IResolvable;
  /**
  * First Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#first_name DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#first_name}
  */
  readonly firstName?: string;
  /**
  * A set of Groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#groups DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Last Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#last_name DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#last_name}
  */
  readonly lastName?: string;
  /**
  * A set of Realm Roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#realm_roles DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#realm_roles}
  */
  readonly realmRoles?: string[];
  /**
  * A set of Required Actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#required_actions DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#required_actions}
  */
  readonly requiredActions?: string[];
  /**
  * User Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#username DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserToTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.attributes),
    client_roles: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.clientRoles),
    credentials: cdktf.listMapper(dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsToTerraform, false)(struct!.credentials),
    email: cdktf.stringToTerraform(struct!.email),
    email_verified: cdktf.booleanToTerraform(struct!.emailVerified),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    federated_identities: cdktf.listMapper(dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesToTerraform, false)(struct!.federatedIdentities),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    id: cdktf.stringToTerraform(struct!.id),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    realm_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realmRoles),
    required_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredActions),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    client_roles: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.clientRoles),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    credentials: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsToHclTerraform, false)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsList",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verified: {
      value: cdktf.booleanToHclTerraform(struct!.emailVerified),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    federated_identities: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesToHclTerraform, false)(struct!.federatedIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesList",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.realmRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._clientRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRoles = this._clientRoles;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._emailVerified !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerified = this._emailVerified;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._federatedIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedIdentities = this._federatedIdentities?.internalValue;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._realmRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmRoles = this._realmRoles;
    }
    if (this._requiredActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredActions = this._requiredActions;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._clientRoles = undefined;
      this._credentials.internalValue = undefined;
      this._email = undefined;
      this._emailVerified = undefined;
      this._enabled = undefined;
      this._federatedIdentities.internalValue = undefined;
      this._firstName = undefined;
      this._groups = undefined;
      this._id = undefined;
      this._lastName = undefined;
      this._realmRoles = undefined;
      this._requiredActions = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._clientRoles = value.clientRoles;
      this._credentials.internalValue = value.credentials;
      this._email = value.email;
      this._emailVerified = value.emailVerified;
      this._enabled = value.enabled;
      this._federatedIdentities.internalValue = value.federatedIdentities;
      this._firstName = value.firstName;
      this._groups = value.groups;
      this._id = value.id;
      this._lastName = value.lastName;
      this._realmRoles = value.realmRoles;
      this._requiredActions = value.requiredActions;
      this._username = value.username;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get attributes() {
    return this.interpolationForAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // client_roles - computed: false, optional: true, required: false
  private _clientRoles?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get clientRoles() {
    return this.interpolationForAttribute('client_roles');
  }
  public set clientRoles(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._clientRoles = value;
  }
  public resetClientRoles() {
    this._clientRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRolesInput() {
    return this._clientRoles;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_verified - computed: false, optional: true, required: false
  private _emailVerified?: boolean | cdktf.IResolvable; 
  public get emailVerified() {
    return this.getBooleanAttribute('email_verified');
  }
  public set emailVerified(value: boolean | cdktf.IResolvable) {
    this._emailVerified = value;
  }
  public resetEmailVerified() {
    this._emailVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerifiedInput() {
    return this._emailVerified;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // federated_identities - computed: false, optional: true, required: false
  private _federatedIdentities = new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentitiesList(this, "federated_identities", false);
  public get federatedIdentities() {
    return this._federatedIdentities;
  }
  public putFederatedIdentities(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserFederatedIdentities[] | cdktf.IResolvable) {
    this._federatedIdentities.internalValue = value;
  }
  public resetFederatedIdentities() {
    this._federatedIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedIdentitiesInput() {
    return this._federatedIdentities.internalValue;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // realm_roles - computed: false, optional: true, required: false
  private _realmRoles?: string[]; 
  public get realmRoles() {
    return this.getListAttribute('realm_roles');
  }
  public set realmRoles(value: string[]) {
    this._realmRoles = value;
  }
  public resetRealmRoles() {
    this._realmRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmRolesInput() {
    return this._realmRoles;
  }

  // required_actions - computed: false, optional: true, required: false
  private _requiredActions?: string[]; 
  public get requiredActions() {
    return this.getListAttribute('required_actions');
  }
  public set requiredActions(value: string[]) {
    this._requiredActions = value;
  }
  public resetRequiredActions() {
    this._requiredActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredActionsInput() {
    return this._requiredActions;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec {
  /**
  * Selector for looking up KeycloakRealm Custom Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#realm_selector DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#realm_selector}
  */
  readonly realmSelector?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector;
  /**
  * Keycloak User REST object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#user DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest#user}
  */
  readonly user: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser;
}

export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm_selector: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorToTerraform(struct!.realmSelector),
    user: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserToTerraform(struct!.user),
  }
}


export function dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm_selector: {
      value: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorToHclTerraform(struct!.realmSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector",
    },
    user: {
      value: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realmSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmSelector = this._realmSelector?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realmSelector.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realmSelector.internalValue = value.realmSelector;
      this._user.internalValue = value.user;
    }
  }

  // realm_selector - computed: false, optional: true, required: false
  private _realmSelector = new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelectorOutputReference(this, "realm_selector");
  public get realmSelector() {
    return this._realmSelector;
  }
  public putRealmSelector(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecRealmSelector) {
    this._realmSelector.internalValue = value;
  }
  public resetRealmSelector() {
    this._realmSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmSelectorInput() {
    return this._realmSelector.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user = new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecUser) {
    this._user.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest k8s_keycloak_org_keycloak_user_v1alpha1_manifest}
*/
export class DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keycloak_org_keycloak_user_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKeycloakOrgKeycloakUserV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keycloak_org_keycloak_user_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_user_v1alpha1_manifest k8s_keycloak_org_keycloak_user_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keycloak_org_keycloak_user_v1alpha1_manifest',
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
  private _metadata = new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakUserV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
