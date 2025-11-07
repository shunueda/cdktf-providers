// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#metadata DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata;
  /**
  * KeycloakRealmSpec defines the desired state of KeycloakRealm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#spec DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec;
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#annotations DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#labels DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#namespace DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#match_labels DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsList",
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions {
  /**
  * Authenticator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authenticator DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authenticator}
  */
  readonly authenticator?: string;
  /**
  * Authenticator Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authenticator_config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authenticator_config}
  */
  readonly authenticatorConfig?: string;
  /**
  * Authenticator flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authenticator_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authenticator_flow}
  */
  readonly authenticatorFlow?: boolean | cdktf.IResolvable;
  /**
  * Flow Alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#flow_alias DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#flow_alias}
  */
  readonly flowAlias?: string;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#priority DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Requirement [REQUIRED, OPTIONAL, ALTERNATIVE, DISABLED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#requirement DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#requirement}
  */
  readonly requirement?: string;
  /**
  * User setup allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#user_setup_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#user_setup_allowed}
  */
  readonly userSetupAllowed?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticator: cdktf.stringToTerraform(struct!.authenticator),
    authenticator_config: cdktf.stringToTerraform(struct!.authenticatorConfig),
    authenticator_flow: cdktf.booleanToTerraform(struct!.authenticatorFlow),
    flow_alias: cdktf.stringToTerraform(struct!.flowAlias),
    priority: cdktf.numberToTerraform(struct!.priority),
    requirement: cdktf.stringToTerraform(struct!.requirement),
    user_setup_allowed: cdktf.booleanToTerraform(struct!.userSetupAllowed),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticator: {
      value: cdktf.stringToHclTerraform(struct!.authenticator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_config: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_flow: {
      value: cdktf.booleanToHclTerraform(struct!.authenticatorFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flow_alias: {
      value: cdktf.stringToHclTerraform(struct!.flowAlias),
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
    requirement: {
      value: cdktf.stringToHclTerraform(struct!.requirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_setup_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.userSetupAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticator !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticator = this._authenticator;
    }
    if (this._authenticatorConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorConfig = this._authenticatorConfig;
    }
    if (this._authenticatorFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorFlow = this._authenticatorFlow;
    }
    if (this._flowAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowAlias = this._flowAlias;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._requirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirement = this._requirement;
    }
    if (this._userSetupAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSetupAllowed = this._userSetupAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticator = undefined;
      this._authenticatorConfig = undefined;
      this._authenticatorFlow = undefined;
      this._flowAlias = undefined;
      this._priority = undefined;
      this._requirement = undefined;
      this._userSetupAllowed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticator = value.authenticator;
      this._authenticatorConfig = value.authenticatorConfig;
      this._authenticatorFlow = value.authenticatorFlow;
      this._flowAlias = value.flowAlias;
      this._priority = value.priority;
      this._requirement = value.requirement;
      this._userSetupAllowed = value.userSetupAllowed;
    }
  }

  // authenticator - computed: false, optional: true, required: false
  private _authenticator?: string; 
  public get authenticator() {
    return this.getStringAttribute('authenticator');
  }
  public set authenticator(value: string) {
    this._authenticator = value;
  }
  public resetAuthenticator() {
    this._authenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorInput() {
    return this._authenticator;
  }

  // authenticator_config - computed: false, optional: true, required: false
  private _authenticatorConfig?: string; 
  public get authenticatorConfig() {
    return this.getStringAttribute('authenticator_config');
  }
  public set authenticatorConfig(value: string) {
    this._authenticatorConfig = value;
  }
  public resetAuthenticatorConfig() {
    this._authenticatorConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorConfigInput() {
    return this._authenticatorConfig;
  }

  // authenticator_flow - computed: false, optional: true, required: false
  private _authenticatorFlow?: boolean | cdktf.IResolvable; 
  public get authenticatorFlow() {
    return this.getBooleanAttribute('authenticator_flow');
  }
  public set authenticatorFlow(value: boolean | cdktf.IResolvable) {
    this._authenticatorFlow = value;
  }
  public resetAuthenticatorFlow() {
    this._authenticatorFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorFlowInput() {
    return this._authenticatorFlow;
  }

  // flow_alias - computed: false, optional: true, required: false
  private _flowAlias?: string; 
  public get flowAlias() {
    return this.getStringAttribute('flow_alias');
  }
  public set flowAlias(value: string) {
    this._flowAlias = value;
  }
  public resetFlowAlias() {
    this._flowAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowAliasInput() {
    return this._flowAlias;
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

  // requirement - computed: false, optional: true, required: false
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  public resetRequirement() {
    this._requirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }

  // user_setup_allowed - computed: false, optional: true, required: false
  private _userSetupAllowed?: boolean | cdktf.IResolvable; 
  public get userSetupAllowed() {
    return this.getBooleanAttribute('user_setup_allowed');
  }
  public set userSetupAllowed(value: boolean | cdktf.IResolvable) {
    this._userSetupAllowed = value;
  }
  public resetUserSetupAllowed() {
    this._userSetupAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSetupAllowedInput() {
    return this._userSetupAllowed;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows {
  /**
  * Alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#alias DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#alias}
  */
  readonly alias: string;
  /**
  * Authentication executions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authentication_executions DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authentication_executions}
  */
  readonly authenticationExecutions: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions[] | cdktf.IResolvable;
  /**
  * Built in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#built_in DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#built_in}
  */
  readonly builtIn?: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Provider ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#provider_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * Top level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#top_level DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#top_level}
  */
  readonly topLevel?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    authentication_executions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsToTerraform, false)(struct!.authenticationExecutions),
    built_in: cdktf.booleanToTerraform(struct!.builtIn),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    top_level: cdktf.booleanToTerraform(struct!.topLevel),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_executions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsToHclTerraform, false)(struct!.authenticationExecutions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsList",
    },
    built_in: {
      value: cdktf.booleanToHclTerraform(struct!.builtIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    top_level: {
      value: cdktf.booleanToHclTerraform(struct!.topLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._authenticationExecutions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationExecutions = this._authenticationExecutions?.internalValue;
    }
    if (this._builtIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtIn = this._builtIn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._topLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.topLevel = this._topLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._authenticationExecutions.internalValue = undefined;
      this._builtIn = undefined;
      this._description = undefined;
      this._id = undefined;
      this._providerId = undefined;
      this._topLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._authenticationExecutions.internalValue = value.authenticationExecutions;
      this._builtIn = value.builtIn;
      this._description = value.description;
      this._id = value.id;
      this._providerId = value.providerId;
      this._topLevel = value.topLevel;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // authentication_executions - computed: false, optional: false, required: true
  private _authenticationExecutions = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutionsList(this, "authentication_executions", false);
  public get authenticationExecutions() {
    return this._authenticationExecutions;
  }
  public putAuthenticationExecutions(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsAuthenticationExecutions[] | cdktf.IResolvable) {
    this._authenticationExecutions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationExecutionsInput() {
    return this._authenticationExecutions.internalValue;
  }

  // built_in - computed: false, optional: true, required: false
  private _builtIn?: boolean | cdktf.IResolvable; 
  public get builtIn() {
    return this.getBooleanAttribute('built_in');
  }
  public set builtIn(value: boolean | cdktf.IResolvable) {
    this._builtIn = value;
  }
  public resetBuiltIn() {
    this._builtIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInInput() {
    return this._builtIn;
  }

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

  // top_level - computed: false, optional: true, required: false
  private _topLevel?: boolean | cdktf.IResolvable; 
  public get topLevel() {
    return this.getBooleanAttribute('top_level');
  }
  public set topLevel(value: boolean | cdktf.IResolvable) {
    this._topLevel = value;
  }
  public resetTopLevel() {
    this._topLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topLevelInput() {
    return this._topLevel;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig {
  /**
  * Alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#alias DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#alias}
  */
  readonly alias: string;
  /**
  * Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._config = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._config = value.config;
      this._id = value.id;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers {
  /**
  * Config options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * True if Consent Screen is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#consent_required DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#consent_required}
  */
  readonly consentRequired?: boolean | cdktf.IResolvable;
  /**
  * Text to use for displaying Consent Screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#consent_text DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#consent_text}
  */
  readonly consentText?: string;
  /**
  * Protocol Mapper ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol Mapper Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Mapper to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol_mapper DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol_mapper}
  */
  readonly protocolMapper?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    consent_text: cdktf.stringToTerraform(struct!.consentText),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_mapper: cdktf.stringToTerraform(struct!.protocolMapper),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    consent_required: {
      value: cdktf.booleanToHclTerraform(struct!.consentRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consent_text: {
      value: cdktf.stringToHclTerraform(struct!.consentText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_mapper: {
      value: cdktf.stringToHclTerraform(struct!.protocolMapper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._consentRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentRequired = this._consentRequired;
    }
    if (this._consentText !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentText = this._consentText;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolMapper !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMapper = this._protocolMapper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._consentRequired = undefined;
      this._consentText = undefined;
      this._id = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._protocolMapper = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._consentRequired = value.consentRequired;
      this._consentText = value.consentText;
      this._id = value.id;
      this._name = value.name;
      this._protocol = value.protocol;
      this._protocolMapper = value.protocolMapper;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // consent_required - computed: false, optional: true, required: false
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  public resetConsentRequired() {
    this._consentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // consent_text - computed: false, optional: true, required: false
  private _consentText?: string; 
  public get consentText() {
    return this.getStringAttribute('consent_text');
  }
  public set consentText(value: string) {
    this._consentText = value;
  }
  public resetConsentText() {
    this._consentText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentTextInput() {
    return this._consentText;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_mapper - computed: false, optional: true, required: false
  private _protocolMapper?: string; 
  public get protocolMapper() {
    return this.getStringAttribute('protocol_mapper');
  }
  public set protocolMapper(value: string) {
    this._protocolMapper = value;
  }
  public resetProtocolMapper() {
    this._protocolMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMapperInput() {
    return this._protocolMapper;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Mappers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol_mappers DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol_mappers}
  */
  readonly protocolMappers?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_mappers: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersToTerraform, false)(struct!.protocolMappers),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_mappers: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersToHclTerraform, false)(struct!.protocolMappers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolMappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMappers = this._protocolMappers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._protocolMappers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._protocol = value.protocol;
      this._protocolMappers.internalValue = value.protocolMappers;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_mappers - computed: false, optional: true, required: false
  private _protocolMappers = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappersList(this, "protocol_mappers", false);
  public get protocolMappers() {
    return this._protocolMappers;
  }
  public putProtocolMappers(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesProtocolMappers[] | cdktf.IResolvable) {
    this._protocolMappers.internalValue = value;
  }
  public resetProtocolMappers() {
    this._protocolMappers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMappersInput() {
    return this._protocolMappers.internalValue;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
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

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The decision strategy dictates how the policies associated with a given permission are evaluated and how a final decision is obtained. 'Affirmative' means that at least one policy must evaluate to a positive decision in order for the final decision to be also positive. 'Unanimous' means that all policies must evaluate to a positive decision in order for the final decision to be also positive. 'Consensus' means that the number of positive decisions must be greater than the number of negative decisions. If the number of positive and negative is the same, the final decision will be negative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#decision_strategy DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * A description for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The logic dictates how the policy decision should be made. If 'Positive', the resulting effect (permit or deny) obtained during the evaluation of this policy will be used to perform a decision. If 'Negative', the resulting effect will be negated, in other words, a permit becomes a deny and vice-versa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#logic DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#logic}
  */
  readonly logic?: string;
  /**
  * The name of this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#owner DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#policies}
  */
  readonly policies?: string[];
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Resources Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#resources_data DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#resources_data}
  */
  readonly resourcesData?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData[] | cdktf.IResolvable;
  /**
  * Scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Scopes Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes_data DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes_data}
  */
  readonly scopesData?: string[];
  /**
  * Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    logic: cdktf.stringToTerraform(struct!.logic),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    resources_data: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataToTerraform, false)(struct!.resourcesData),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    scopes_data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopesData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources_data: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataToHclTerraform, false)(struct!.resourcesData),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataList",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scopes_data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopesData),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._resourcesData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesData = this._resourcesData?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scopesData !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopesData = this._scopesData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._id = undefined;
      this._logic = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._policies = undefined;
      this._resources = undefined;
      this._resourcesData.internalValue = undefined;
      this._scopes = undefined;
      this._scopesData = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._id = value.id;
      this._logic = value.logic;
      this._name = value.name;
      this._owner = value.owner;
      this._policies = value.policies;
      this._resources = value.resources;
      this._resourcesData.internalValue = value.resourcesData;
      this._scopes = value.scopes;
      this._scopesData = value.scopesData;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
  }

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

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // resources_data - computed: false, optional: true, required: false
  private _resourcesData = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesDataList(this, "resources_data", false);
  public get resourcesData() {
    return this._resourcesData;
  }
  public putResourcesData(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesResourcesData[] | cdktf.IResolvable) {
    this._resourcesData.internalValue = value;
  }
  public resetResourcesData() {
    this._resourcesData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesDataInput() {
    return this._resourcesData.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scopes_data - computed: false, optional: true, required: false
  private _scopesData?: string[]; 
  public get scopesData() {
    return this.getListAttribute('scopes_data');
  }
  public set scopesData(value: string[]) {
    this._scopesData = value;
  }
  public resetScopesData() {
    this._scopesData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesDataInput() {
    return this._scopesData;
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
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
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

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
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

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The decision strategy dictates how the policies associated with a given permission are evaluated and how a final decision is obtained. 'Affirmative' means that at least one policy must evaluate to a positive decision in order for the final decision to be also positive. 'Unanimous' means that all policies must evaluate to a positive decision in order for the final decision to be also positive. 'Consensus' means that the number of positive decisions must be greater than the number of negative decisions. If the number of positive and negative is the same, the final decision will be negative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#decision_strategy DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * A description for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The logic dictates how the policy decision should be made. If 'Positive', the resulting effect (permit or deny) obtained during the evaluation of this policy will be used to perform a decision. If 'Negative', the resulting effect will be negated, in other words, a permit becomes a deny and vice-versa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#logic DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#logic}
  */
  readonly logic?: string;
  /**
  * The name of this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#owner DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#policies}
  */
  readonly policies?: string[];
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Resources Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#resources_data DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#resources_data}
  */
  readonly resourcesData?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData[] | cdktf.IResolvable;
  /**
  * Scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Scopes Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes_data DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes_data}
  */
  readonly scopesData?: string[];
  /**
  * Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    logic: cdktf.stringToTerraform(struct!.logic),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    resources_data: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataToTerraform, false)(struct!.resourcesData),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    scopes_data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopesData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources_data: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataToHclTerraform, false)(struct!.resourcesData),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataList",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scopes_data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopesData),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._resourcesData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesData = this._resourcesData?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scopesData !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopesData = this._scopesData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._id = undefined;
      this._logic = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._policies = undefined;
      this._resources = undefined;
      this._resourcesData.internalValue = undefined;
      this._scopes = undefined;
      this._scopesData = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._id = value.id;
      this._logic = value.logic;
      this._name = value.name;
      this._owner = value.owner;
      this._policies = value.policies;
      this._resources = value.resources;
      this._resourcesData.internalValue = value.resourcesData;
      this._scopes = value.scopes;
      this._scopesData = value.scopesData;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
  }

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

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // resources_data - computed: false, optional: true, required: false
  private _resourcesData = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesDataList(this, "resources_data", false);
  public get resourcesData() {
    return this._resourcesData;
  }
  public putResourcesData(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesResourcesData[] | cdktf.IResolvable) {
    this._resourcesData.internalValue = value;
  }
  public resetResourcesData() {
    this._resourcesData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesDataInput() {
    return this._resourcesData.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scopes_data - computed: false, optional: true, required: false
  private _scopesData?: string[]; 
  public get scopesData() {
    return this.getListAttribute('scopes_data');
  }
  public set scopesData(value: string[]) {
    this._scopesData = value;
  }
  public resetScopesData() {
    this._scopesData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesDataInput() {
    return this._scopesData;
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
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
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

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes {
  /**
  * A unique name for this scope. The name can be used to uniquely identify a scope, useful when querying for a specific scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique name for this scope. The name can be used to uniquely identify a scope, useful when querying for a specific scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies[] | cdktf.IResolvable;
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesToTerraform, false)(struct!.policies),
    resources: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    policies: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesList",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._id = undefined;
      this._name = undefined;
      this._policies.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._id = value.id;
      this._name = value.name;
      this._policies.internalValue = value.policies;
      this._resources.internalValue = value.resources;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings {
  /**
  * True if resources should be managed remotely by the resource server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#allow_remote_resource_management DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#allow_remote_resource_management}
  */
  readonly allowRemoteResourceManagement?: boolean | cdktf.IResolvable;
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * The decision strategy dictates how permissions are evaluated and how a final decision is obtained. 'Affirmative' means that at least one permission must evaluate to a positive decision in order to grant access to a resource and its scopes. 'Unanimous' means that all permissions must evaluate to a positive decision in order for the final decision to be also positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#decision_strategy DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies[] | cdktf.IResolvable;
  /**
  * The policy enforcement mode dictates how policies are enforced when evaluating authorization requests. 'Enforcing' means requests are denied by default even when there is no policy associated with a given resource. 'Permissive' means requests are allowed even when there is no policy associated with a given resource. 'Disabled' completely disables the evaluation of policies and allows access to any resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#policy_enforcement_mode DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#policy_enforcement_mode}
  */
  readonly policyEnforcementMode?: string;
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources[] | cdktf.IResolvable;
  /**
  * Authorization Scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scopes}
  */
  readonly scopes?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_remote_resource_management: cdktf.booleanToTerraform(struct!.allowRemoteResourceManagement),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesToTerraform, false)(struct!.policies),
    policy_enforcement_mode: cdktf.stringToTerraform(struct!.policyEnforcementMode),
    resources: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesToTerraform, false)(struct!.resources),
    scopes: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesToTerraform, false)(struct!.scopes),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_remote_resource_management: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteResourceManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    policies: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesList",
    },
    policy_enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.policyEnforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesList",
    },
    scopes: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesToHclTerraform, false)(struct!.scopes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteResourceManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteResourceManagement = this._allowRemoteResourceManagement;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._policyEnforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyEnforcementMode = this._policyEnforcementMode;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._scopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRemoteResourceManagement = undefined;
      this._clientId = undefined;
      this._decisionStrategy = undefined;
      this._id = undefined;
      this._name = undefined;
      this._policies.internalValue = undefined;
      this._policyEnforcementMode = undefined;
      this._resources.internalValue = undefined;
      this._scopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRemoteResourceManagement = value.allowRemoteResourceManagement;
      this._clientId = value.clientId;
      this._decisionStrategy = value.decisionStrategy;
      this._id = value.id;
      this._name = value.name;
      this._policies.internalValue = value.policies;
      this._policyEnforcementMode = value.policyEnforcementMode;
      this._resources.internalValue = value.resources;
      this._scopes.internalValue = value.scopes;
    }
  }

  // allow_remote_resource_management - computed: false, optional: true, required: false
  private _allowRemoteResourceManagement?: boolean | cdktf.IResolvable; 
  public get allowRemoteResourceManagement() {
    return this.getBooleanAttribute('allow_remote_resource_management');
  }
  public set allowRemoteResourceManagement(value: boolean | cdktf.IResolvable) {
    this._allowRemoteResourceManagement = value;
  }
  public resetAllowRemoteResourceManagement() {
    this._allowRemoteResourceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteResourceManagementInput() {
    return this._allowRemoteResourceManagement;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // policy_enforcement_mode - computed: false, optional: true, required: false
  private _policyEnforcementMode?: string; 
  public get policyEnforcementMode() {
    return this.getStringAttribute('policy_enforcement_mode');
  }
  public set policyEnforcementMode(value: string) {
    this._policyEnforcementMode = value;
  }
  public resetPolicyEnforcementMode() {
    this._policyEnforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementModeInput() {
    return this._policyEnforcementMode;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers {
  /**
  * Config options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * True if Consent Screen is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#consent_required DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#consent_required}
  */
  readonly consentRequired?: boolean | cdktf.IResolvable;
  /**
  * Text to use for displaying Consent Screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#consent_text DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#consent_text}
  */
  readonly consentText?: string;
  /**
  * Protocol Mapper ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol Mapper Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Mapper to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol_mapper DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol_mapper}
  */
  readonly protocolMapper?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    consent_text: cdktf.stringToTerraform(struct!.consentText),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_mapper: cdktf.stringToTerraform(struct!.protocolMapper),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    consent_required: {
      value: cdktf.booleanToHclTerraform(struct!.consentRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consent_text: {
      value: cdktf.stringToHclTerraform(struct!.consentText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_mapper: {
      value: cdktf.stringToHclTerraform(struct!.protocolMapper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._consentRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentRequired = this._consentRequired;
    }
    if (this._consentText !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentText = this._consentText;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolMapper !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMapper = this._protocolMapper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._consentRequired = undefined;
      this._consentText = undefined;
      this._id = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._protocolMapper = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._consentRequired = value.consentRequired;
      this._consentText = value.consentText;
      this._id = value.id;
      this._name = value.name;
      this._protocol = value.protocol;
      this._protocolMapper = value.protocolMapper;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // consent_required - computed: false, optional: true, required: false
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  public resetConsentRequired() {
    this._consentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // consent_text - computed: false, optional: true, required: false
  private _consentText?: string; 
  public get consentText() {
    return this.getStringAttribute('consent_text');
  }
  public set consentText(value: string) {
    this._consentText = value;
  }
  public resetConsentText() {
    this._consentText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentTextInput() {
    return this._consentText;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_mapper - computed: false, optional: true, required: false
  private _protocolMapper?: string; 
  public get protocolMapper() {
    return this.getStringAttribute('protocol_mapper');
  }
  public set protocolMapper(value: string) {
    this._protocolMapper = value;
  }
  public resetProtocolMapper() {
    this._protocolMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMapperInput() {
    return this._protocolMapper;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients {
  /**
  * Access options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#access DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#access}
  */
  readonly access?: { [key: string]: string };
  /**
  * Application Admin URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#admin_url DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#admin_url}
  */
  readonly adminUrl?: string;
  /**
  * Client Attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Authentication Flow Binding Overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authentication_flow_binding_overrides DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authentication_flow_binding_overrides}
  */
  readonly authenticationFlowBindingOverrides?: { [key: string]: string };
  /**
  * True if fine-grained authorization support is enabled for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authorization_services_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authorization_services_enabled}
  */
  readonly authorizationServicesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Authorization settings for this resource server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authorization_settings DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authorization_settings}
  */
  readonly authorizationSettings?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings;
  /**
  * Application base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#base_url DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#base_url}
  */
  readonly baseUrl?: string;
  /**
  * True if a client supports only Bearer Tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#bearer_only DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#bearer_only}
  */
  readonly bearerOnly?: boolean | cdktf.IResolvable;
  /**
  * What Client authentication type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_authenticator_type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_authenticator_type}
  */
  readonly clientAuthenticatorType?: string;
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_id}
  */
  readonly clientId: string;
  /**
  * True if Consent Screen is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#consent_required DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#consent_required}
  */
  readonly consentRequired?: boolean | cdktf.IResolvable;
  /**
  * A list of default client scopes. Default client scopes are always applied when issuing OpenID Connect tokens or SAML assertions for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#default_client_scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#default_client_scopes}
  */
  readonly defaultClientScopes?: string[];
  /**
  * Default Client roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#default_roles DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#default_roles}
  */
  readonly defaultRoles?: string[];
  /**
  * Client description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * True if Direct Grant is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#direct_access_grants_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#direct_access_grants_enabled}
  */
  readonly directAccessGrantsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Client enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * True if this client supports Front Channel logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#frontchannel_logout DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#frontchannel_logout}
  */
  readonly frontchannelLogout?: boolean | cdktf.IResolvable;
  /**
  * True if Full Scope is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#full_scope_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#full_scope_allowed}
  */
  readonly fullScopeAllowed?: boolean | cdktf.IResolvable;
  /**
  * Client ID. If not specified, automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if Implicit flow is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#implicit_flow_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#implicit_flow_enabled}
  */
  readonly implicitFlowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Node registration timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#node_re_registration_timeout DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#node_re_registration_timeout}
  */
  readonly nodeReRegistrationTimeout?: number;
  /**
  * Not Before setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#not_before DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#not_before}
  */
  readonly notBefore?: number;
  /**
  * A list of optional client scopes. Optional client scopes are applied when issuing tokens for this client, but only when they are requested by the scope parameter in the OpenID Connect authorization request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#optional_client_scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#optional_client_scopes}
  */
  readonly optionalClientScopes?: string[];
  /**
  * Protocol used for this Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Mappers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#protocol_mappers DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#protocol_mappers}
  */
  readonly protocolMappers?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers[] | cdktf.IResolvable;
  /**
  * True if this is a public Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#public_client DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#public_client}
  */
  readonly publicClient?: boolean | cdktf.IResolvable;
  /**
  * A list of valid Redirection URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#redirect_uris DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Application root URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#root_url DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#root_url}
  */
  readonly rootUrl?: string;
  /**
  * Client Secret. The Operator will automatically create a Secret based on this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#secret DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * True if Service Accounts are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#service_accounts_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#service_accounts_enabled}
  */
  readonly serviceAccountsEnabled?: boolean | cdktf.IResolvable;
  /**
  * True if Standard flow is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#standard_flow_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#standard_flow_enabled}
  */
  readonly standardFlowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Surrogate Authentication Required option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#surrogate_auth_required DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#surrogate_auth_required}
  */
  readonly surrogateAuthRequired?: boolean | cdktf.IResolvable;
  /**
  * True to use a Template Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#use_template_config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#use_template_config}
  */
  readonly useTemplateConfig?: boolean | cdktf.IResolvable;
  /**
  * True to use Template Mappers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#use_template_mappers DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#use_template_mappers}
  */
  readonly useTemplateMappers?: boolean | cdktf.IResolvable;
  /**
  * True to use Template Scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#use_template_scope DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#use_template_scope}
  */
  readonly useTemplateScope?: boolean | cdktf.IResolvable;
  /**
  * A list of valid Web Origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#web_origins DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#web_origins}
  */
  readonly webOrigins?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.access),
    admin_url: cdktf.stringToTerraform(struct!.adminUrl),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    authentication_flow_binding_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authenticationFlowBindingOverrides),
    authorization_services_enabled: cdktf.booleanToTerraform(struct!.authorizationServicesEnabled),
    authorization_settings: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsToTerraform(struct!.authorizationSettings),
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    bearer_only: cdktf.booleanToTerraform(struct!.bearerOnly),
    client_authenticator_type: cdktf.stringToTerraform(struct!.clientAuthenticatorType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    default_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultClientScopes),
    default_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultRoles),
    description: cdktf.stringToTerraform(struct!.description),
    direct_access_grants_enabled: cdktf.booleanToTerraform(struct!.directAccessGrantsEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frontchannel_logout: cdktf.booleanToTerraform(struct!.frontchannelLogout),
    full_scope_allowed: cdktf.booleanToTerraform(struct!.fullScopeAllowed),
    id: cdktf.stringToTerraform(struct!.id),
    implicit_flow_enabled: cdktf.booleanToTerraform(struct!.implicitFlowEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    node_re_registration_timeout: cdktf.numberToTerraform(struct!.nodeReRegistrationTimeout),
    not_before: cdktf.numberToTerraform(struct!.notBefore),
    optional_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionalClientScopes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_mappers: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersToTerraform, false)(struct!.protocolMappers),
    public_client: cdktf.booleanToTerraform(struct!.publicClient),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    root_url: cdktf.stringToTerraform(struct!.rootUrl),
    secret: cdktf.stringToTerraform(struct!.secret),
    service_accounts_enabled: cdktf.booleanToTerraform(struct!.serviceAccountsEnabled),
    standard_flow_enabled: cdktf.booleanToTerraform(struct!.standardFlowEnabled),
    surrogate_auth_required: cdktf.booleanToTerraform(struct!.surrogateAuthRequired),
    use_template_config: cdktf.booleanToTerraform(struct!.useTemplateConfig),
    use_template_mappers: cdktf.booleanToTerraform(struct!.useTemplateMappers),
    use_template_scope: cdktf.booleanToTerraform(struct!.useTemplateScope),
    web_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webOrigins),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.access),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    admin_url: {
      value: cdktf.stringToHclTerraform(struct!.adminUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authentication_flow_binding_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authenticationFlowBindingOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_services_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.authorizationServicesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authorization_settings: {
      value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsToHclTerraform(struct!.authorizationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings",
    },
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_only: {
      value: cdktf.booleanToHclTerraform(struct!.bearerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_authenticator_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthenticatorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consent_required: {
      value: cdktf.booleanToHclTerraform(struct!.consentRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_client_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultClientScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_access_grants_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.directAccessGrantsEnabled),
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
    frontchannel_logout: {
      value: cdktf.booleanToHclTerraform(struct!.frontchannelLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_scope_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.fullScopeAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    implicit_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.implicitFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_re_registration_timeout: {
      value: cdktf.numberToHclTerraform(struct!.nodeReRegistrationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_before: {
      value: cdktf.numberToHclTerraform(struct!.notBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optional_client_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionalClientScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_mappers: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersToHclTerraform, false)(struct!.protocolMappers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersList",
    },
    public_client: {
      value: cdktf.booleanToHclTerraform(struct!.publicClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    root_url: {
      value: cdktf.stringToHclTerraform(struct!.rootUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_accounts_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceAccountsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standard_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.standardFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    surrogate_auth_required: {
      value: cdktf.booleanToHclTerraform(struct!.surrogateAuthRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_template_config: {
      value: cdktf.booleanToHclTerraform(struct!.useTemplateConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_template_mappers: {
      value: cdktf.booleanToHclTerraform(struct!.useTemplateMappers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_template_scope: {
      value: cdktf.booleanToHclTerraform(struct!.useTemplateScope),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._adminUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUrl = this._adminUrl;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._authenticationFlowBindingOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationFlowBindingOverrides = this._authenticationFlowBindingOverrides;
    }
    if (this._authorizationServicesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationServicesEnabled = this._authorizationServicesEnabled;
    }
    if (this._authorizationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationSettings = this._authorizationSettings?.internalValue;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._bearerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerOnly = this._bearerOnly;
    }
    if (this._clientAuthenticatorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthenticatorType = this._clientAuthenticatorType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._consentRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentRequired = this._consentRequired;
    }
    if (this._defaultClientScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultClientScopes = this._defaultClientScopes;
    }
    if (this._defaultRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoles = this._defaultRoles;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._directAccessGrantsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.directAccessGrantsEnabled = this._directAccessGrantsEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._frontchannelLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontchannelLogout = this._frontchannelLogout;
    }
    if (this._fullScopeAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullScopeAllowed = this._fullScopeAllowed;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._implicitFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitFlowEnabled = this._implicitFlowEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeReRegistrationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeReRegistrationTimeout = this._nodeReRegistrationTimeout;
    }
    if (this._notBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBefore = this._notBefore;
    }
    if (this._optionalClientScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalClientScopes = this._optionalClientScopes;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolMappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMappers = this._protocolMappers?.internalValue;
    }
    if (this._publicClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicClient = this._publicClient;
    }
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._rootUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootUrl = this._rootUrl;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._serviceAccountsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountsEnabled = this._serviceAccountsEnabled;
    }
    if (this._standardFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardFlowEnabled = this._standardFlowEnabled;
    }
    if (this._surrogateAuthRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateAuthRequired = this._surrogateAuthRequired;
    }
    if (this._useTemplateConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTemplateConfig = this._useTemplateConfig;
    }
    if (this._useTemplateMappers !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTemplateMappers = this._useTemplateMappers;
    }
    if (this._useTemplateScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTemplateScope = this._useTemplateScope;
    }
    if (this._webOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.webOrigins = this._webOrigins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._adminUrl = undefined;
      this._attributes = undefined;
      this._authenticationFlowBindingOverrides = undefined;
      this._authorizationServicesEnabled = undefined;
      this._authorizationSettings.internalValue = undefined;
      this._baseUrl = undefined;
      this._bearerOnly = undefined;
      this._clientAuthenticatorType = undefined;
      this._clientId = undefined;
      this._consentRequired = undefined;
      this._defaultClientScopes = undefined;
      this._defaultRoles = undefined;
      this._description = undefined;
      this._directAccessGrantsEnabled = undefined;
      this._enabled = undefined;
      this._frontchannelLogout = undefined;
      this._fullScopeAllowed = undefined;
      this._id = undefined;
      this._implicitFlowEnabled = undefined;
      this._name = undefined;
      this._nodeReRegistrationTimeout = undefined;
      this._notBefore = undefined;
      this._optionalClientScopes = undefined;
      this._protocol = undefined;
      this._protocolMappers.internalValue = undefined;
      this._publicClient = undefined;
      this._redirectUris = undefined;
      this._rootUrl = undefined;
      this._secret = undefined;
      this._serviceAccountsEnabled = undefined;
      this._standardFlowEnabled = undefined;
      this._surrogateAuthRequired = undefined;
      this._useTemplateConfig = undefined;
      this._useTemplateMappers = undefined;
      this._useTemplateScope = undefined;
      this._webOrigins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._adminUrl = value.adminUrl;
      this._attributes = value.attributes;
      this._authenticationFlowBindingOverrides = value.authenticationFlowBindingOverrides;
      this._authorizationServicesEnabled = value.authorizationServicesEnabled;
      this._authorizationSettings.internalValue = value.authorizationSettings;
      this._baseUrl = value.baseUrl;
      this._bearerOnly = value.bearerOnly;
      this._clientAuthenticatorType = value.clientAuthenticatorType;
      this._clientId = value.clientId;
      this._consentRequired = value.consentRequired;
      this._defaultClientScopes = value.defaultClientScopes;
      this._defaultRoles = value.defaultRoles;
      this._description = value.description;
      this._directAccessGrantsEnabled = value.directAccessGrantsEnabled;
      this._enabled = value.enabled;
      this._frontchannelLogout = value.frontchannelLogout;
      this._fullScopeAllowed = value.fullScopeAllowed;
      this._id = value.id;
      this._implicitFlowEnabled = value.implicitFlowEnabled;
      this._name = value.name;
      this._nodeReRegistrationTimeout = value.nodeReRegistrationTimeout;
      this._notBefore = value.notBefore;
      this._optionalClientScopes = value.optionalClientScopes;
      this._protocol = value.protocol;
      this._protocolMappers.internalValue = value.protocolMappers;
      this._publicClient = value.publicClient;
      this._redirectUris = value.redirectUris;
      this._rootUrl = value.rootUrl;
      this._secret = value.secret;
      this._serviceAccountsEnabled = value.serviceAccountsEnabled;
      this._standardFlowEnabled = value.standardFlowEnabled;
      this._surrogateAuthRequired = value.surrogateAuthRequired;
      this._useTemplateConfig = value.useTemplateConfig;
      this._useTemplateMappers = value.useTemplateMappers;
      this._useTemplateScope = value.useTemplateScope;
      this._webOrigins = value.webOrigins;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: { [key: string]: string }; 
  public get access() {
    return this.getStringMapAttribute('access');
  }
  public set access(value: { [key: string]: string }) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // admin_url - computed: false, optional: true, required: false
  private _adminUrl?: string; 
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }
  public set adminUrl(value: string) {
    this._adminUrl = value;
  }
  public resetAdminUrl() {
    this._adminUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUrlInput() {
    return this._adminUrl;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authentication_flow_binding_overrides - computed: false, optional: true, required: false
  private _authenticationFlowBindingOverrides?: { [key: string]: string }; 
  public get authenticationFlowBindingOverrides() {
    return this.getStringMapAttribute('authentication_flow_binding_overrides');
  }
  public set authenticationFlowBindingOverrides(value: { [key: string]: string }) {
    this._authenticationFlowBindingOverrides = value;
  }
  public resetAuthenticationFlowBindingOverrides() {
    this._authenticationFlowBindingOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowBindingOverridesInput() {
    return this._authenticationFlowBindingOverrides;
  }

  // authorization_services_enabled - computed: false, optional: true, required: false
  private _authorizationServicesEnabled?: boolean | cdktf.IResolvable; 
  public get authorizationServicesEnabled() {
    return this.getBooleanAttribute('authorization_services_enabled');
  }
  public set authorizationServicesEnabled(value: boolean | cdktf.IResolvable) {
    this._authorizationServicesEnabled = value;
  }
  public resetAuthorizationServicesEnabled() {
    this._authorizationServicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServicesEnabledInput() {
    return this._authorizationServicesEnabled;
  }

  // authorization_settings - computed: false, optional: true, required: false
  private _authorizationSettings = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettingsOutputReference(this, "authorization_settings");
  public get authorizationSettings() {
    return this._authorizationSettings;
  }
  public putAuthorizationSettings(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsAuthorizationSettings) {
    this._authorizationSettings.internalValue = value;
  }
  public resetAuthorizationSettings() {
    this._authorizationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSettingsInput() {
    return this._authorizationSettings.internalValue;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // bearer_only - computed: false, optional: true, required: false
  private _bearerOnly?: boolean | cdktf.IResolvable; 
  public get bearerOnly() {
    return this.getBooleanAttribute('bearer_only');
  }
  public set bearerOnly(value: boolean | cdktf.IResolvable) {
    this._bearerOnly = value;
  }
  public resetBearerOnly() {
    this._bearerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerOnlyInput() {
    return this._bearerOnly;
  }

  // client_authenticator_type - computed: false, optional: true, required: false
  private _clientAuthenticatorType?: string; 
  public get clientAuthenticatorType() {
    return this.getStringAttribute('client_authenticator_type');
  }
  public set clientAuthenticatorType(value: string) {
    this._clientAuthenticatorType = value;
  }
  public resetClientAuthenticatorType() {
    this._clientAuthenticatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticatorTypeInput() {
    return this._clientAuthenticatorType;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // consent_required - computed: false, optional: true, required: false
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  public resetConsentRequired() {
    this._consentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // default_client_scopes - computed: false, optional: true, required: false
  private _defaultClientScopes?: string[]; 
  public get defaultClientScopes() {
    return this.getListAttribute('default_client_scopes');
  }
  public set defaultClientScopes(value: string[]) {
    this._defaultClientScopes = value;
  }
  public resetDefaultClientScopes() {
    this._defaultClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClientScopesInput() {
    return this._defaultClientScopes;
  }

  // default_roles - computed: false, optional: true, required: false
  private _defaultRoles?: string[]; 
  public get defaultRoles() {
    return this.getListAttribute('default_roles');
  }
  public set defaultRoles(value: string[]) {
    this._defaultRoles = value;
  }
  public resetDefaultRoles() {
    this._defaultRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRolesInput() {
    return this._defaultRoles;
  }

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

  // direct_access_grants_enabled - computed: false, optional: true, required: false
  private _directAccessGrantsEnabled?: boolean | cdktf.IResolvable; 
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }
  public set directAccessGrantsEnabled(value: boolean | cdktf.IResolvable) {
    this._directAccessGrantsEnabled = value;
  }
  public resetDirectAccessGrantsEnabled() {
    this._directAccessGrantsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessGrantsEnabledInput() {
    return this._directAccessGrantsEnabled;
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

  // frontchannel_logout - computed: false, optional: true, required: false
  private _frontchannelLogout?: boolean | cdktf.IResolvable; 
  public get frontchannelLogout() {
    return this.getBooleanAttribute('frontchannel_logout');
  }
  public set frontchannelLogout(value: boolean | cdktf.IResolvable) {
    this._frontchannelLogout = value;
  }
  public resetFrontchannelLogout() {
    this._frontchannelLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutInput() {
    return this._frontchannelLogout;
  }

  // full_scope_allowed - computed: false, optional: true, required: false
  private _fullScopeAllowed?: boolean | cdktf.IResolvable; 
  public get fullScopeAllowed() {
    return this.getBooleanAttribute('full_scope_allowed');
  }
  public set fullScopeAllowed(value: boolean | cdktf.IResolvable) {
    this._fullScopeAllowed = value;
  }
  public resetFullScopeAllowed() {
    this._fullScopeAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullScopeAllowedInput() {
    return this._fullScopeAllowed;
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

  // implicit_flow_enabled - computed: false, optional: true, required: false
  private _implicitFlowEnabled?: boolean | cdktf.IResolvable; 
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }
  public set implicitFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitFlowEnabled = value;
  }
  public resetImplicitFlowEnabled() {
    this._implicitFlowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitFlowEnabledInput() {
    return this._implicitFlowEnabled;
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

  // node_re_registration_timeout - computed: false, optional: true, required: false
  private _nodeReRegistrationTimeout?: number; 
  public get nodeReRegistrationTimeout() {
    return this.getNumberAttribute('node_re_registration_timeout');
  }
  public set nodeReRegistrationTimeout(value: number) {
    this._nodeReRegistrationTimeout = value;
  }
  public resetNodeReRegistrationTimeout() {
    this._nodeReRegistrationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeReRegistrationTimeoutInput() {
    return this._nodeReRegistrationTimeout;
  }

  // not_before - computed: false, optional: true, required: false
  private _notBefore?: number; 
  public get notBefore() {
    return this.getNumberAttribute('not_before');
  }
  public set notBefore(value: number) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // optional_client_scopes - computed: false, optional: true, required: false
  private _optionalClientScopes?: string[]; 
  public get optionalClientScopes() {
    return this.getListAttribute('optional_client_scopes');
  }
  public set optionalClientScopes(value: string[]) {
    this._optionalClientScopes = value;
  }
  public resetOptionalClientScopes() {
    this._optionalClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalClientScopesInput() {
    return this._optionalClientScopes;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_mappers - computed: false, optional: true, required: false
  private _protocolMappers = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappersList(this, "protocol_mappers", false);
  public get protocolMappers() {
    return this._protocolMappers;
  }
  public putProtocolMappers(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsProtocolMappers[] | cdktf.IResolvable) {
    this._protocolMappers.internalValue = value;
  }
  public resetProtocolMappers() {
    this._protocolMappers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMappersInput() {
    return this._protocolMappers.internalValue;
  }

  // public_client - computed: false, optional: true, required: false
  private _publicClient?: boolean | cdktf.IResolvable; 
  public get publicClient() {
    return this.getBooleanAttribute('public_client');
  }
  public set publicClient(value: boolean | cdktf.IResolvable) {
    this._publicClient = value;
  }
  public resetPublicClient() {
    this._publicClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicClientInput() {
    return this._publicClient;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // root_url - computed: false, optional: true, required: false
  private _rootUrl?: string; 
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }
  public set rootUrl(value: string) {
    this._rootUrl = value;
  }
  public resetRootUrl() {
    this._rootUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUrlInput() {
    return this._rootUrl;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_accounts_enabled - computed: false, optional: true, required: false
  private _serviceAccountsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }
  public set serviceAccountsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAccountsEnabled = value;
  }
  public resetServiceAccountsEnabled() {
    this._serviceAccountsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsEnabledInput() {
    return this._serviceAccountsEnabled;
  }

  // standard_flow_enabled - computed: false, optional: true, required: false
  private _standardFlowEnabled?: boolean | cdktf.IResolvable; 
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }
  public set standardFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._standardFlowEnabled = value;
  }
  public resetStandardFlowEnabled() {
    this._standardFlowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardFlowEnabledInput() {
    return this._standardFlowEnabled;
  }

  // surrogate_auth_required - computed: false, optional: true, required: false
  private _surrogateAuthRequired?: boolean | cdktf.IResolvable; 
  public get surrogateAuthRequired() {
    return this.getBooleanAttribute('surrogate_auth_required');
  }
  public set surrogateAuthRequired(value: boolean | cdktf.IResolvable) {
    this._surrogateAuthRequired = value;
  }
  public resetSurrogateAuthRequired() {
    this._surrogateAuthRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateAuthRequiredInput() {
    return this._surrogateAuthRequired;
  }

  // use_template_config - computed: false, optional: true, required: false
  private _useTemplateConfig?: boolean | cdktf.IResolvable; 
  public get useTemplateConfig() {
    return this.getBooleanAttribute('use_template_config');
  }
  public set useTemplateConfig(value: boolean | cdktf.IResolvable) {
    this._useTemplateConfig = value;
  }
  public resetUseTemplateConfig() {
    this._useTemplateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTemplateConfigInput() {
    return this._useTemplateConfig;
  }

  // use_template_mappers - computed: false, optional: true, required: false
  private _useTemplateMappers?: boolean | cdktf.IResolvable; 
  public get useTemplateMappers() {
    return this.getBooleanAttribute('use_template_mappers');
  }
  public set useTemplateMappers(value: boolean | cdktf.IResolvable) {
    this._useTemplateMappers = value;
  }
  public resetUseTemplateMappers() {
    this._useTemplateMappers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTemplateMappersInput() {
    return this._useTemplateMappers;
  }

  // use_template_scope - computed: false, optional: true, required: false
  private _useTemplateScope?: boolean | cdktf.IResolvable; 
  public get useTemplateScope() {
    return this.getBooleanAttribute('use_template_scope');
  }
  public set useTemplateScope(value: boolean | cdktf.IResolvable) {
    this._useTemplateScope = value;
  }
  public resetUseTemplateScope() {
    this._useTemplateScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTemplateScopeInput() {
    return this._useTemplateScope;
  }

  // web_origins - computed: false, optional: true, required: false
  private _webOrigins?: string[]; 
  public get webOrigins() {
    return this.getListAttribute('web_origins');
  }
  public set webOrigins(value: string[]) {
    this._webOrigins = value;
  }
  public resetWebOrigins() {
    this._webOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webOriginsInput() {
    return this._webOrigins;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites {
  /**
  * Map client => []role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client}
  */
  readonly client?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Realm roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#realm}
  */
  readonly realm?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleCompositesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.client),
    realm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realm),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleCompositesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.client),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    realm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.realm),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleCompositesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._realm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._realm = value.realm;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get client() {
    return this.interpolationForAttribute('client');
  }
  public set client(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string[]; 
  public get realm() {
    return this.getListAttribute('realm');
  }
  public set realm(value: string[]) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole {
  /**
  * Role Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Client Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_role DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_role}
  */
  readonly clientRole?: boolean | cdktf.IResolvable;
  /**
  * Composite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#composite DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#composite}
  */
  readonly composite?: boolean | cdktf.IResolvable;
  /**
  * Composites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#composites DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#composites}
  */
  readonly composites?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites;
  /**
  * Container Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#container_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.attributes),
    client_role: cdktf.booleanToTerraform(struct!.clientRole),
    composite: cdktf.booleanToTerraform(struct!.composite),
    composites: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleCompositesToTerraform(struct!.composites),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole | cdktf.IResolvable): any {
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
    client_role: {
      value: cdktf.booleanToHclTerraform(struct!.clientRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composite: {
      value: cdktf.booleanToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composites: {
      value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleCompositesToHclTerraform(struct!.composites),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._clientRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRole = this._clientRole;
    }
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
    }
    if (this._composites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composites = this._composites?.internalValue;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._clientRole = undefined;
      this._composite = undefined;
      this._composites.internalValue = undefined;
      this._containerId = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._clientRole = value.clientRole;
      this._composite = value.composite;
      this._composites.internalValue = value.composites;
      this._containerId = value.containerId;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
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

  // client_role - computed: false, optional: true, required: false
  private _clientRole?: boolean | cdktf.IResolvable; 
  public get clientRole() {
    return this.getBooleanAttribute('client_role');
  }
  public set clientRole(value: boolean | cdktf.IResolvable) {
    this._clientRole = value;
  }
  public resetClientRole() {
    this._clientRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRoleInput() {
    return this._clientRole;
  }

  // composite - computed: false, optional: true, required: false
  private _composite?: boolean | cdktf.IResolvable; 
  public get composite() {
    return this.getBooleanAttribute('composite');
  }
  public set composite(value: boolean | cdktf.IResolvable) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
  }

  // composites - computed: false, optional: true, required: false
  private _composites = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleCompositesOutputReference(this, "composites");
  public get composites() {
    return this._composites;
  }
  public putComposites(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleComposites) {
    this._composites.internalValue = value;
  }
  public resetComposites() {
    this._composites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositesInput() {
    return this._composites.internalValue;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

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
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers {
  /**
  * Identity Provider Mapper config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identity Provider Alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#identity_provider_alias DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#identity_provider_alias}
  */
  readonly identityProviderAlias?: string;
  /**
  * Identity Provider Mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#identity_provider_mapper DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#identity_provider_mapper}
  */
  readonly identityProviderMapper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_alias: cdktf.stringToTerraform(struct!.identityProviderAlias),
    identity_provider_mapper: cdktf.stringToTerraform(struct!.identityProviderMapper),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_alias: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_mapper: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderMapper),
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderAlias = this._identityProviderAlias;
    }
    if (this._identityProviderMapper !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderMapper = this._identityProviderMapper;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._id = undefined;
      this._identityProviderAlias = undefined;
      this._identityProviderMapper = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._id = value.id;
      this._identityProviderAlias = value.identityProviderAlias;
      this._identityProviderMapper = value.identityProviderMapper;
      this._name = value.name;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // identity_provider_alias - computed: false, optional: true, required: false
  private _identityProviderAlias?: string; 
  public get identityProviderAlias() {
    return this.getStringAttribute('identity_provider_alias');
  }
  public set identityProviderAlias(value: string) {
    this._identityProviderAlias = value;
  }
  public resetIdentityProviderAlias() {
    this._identityProviderAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderAliasInput() {
    return this._identityProviderAlias;
  }

  // identity_provider_mapper - computed: false, optional: true, required: false
  private _identityProviderMapper?: string; 
  public get identityProviderMapper() {
    return this.getStringAttribute('identity_provider_mapper');
  }
  public set identityProviderMapper(value: string) {
    this._identityProviderMapper = value;
  }
  public resetIdentityProviderMapper() {
    this._identityProviderMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderMapperInput() {
    return this._identityProviderMapper;
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
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders {
  /**
  * Adds Read Token role when creating this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#add_read_token_role_on_create DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#add_read_token_role_on_create}
  */
  readonly addReadTokenRoleOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Identity Provider Alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#alias DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Identity Provider config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Identity Provider Display Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Identity Provider enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Identity Provider First Broker Login Flow Alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#first_broker_login_flow_alias DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#first_broker_login_flow_alias}
  */
  readonly firstBrokerLoginFlowAlias?: string;
  /**
  * Identity Provider Internal ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#internal_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#internal_id}
  */
  readonly internalId?: string;
  /**
  * Identity Provider Link Only setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#link_only DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#link_only}
  */
  readonly linkOnly?: boolean | cdktf.IResolvable;
  /**
  * Identity Provider Post Broker Login Flow Alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#post_broker_login_flow_alias DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#post_broker_login_flow_alias}
  */
  readonly postBrokerLoginFlowAlias?: string;
  /**
  * Identity Provider ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#provider_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * Identity Provider Store to Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#store_token DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#store_token}
  */
  readonly storeToken?: boolean | cdktf.IResolvable;
  /**
  * Identity Provider Trust Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#trust_email DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#trust_email}
  */
  readonly trustEmail?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_read_token_role_on_create: cdktf.booleanToTerraform(struct!.addReadTokenRoleOnCreate),
    alias: cdktf.stringToTerraform(struct!.alias),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    first_broker_login_flow_alias: cdktf.stringToTerraform(struct!.firstBrokerLoginFlowAlias),
    internal_id: cdktf.stringToTerraform(struct!.internalId),
    link_only: cdktf.booleanToTerraform(struct!.linkOnly),
    post_broker_login_flow_alias: cdktf.stringToTerraform(struct!.postBrokerLoginFlowAlias),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    store_token: cdktf.booleanToTerraform(struct!.storeToken),
    trust_email: cdktf.booleanToTerraform(struct!.trustEmail),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_read_token_role_on_create: {
      value: cdktf.booleanToHclTerraform(struct!.addReadTokenRoleOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    first_broker_login_flow_alias: {
      value: cdktf.stringToHclTerraform(struct!.firstBrokerLoginFlowAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_id: {
      value: cdktf.stringToHclTerraform(struct!.internalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_only: {
      value: cdktf.booleanToHclTerraform(struct!.linkOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_broker_login_flow_alias: {
      value: cdktf.stringToHclTerraform(struct!.postBrokerLoginFlowAlias),
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
    store_token: {
      value: cdktf.booleanToHclTerraform(struct!.storeToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_email: {
      value: cdktf.booleanToHclTerraform(struct!.trustEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addReadTokenRoleOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.addReadTokenRoleOnCreate = this._addReadTokenRoleOnCreate;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._firstBrokerLoginFlowAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstBrokerLoginFlowAlias = this._firstBrokerLoginFlowAlias;
    }
    if (this._internalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalId = this._internalId;
    }
    if (this._linkOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkOnly = this._linkOnly;
    }
    if (this._postBrokerLoginFlowAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBrokerLoginFlowAlias = this._postBrokerLoginFlowAlias;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._storeToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeToken = this._storeToken;
    }
    if (this._trustEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustEmail = this._trustEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addReadTokenRoleOnCreate = undefined;
      this._alias = undefined;
      this._config = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._firstBrokerLoginFlowAlias = undefined;
      this._internalId = undefined;
      this._linkOnly = undefined;
      this._postBrokerLoginFlowAlias = undefined;
      this._providerId = undefined;
      this._storeToken = undefined;
      this._trustEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addReadTokenRoleOnCreate = value.addReadTokenRoleOnCreate;
      this._alias = value.alias;
      this._config = value.config;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._firstBrokerLoginFlowAlias = value.firstBrokerLoginFlowAlias;
      this._internalId = value.internalId;
      this._linkOnly = value.linkOnly;
      this._postBrokerLoginFlowAlias = value.postBrokerLoginFlowAlias;
      this._providerId = value.providerId;
      this._storeToken = value.storeToken;
      this._trustEmail = value.trustEmail;
    }
  }

  // add_read_token_role_on_create - computed: false, optional: true, required: false
  private _addReadTokenRoleOnCreate?: boolean | cdktf.IResolvable; 
  public get addReadTokenRoleOnCreate() {
    return this.getBooleanAttribute('add_read_token_role_on_create');
  }
  public set addReadTokenRoleOnCreate(value: boolean | cdktf.IResolvable) {
    this._addReadTokenRoleOnCreate = value;
  }
  public resetAddReadTokenRoleOnCreate() {
    this._addReadTokenRoleOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addReadTokenRoleOnCreateInput() {
    return this._addReadTokenRoleOnCreate;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // first_broker_login_flow_alias - computed: false, optional: true, required: false
  private _firstBrokerLoginFlowAlias?: string; 
  public get firstBrokerLoginFlowAlias() {
    return this.getStringAttribute('first_broker_login_flow_alias');
  }
  public set firstBrokerLoginFlowAlias(value: string) {
    this._firstBrokerLoginFlowAlias = value;
  }
  public resetFirstBrokerLoginFlowAlias() {
    this._firstBrokerLoginFlowAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstBrokerLoginFlowAliasInput() {
    return this._firstBrokerLoginFlowAlias;
  }

  // internal_id - computed: false, optional: true, required: false
  private _internalId?: string; 
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }
  public set internalId(value: string) {
    this._internalId = value;
  }
  public resetInternalId() {
    this._internalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIdInput() {
    return this._internalId;
  }

  // link_only - computed: false, optional: true, required: false
  private _linkOnly?: boolean | cdktf.IResolvable; 
  public get linkOnly() {
    return this.getBooleanAttribute('link_only');
  }
  public set linkOnly(value: boolean | cdktf.IResolvable) {
    this._linkOnly = value;
  }
  public resetLinkOnly() {
    this._linkOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOnlyInput() {
    return this._linkOnly;
  }

  // post_broker_login_flow_alias - computed: false, optional: true, required: false
  private _postBrokerLoginFlowAlias?: string; 
  public get postBrokerLoginFlowAlias() {
    return this.getStringAttribute('post_broker_login_flow_alias');
  }
  public set postBrokerLoginFlowAlias(value: string) {
    this._postBrokerLoginFlowAlias = value;
  }
  public resetPostBrokerLoginFlowAlias() {
    this._postBrokerLoginFlowAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBrokerLoginFlowAliasInput() {
    return this._postBrokerLoginFlowAlias;
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

  // store_token - computed: false, optional: true, required: false
  private _storeToken?: boolean | cdktf.IResolvable; 
  public get storeToken() {
    return this.getBooleanAttribute('store_token');
  }
  public set storeToken(value: boolean | cdktf.IResolvable) {
    this._storeToken = value;
  }
  public resetStoreToken() {
    this._storeToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTokenInput() {
    return this._storeToken;
  }

  // trust_email - computed: false, optional: true, required: false
  private _trustEmail?: boolean | cdktf.IResolvable; 
  public get trustEmail() {
    return this.getBooleanAttribute('trust_email');
  }
  public set trustEmail(value: boolean | cdktf.IResolvable) {
    this._trustEmail = value;
  }
  public resetTrustEmail() {
    this._trustEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustEmailInput() {
    return this._trustEmail;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites {
  /**
  * Map client => []role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client}
  */
  readonly client?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Realm roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#realm}
  */
  readonly realm?: string[];
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmCompositesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.client),
    realm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realm),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmCompositesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.client),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    realm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.realm),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmCompositesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._realm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._realm = value.realm;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get client() {
    return this.interpolationForAttribute('client');
  }
  public set client(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string[]; 
  public get realm() {
    return this.getListAttribute('realm');
  }
  public set realm(value: string[]) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm {
  /**
  * Role Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Client Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_role DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_role}
  */
  readonly clientRole?: boolean | cdktf.IResolvable;
  /**
  * Composite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#composite DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#composite}
  */
  readonly composite?: boolean | cdktf.IResolvable;
  /**
  * Composites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#composites DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#composites}
  */
  readonly composites?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites;
  /**
  * Container Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#container_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.attributes),
    client_role: cdktf.booleanToTerraform(struct!.clientRole),
    composite: cdktf.booleanToTerraform(struct!.composite),
    composites: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmCompositesToTerraform(struct!.composites),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm | cdktf.IResolvable): any {
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
    client_role: {
      value: cdktf.booleanToHclTerraform(struct!.clientRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composite: {
      value: cdktf.booleanToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composites: {
      value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmCompositesToHclTerraform(struct!.composites),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._clientRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRole = this._clientRole;
    }
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
    }
    if (this._composites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composites = this._composites?.internalValue;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._clientRole = undefined;
      this._composite = undefined;
      this._composites.internalValue = undefined;
      this._containerId = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._clientRole = value.clientRole;
      this._composite = value.composite;
      this._composites.internalValue = value.composites;
      this._containerId = value.containerId;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
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

  // client_role - computed: false, optional: true, required: false
  private _clientRole?: boolean | cdktf.IResolvable; 
  public get clientRole() {
    return this.getBooleanAttribute('client_role');
  }
  public set clientRole(value: boolean | cdktf.IResolvable) {
    this._clientRole = value;
  }
  public resetClientRole() {
    this._clientRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRoleInput() {
    return this._clientRole;
  }

  // composite - computed: false, optional: true, required: false
  private _composite?: boolean | cdktf.IResolvable; 
  public get composite() {
    return this.getBooleanAttribute('composite');
  }
  public set composite(value: boolean | cdktf.IResolvable) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
  }

  // composites - computed: false, optional: true, required: false
  private _composites = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmCompositesOutputReference(this, "composites");
  public get composites() {
    return this._composites;
  }
  public putComposites(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmComposites) {
    this._composites.internalValue = value;
  }
  public resetComposites() {
    this._composites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositesInput() {
    return this._composites.internalValue;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles {
  /**
  * Client Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client}
  */
  readonly client?: { [key: string]: string };
  /**
  * Realm Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#realm}
  */
  readonly realm?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.client),
    realm: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmToTerraform, false)(struct!.realm),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.client),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    realm: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmToHclTerraform, false)(struct!.realm),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._realm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._realm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._realm.internalValue = value.realm;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: { [key: string]: string }; 
  public get client() {
    return this.getStringMapAttribute('client');
  }
  public set client(value: { [key: string]: string }) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // realm - computed: false, optional: true, required: false
  private _realm = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealmList(this, "realm", false);
  public get realm() {
    return this._realm;
  }
  public putRealm(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesRealm[] | cdktf.IResolvable) {
    this._realm.internalValue = value;
  }
  public resetRealm() {
    this._realm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings {
  /**
  * Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client}
  */
  readonly client?: string;
  /**
  * Client Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_scope DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_scope}
  */
  readonly clientScope?: string;
  /**
  * Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#roles DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Self
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#self DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#self}
  */
  readonly selfAttribute?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.stringToTerraform(struct!.client),
    client_scope: cdktf.stringToTerraform(struct!.clientScope),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    self: cdktf.stringToTerraform(struct!.selfAttribute),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_scope: {
      value: cdktf.stringToHclTerraform(struct!.clientScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    self: {
      value: cdktf.stringToHclTerraform(struct!.selfAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._clientScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientScope = this._clientScope;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._self !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._clientScope = undefined;
      this._roles = undefined;
      this._self = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._clientScope = value.clientScope;
      this._roles = value.roles;
      this._self = value.selfAttribute;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // client_scope - computed: false, optional: true, required: false
  private _clientScope?: string; 
  public get clientScope() {
    return this.getStringAttribute('client_scope');
  }
  public set clientScope(value: string) {
    this._clientScope = value;
  }
  public resetClientScope() {
    this._clientScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeInput() {
    return this._clientScope;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // self - computed: false, optional: true, required: false
  private _self?: string; 
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }
  public set selfAttribute(value: string) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers {
  /**
  * User federation mapper config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#federation_mapper_type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#federation_mapper_type}
  */
  readonly federationMapperType?: string;
  /**
  * The displayName for the user federation provider this mapper applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#federation_provider_display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#federation_provider_display_name}
  */
  readonly federationProviderDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    federation_mapper_type: cdktf.stringToTerraform(struct!.federationMapperType),
    federation_provider_display_name: cdktf.stringToTerraform(struct!.federationProviderDisplayName),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    federation_mapper_type: {
      value: cdktf.stringToHclTerraform(struct!.federationMapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    federation_provider_display_name: {
      value: cdktf.stringToHclTerraform(struct!.federationProviderDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._federationMapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.federationMapperType = this._federationMapperType;
    }
    if (this._federationProviderDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.federationProviderDisplayName = this._federationProviderDisplayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._federationMapperType = undefined;
      this._federationProviderDisplayName = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._federationMapperType = value.federationMapperType;
      this._federationProviderDisplayName = value.federationProviderDisplayName;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // federation_mapper_type - computed: false, optional: true, required: false
  private _federationMapperType?: string; 
  public get federationMapperType() {
    return this.getStringAttribute('federation_mapper_type');
  }
  public set federationMapperType(value: string) {
    this._federationMapperType = value;
  }
  public resetFederationMapperType() {
    this._federationMapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationMapperTypeInput() {
    return this._federationMapperType;
  }

  // federation_provider_display_name - computed: false, optional: true, required: false
  private _federationProviderDisplayName?: string; 
  public get federationProviderDisplayName() {
    return this.getStringAttribute('federation_provider_display_name');
  }
  public set federationProviderDisplayName(value: string) {
    this._federationProviderDisplayName = value;
  }
  public resetFederationProviderDisplayName() {
    this._federationProviderDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationProviderDisplayNameInput() {
    return this._federationProviderDisplayName;
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
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#changed_sync_period DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#changed_sync_period}
  */
  readonly changedSyncPeriod?: number;
  /**
  * User federation provider config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The display name of this provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#full_sync_period DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#full_sync_period}
  */
  readonly fullSyncPeriod?: number;
  /**
  * The ID of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The priority of this provider when looking up users or adding a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#priority DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * The name of the user provider, such as 'ldap', 'kerberos' or a custom SPI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#provider_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#provider_name}
  */
  readonly providerName?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    changed_sync_period: cdktf.numberToTerraform(struct!.changedSyncPeriod),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    full_sync_period: cdktf.numberToTerraform(struct!.fullSyncPeriod),
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    changed_sync_period: {
      value: cdktf.numberToHclTerraform(struct!.changedSyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_sync_period: {
      value: cdktf.numberToHclTerraform(struct!.fullSyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changedSyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.changedSyncPeriod = this._changedSyncPeriod;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fullSyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullSyncPeriod = this._fullSyncPeriod;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changedSyncPeriod = undefined;
      this._config = undefined;
      this._displayName = undefined;
      this._fullSyncPeriod = undefined;
      this._id = undefined;
      this._priority = undefined;
      this._providerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changedSyncPeriod = value.changedSyncPeriod;
      this._config = value.config;
      this._displayName = value.displayName;
      this._fullSyncPeriod = value.fullSyncPeriod;
      this._id = value.id;
      this._priority = value.priority;
      this._providerName = value.providerName;
    }
  }

  // changed_sync_period - computed: false, optional: true, required: false
  private _changedSyncPeriod?: number; 
  public get changedSyncPeriod() {
    return this.getNumberAttribute('changed_sync_period');
  }
  public set changedSyncPeriod(value: number) {
    this._changedSyncPeriod = value;
  }
  public resetChangedSyncPeriod() {
    this._changedSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changedSyncPeriodInput() {
    return this._changedSyncPeriod;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // full_sync_period - computed: false, optional: true, required: false
  private _fullSyncPeriod?: number; 
  public get fullSyncPeriod() {
    return this.getNumberAttribute('full_sync_period');
  }
  public set fullSyncPeriod(value: number) {
    this._fullSyncPeriod = value;
  }
  public resetFullSyncPeriod() {
    this._fullSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSyncPeriodInput() {
    return this._fullSyncPeriod;
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

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials {
  /**
  * True if this credential object is temporary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#temporary DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#temporary}
  */
  readonly temporary?: boolean | cdktf.IResolvable;
  /**
  * Credential Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Credential Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#value DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities {
  /**
  * Federated Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#identity_provider DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * Federated Identity User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#user_id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#user_id}
  */
  readonly userId?: string;
  /**
  * Federated Identity User Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#user_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#user_name}
  */
  readonly userName?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers {
  /**
  * A set of Attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A set of Client Roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_roles DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_roles}
  */
  readonly clientRoles?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A set of Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#credentials DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials[] | cdktf.IResolvable;
  /**
  * Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#email DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#email}
  */
  readonly email?: string;
  /**
  * True if email has already been verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#email_verified DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#email_verified}
  */
  readonly emailVerified?: boolean | cdktf.IResolvable;
  /**
  * User enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A set of Federated Identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#federated_identities DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#federated_identities}
  */
  readonly federatedIdentities?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities[] | cdktf.IResolvable;
  /**
  * First Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#first_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#first_name}
  */
  readonly firstName?: string;
  /**
  * A set of Groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#groups DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Last Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#last_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#last_name}
  */
  readonly lastName?: string;
  /**
  * A set of Realm Roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#realm_roles DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#realm_roles}
  */
  readonly realmRoles?: string[];
  /**
  * A set of Required Actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#required_actions DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#required_actions}
  */
  readonly requiredActions?: string[];
  /**
  * User Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#username DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.attributes),
    client_roles: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.clientRoles),
    credentials: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsToTerraform, false)(struct!.credentials),
    email: cdktf.stringToTerraform(struct!.email),
    email_verified: cdktf.booleanToTerraform(struct!.emailVerified),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    federated_identities: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesToTerraform, false)(struct!.federatedIdentities),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    id: cdktf.stringToTerraform(struct!.id),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    realm_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realmRoles),
    required_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredActions),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsToHclTerraform, false)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsList",
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
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesToHclTerraform, false)(struct!.federatedIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesList",
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers | cdktf.IResolvable | undefined) {
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
  private _credentials = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersCredentials[] | cdktf.IResolvable) {
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
  private _federatedIdentities = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentitiesList(this, "federated_identities", false);
  public get federatedIdentities() {
    return this._federatedIdentities;
  }
  public putFederatedIdentities(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersFederatedIdentities[] | cdktf.IResolvable) {
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

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm {
  /**
  * Access Token Lifespan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#access_token_lifespan DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#access_token_lifespan}
  */
  readonly accessTokenLifespan?: number;
  /**
  * Access Token Lifespan For Implicit Flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#access_token_lifespan_for_implicit_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#access_token_lifespan_for_implicit_flow}
  */
  readonly accessTokenLifespanForImplicitFlow?: number;
  /**
  * Account Theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#account_theme DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#account_theme}
  */
  readonly accountTheme?: string;
  /**
  * Enable admin events details TODO: change to values and use kubebuilder default annotation once supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#admin_events_details_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#admin_events_details_enabled}
  */
  readonly adminEventsDetailsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable events recording TODO: change to values and use kubebuilder default annotation once supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#admin_events_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#admin_events_enabled}
  */
  readonly adminEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Admin Console Theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#admin_theme DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#admin_theme}
  */
  readonly adminTheme?: string;
  /**
  * Authentication flows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authentication_flows DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authentication_flows}
  */
  readonly authenticationFlows?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows[] | cdktf.IResolvable;
  /**
  * Authenticator config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#authenticator_config DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#authenticator_config}
  */
  readonly authenticatorConfig?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig[] | cdktf.IResolvable;
  /**
  * Browser authentication flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#browser_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#browser_flow}
  */
  readonly browserFlow?: string;
  /**
  * Brute Force Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#brute_force_protected DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#brute_force_protected}
  */
  readonly bruteForceProtected?: boolean | cdktf.IResolvable;
  /**
  * Client authentication flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_authentication_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_authentication_flow}
  */
  readonly clientAuthenticationFlow?: string;
  /**
  * Client Scope Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_scope_mappings DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_scope_mappings}
  */
  readonly clientScopeMappings?: { [key: string]: string };
  /**
  * Client scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#client_scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#client_scopes}
  */
  readonly clientScopes?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes[] | cdktf.IResolvable;
  /**
  * A set of Keycloak Clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#clients DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#clients}
  */
  readonly clients?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients[] | cdktf.IResolvable;
  /**
  * Default client scopes to add to all new clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#default_default_client_scopes DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#default_default_client_scopes}
  */
  readonly defaultDefaultClientScopes?: string[];
  /**
  * Default Locale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#default_locale DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#default_locale}
  */
  readonly defaultLocale?: string;
  /**
  * Default role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#default_role DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#default_role}
  */
  readonly defaultRole?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole;
  /**
  * Direct Grant authentication flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#direct_grant_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#direct_grant_flow}
  */
  readonly directGrantFlow?: string;
  /**
  * Realm display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Realm HTML display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#display_name_html DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#display_name_html}
  */
  readonly displayNameHtml?: string;
  /**
  * Docker Authentication flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#docker_authentication_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#docker_authentication_flow}
  */
  readonly dockerAuthenticationFlow?: string;
  /**
  * Duplicate emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#duplicate_emails_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#duplicate_emails_allowed}
  */
  readonly duplicateEmailsAllowed?: boolean | cdktf.IResolvable;
  /**
  * Edit username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#edit_username_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#edit_username_allowed}
  */
  readonly editUsernameAllowed?: boolean | cdktf.IResolvable;
  /**
  * Email Theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#email_theme DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#email_theme}
  */
  readonly emailTheme?: string;
  /**
  * Realm enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enabled event types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#enabled_event_types DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#enabled_event_types}
  */
  readonly enabledEventTypes?: string[];
  /**
  * Enable events recording TODO: change to values and use kubebuilder default annotation once supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#events_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#events_enabled}
  */
  readonly eventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * A set of Event Listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#events_listeners DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#events_listeners}
  */
  readonly eventsListeners?: string[];
  /**
  * Max Login Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#failure_factor DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#failure_factor}
  */
  readonly failureFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of Identity Provider Mappers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#identity_provider_mappers DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#identity_provider_mappers}
  */
  readonly identityProviderMappers?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers[] | cdktf.IResolvable;
  /**
  * A set of Identity Providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#identity_providers DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#identity_providers}
  */
  readonly identityProviders?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders[] | cdktf.IResolvable;
  /**
  * Internationalization Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#internationalization_enabled DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#internationalization_enabled}
  */
  readonly internationalizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Login Theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#login_theme DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#login_theme}
  */
  readonly loginTheme?: string;
  /**
  * Login with email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#login_with_email_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#login_with_email_allowed}
  */
  readonly loginWithEmailAllowed?: boolean | cdktf.IResolvable;
  /**
  * Failure Reset Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#max_delta_time_seconds DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#max_delta_time_seconds}
  */
  readonly maxDeltaTimeSeconds?: number;
  /**
  * Max Wait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#max_failure_wait_seconds DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#max_failure_wait_seconds}
  */
  readonly maxFailureWaitSeconds?: number;
  /**
  * Minimum Quick Login Wait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#minimum_quick_login_wait_seconds DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#minimum_quick_login_wait_seconds}
  */
  readonly minimumQuickLoginWaitSeconds?: number;
  /**
  * OTP Policy Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#otp_policy_algorithm DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#otp_policy_algorithm}
  */
  readonly otpPolicyAlgorithm?: string;
  /**
  * OTP Policy Digits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#otp_policy_digits DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#otp_policy_digits}
  */
  readonly otpPolicyDigits?: number;
  /**
  * OTP Policy Initial Counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#otp_policy_initial_counter DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#otp_policy_initial_counter}
  */
  readonly otpPolicyInitialCounter?: number;
  /**
  * OTP Policy Look Ahead Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#otp_policy_look_ahead_window DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#otp_policy_look_ahead_window}
  */
  readonly otpPolicyLookAheadWindow?: number;
  /**
  * OTP Policy Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#otp_policy_period DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#otp_policy_period}
  */
  readonly otpPolicyPeriod?: number;
  /**
  * OTP Policy Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#otp_policy_type DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#otp_policy_type}
  */
  readonly otpPolicyType?: string;
  /**
  * OTP Supported Applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#otp_supported_applications DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#otp_supported_applications}
  */
  readonly otpSupportedApplications?: string[];
  /**
  * Realm Password Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#password_policy DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * Permanent Lockout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#permanent_lockout DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#permanent_lockout}
  */
  readonly permanentLockout?: boolean | cdktf.IResolvable;
  /**
  * Quick Login Check Milli Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#quick_login_check_milli_seconds DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#quick_login_check_milli_seconds}
  */
  readonly quickLoginCheckMilliSeconds?: number;
  /**
  * Realm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#realm}
  */
  readonly realm: string;
  /**
  * User registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#registration_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#registration_allowed}
  */
  readonly registrationAllowed?: boolean | cdktf.IResolvable;
  /**
  * Email as username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#registration_email_as_username DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#registration_email_as_username}
  */
  readonly registrationEmailAsUsername?: boolean | cdktf.IResolvable;
  /**
  * Registration flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#registration_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#registration_flow}
  */
  readonly registrationFlow?: string;
  /**
  * Remember me
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#remember_me DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#remember_me}
  */
  readonly rememberMe?: boolean | cdktf.IResolvable;
  /**
  * Reset Credentials authentication flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#reset_credentials_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#reset_credentials_flow}
  */
  readonly resetCredentialsFlow?: string;
  /**
  * Forgot password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#reset_password_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#reset_password_allowed}
  */
  readonly resetPasswordAllowed?: boolean | cdktf.IResolvable;
  /**
  * Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#roles DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#roles}
  */
  readonly roles?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles;
  /**
  * Scope Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#scope_mappings DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#scope_mappings}
  */
  readonly scopeMappings?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings[] | cdktf.IResolvable;
  /**
  * Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#smtp_server DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#smtp_server}
  */
  readonly smtpServer?: { [key: string]: string };
  /**
  * Require SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#ssl_required DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#ssl_required}
  */
  readonly sslRequired?: string;
  /**
  * Supported Locales
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#supported_locales DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#supported_locales}
  */
  readonly supportedLocales?: string[];
  /**
  * User federation mappers are extension points triggered by the user federation at various points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#user_federation_mappers DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#user_federation_mappers}
  */
  readonly userFederationMappers?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers[] | cdktf.IResolvable;
  /**
  * Point keycloak to an external user provider to validate credentials or pull in identity information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#user_federation_providers DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#user_federation_providers}
  */
  readonly userFederationProviders?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders[] | cdktf.IResolvable;
  /**
  * User Managed Access Allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#user_managed_access_allowed DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#user_managed_access_allowed}
  */
  readonly userManagedAccessAllowed?: boolean | cdktf.IResolvable;
  /**
  * A set of Keycloak Users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#users DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#users}
  */
  readonly users?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers[] | cdktf.IResolvable;
  /**
  * Verify email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#verify_email DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#verify_email}
  */
  readonly verifyEmail?: boolean | cdktf.IResolvable;
  /**
  * Wait Increment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#wait_increment_seconds DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#wait_increment_seconds}
  */
  readonly waitIncrementSeconds?: number;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_lifespan: cdktf.numberToTerraform(struct!.accessTokenLifespan),
    access_token_lifespan_for_implicit_flow: cdktf.numberToTerraform(struct!.accessTokenLifespanForImplicitFlow),
    account_theme: cdktf.stringToTerraform(struct!.accountTheme),
    admin_events_details_enabled: cdktf.booleanToTerraform(struct!.adminEventsDetailsEnabled),
    admin_events_enabled: cdktf.booleanToTerraform(struct!.adminEventsEnabled),
    admin_theme: cdktf.stringToTerraform(struct!.adminTheme),
    authentication_flows: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsToTerraform, false)(struct!.authenticationFlows),
    authenticator_config: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigToTerraform, false)(struct!.authenticatorConfig),
    browser_flow: cdktf.stringToTerraform(struct!.browserFlow),
    brute_force_protected: cdktf.booleanToTerraform(struct!.bruteForceProtected),
    client_authentication_flow: cdktf.stringToTerraform(struct!.clientAuthenticationFlow),
    client_scope_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clientScopeMappings),
    client_scopes: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesToTerraform, false)(struct!.clientScopes),
    clients: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsToTerraform, false)(struct!.clients),
    default_default_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultDefaultClientScopes),
    default_locale: cdktf.stringToTerraform(struct!.defaultLocale),
    default_role: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleToTerraform(struct!.defaultRole),
    direct_grant_flow: cdktf.stringToTerraform(struct!.directGrantFlow),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    display_name_html: cdktf.stringToTerraform(struct!.displayNameHtml),
    docker_authentication_flow: cdktf.stringToTerraform(struct!.dockerAuthenticationFlow),
    duplicate_emails_allowed: cdktf.booleanToTerraform(struct!.duplicateEmailsAllowed),
    edit_username_allowed: cdktf.booleanToTerraform(struct!.editUsernameAllowed),
    email_theme: cdktf.stringToTerraform(struct!.emailTheme),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enabled_event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEventTypes),
    events_enabled: cdktf.booleanToTerraform(struct!.eventsEnabled),
    events_listeners: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventsListeners),
    failure_factor: cdktf.numberToTerraform(struct!.failureFactor),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_mappers: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersToTerraform, false)(struct!.identityProviderMappers),
    identity_providers: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersToTerraform, false)(struct!.identityProviders),
    internationalization_enabled: cdktf.booleanToTerraform(struct!.internationalizationEnabled),
    login_theme: cdktf.stringToTerraform(struct!.loginTheme),
    login_with_email_allowed: cdktf.booleanToTerraform(struct!.loginWithEmailAllowed),
    max_delta_time_seconds: cdktf.numberToTerraform(struct!.maxDeltaTimeSeconds),
    max_failure_wait_seconds: cdktf.numberToTerraform(struct!.maxFailureWaitSeconds),
    minimum_quick_login_wait_seconds: cdktf.numberToTerraform(struct!.minimumQuickLoginWaitSeconds),
    otp_policy_algorithm: cdktf.stringToTerraform(struct!.otpPolicyAlgorithm),
    otp_policy_digits: cdktf.numberToTerraform(struct!.otpPolicyDigits),
    otp_policy_initial_counter: cdktf.numberToTerraform(struct!.otpPolicyInitialCounter),
    otp_policy_look_ahead_window: cdktf.numberToTerraform(struct!.otpPolicyLookAheadWindow),
    otp_policy_period: cdktf.numberToTerraform(struct!.otpPolicyPeriod),
    otp_policy_type: cdktf.stringToTerraform(struct!.otpPolicyType),
    otp_supported_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.otpSupportedApplications),
    password_policy: cdktf.stringToTerraform(struct!.passwordPolicy),
    permanent_lockout: cdktf.booleanToTerraform(struct!.permanentLockout),
    quick_login_check_milli_seconds: cdktf.numberToTerraform(struct!.quickLoginCheckMilliSeconds),
    realm: cdktf.stringToTerraform(struct!.realm),
    registration_allowed: cdktf.booleanToTerraform(struct!.registrationAllowed),
    registration_email_as_username: cdktf.booleanToTerraform(struct!.registrationEmailAsUsername),
    registration_flow: cdktf.stringToTerraform(struct!.registrationFlow),
    remember_me: cdktf.booleanToTerraform(struct!.rememberMe),
    reset_credentials_flow: cdktf.stringToTerraform(struct!.resetCredentialsFlow),
    reset_password_allowed: cdktf.booleanToTerraform(struct!.resetPasswordAllowed),
    roles: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesToTerraform(struct!.roles),
    scope_mappings: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsToTerraform, false)(struct!.scopeMappings),
    smtp_server: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.smtpServer),
    ssl_required: cdktf.stringToTerraform(struct!.sslRequired),
    supported_locales: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedLocales),
    user_federation_mappers: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersToTerraform, false)(struct!.userFederationMappers),
    user_federation_providers: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersToTerraform, false)(struct!.userFederationProviders),
    user_managed_access_allowed: cdktf.booleanToTerraform(struct!.userManagedAccessAllowed),
    users: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersToTerraform, false)(struct!.users),
    verify_email: cdktf.booleanToTerraform(struct!.verifyEmail),
    wait_increment_seconds: cdktf.numberToTerraform(struct!.waitIncrementSeconds),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_lifespan: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenLifespan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_token_lifespan_for_implicit_flow: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenLifespanForImplicitFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    account_theme: {
      value: cdktf.stringToHclTerraform(struct!.accountTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_events_details_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.adminEventsDetailsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.adminEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_theme: {
      value: cdktf.stringToHclTerraform(struct!.adminTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_flows: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsToHclTerraform, false)(struct!.authenticationFlows),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsList",
    },
    authenticator_config: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigToHclTerraform, false)(struct!.authenticatorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigList",
    },
    browser_flow: {
      value: cdktf.stringToHclTerraform(struct!.browserFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    brute_force_protected: {
      value: cdktf.booleanToHclTerraform(struct!.bruteForceProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_authentication_flow: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthenticationFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_scope_mappings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clientScopeMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    client_scopes: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesToHclTerraform, false)(struct!.clientScopes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesList",
    },
    clients: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsToHclTerraform, false)(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsList",
    },
    default_default_client_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultDefaultClientScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_locale: {
      value: cdktf.stringToHclTerraform(struct!.defaultLocale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_role: {
      value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleToHclTerraform(struct!.defaultRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole",
    },
    direct_grant_flow: {
      value: cdktf.stringToHclTerraform(struct!.directGrantFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name_html: {
      value: cdktf.stringToHclTerraform(struct!.displayNameHtml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_authentication_flow: {
      value: cdktf.stringToHclTerraform(struct!.dockerAuthenticationFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duplicate_emails_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.duplicateEmailsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edit_username_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.editUsernameAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_theme: {
      value: cdktf.stringToHclTerraform(struct!.emailTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_event_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEventTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.eventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    events_listeners: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventsListeners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_factor: {
      value: cdktf.numberToHclTerraform(struct!.failureFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_mappers: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersToHclTerraform, false)(struct!.identityProviderMappers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersList",
    },
    identity_providers: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersToHclTerraform, false)(struct!.identityProviders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersList",
    },
    internationalization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.internationalizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_theme: {
      value: cdktf.stringToHclTerraform(struct!.loginTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_with_email_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.loginWithEmailAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_delta_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxDeltaTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_failure_wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxFailureWaitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_quick_login_wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minimumQuickLoginWaitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_policy_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.otpPolicyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_policy_digits: {
      value: cdktf.numberToHclTerraform(struct!.otpPolicyDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_policy_initial_counter: {
      value: cdktf.numberToHclTerraform(struct!.otpPolicyInitialCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_policy_look_ahead_window: {
      value: cdktf.numberToHclTerraform(struct!.otpPolicyLookAheadWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_policy_period: {
      value: cdktf.numberToHclTerraform(struct!.otpPolicyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.otpPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_supported_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.otpSupportedApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password_policy: {
      value: cdktf.stringToHclTerraform(struct!.passwordPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permanent_lockout: {
      value: cdktf.booleanToHclTerraform(struct!.permanentLockout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quick_login_check_milli_seconds: {
      value: cdktf.numberToHclTerraform(struct!.quickLoginCheckMilliSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.registrationAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registration_email_as_username: {
      value: cdktf.booleanToHclTerraform(struct!.registrationEmailAsUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registration_flow: {
      value: cdktf.stringToHclTerraform(struct!.registrationFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remember_me: {
      value: cdktf.booleanToHclTerraform(struct!.rememberMe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset_credentials_flow: {
      value: cdktf.stringToHclTerraform(struct!.resetCredentialsFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_password_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.resetPasswordAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roles: {
      value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesToHclTerraform(struct!.roles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles",
    },
    scope_mappings: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsToHclTerraform, false)(struct!.scopeMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsList",
    },
    smtp_server: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.smtpServer),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ssl_required: {
      value: cdktf.stringToHclTerraform(struct!.sslRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_locales: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedLocales),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_federation_mappers: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersToHclTerraform, false)(struct!.userFederationMappers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersList",
    },
    user_federation_providers: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersToHclTerraform, false)(struct!.userFederationProviders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersList",
    },
    user_managed_access_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.userManagedAccessAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersList",
    },
    verify_email: {
      value: cdktf.booleanToHclTerraform(struct!.verifyEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_increment_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitIncrementSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenLifespan !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenLifespan = this._accessTokenLifespan;
    }
    if (this._accessTokenLifespanForImplicitFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenLifespanForImplicitFlow = this._accessTokenLifespanForImplicitFlow;
    }
    if (this._accountTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountTheme = this._accountTheme;
    }
    if (this._adminEventsDetailsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEventsDetailsEnabled = this._adminEventsDetailsEnabled;
    }
    if (this._adminEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEventsEnabled = this._adminEventsEnabled;
    }
    if (this._adminTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminTheme = this._adminTheme;
    }
    if (this._authenticationFlows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationFlows = this._authenticationFlows?.internalValue;
    }
    if (this._authenticatorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorConfig = this._authenticatorConfig?.internalValue;
    }
    if (this._browserFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserFlow = this._browserFlow;
    }
    if (this._bruteForceProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.bruteForceProtected = this._bruteForceProtected;
    }
    if (this._clientAuthenticationFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthenticationFlow = this._clientAuthenticationFlow;
    }
    if (this._clientScopeMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientScopeMappings = this._clientScopeMappings;
    }
    if (this._clientScopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientScopes = this._clientScopes?.internalValue;
    }
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    if (this._defaultDefaultClientScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDefaultClientScopes = this._defaultDefaultClientScopes;
    }
    if (this._defaultLocale !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLocale = this._defaultLocale;
    }
    if (this._defaultRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRole = this._defaultRole?.internalValue;
    }
    if (this._directGrantFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.directGrantFlow = this._directGrantFlow;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._displayNameHtml !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayNameHtml = this._displayNameHtml;
    }
    if (this._dockerAuthenticationFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerAuthenticationFlow = this._dockerAuthenticationFlow;
    }
    if (this._duplicateEmailsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicateEmailsAllowed = this._duplicateEmailsAllowed;
    }
    if (this._editUsernameAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.editUsernameAllowed = this._editUsernameAllowed;
    }
    if (this._emailTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTheme = this._emailTheme;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enabledEventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEventTypes = this._enabledEventTypes;
    }
    if (this._eventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventsEnabled = this._eventsEnabled;
    }
    if (this._eventsListeners !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventsListeners = this._eventsListeners;
    }
    if (this._failureFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureFactor = this._failureFactor;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderMappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderMappers = this._identityProviderMappers?.internalValue;
    }
    if (this._identityProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviders = this._identityProviders?.internalValue;
    }
    if (this._internationalizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internationalizationEnabled = this._internationalizationEnabled;
    }
    if (this._loginTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginTheme = this._loginTheme;
    }
    if (this._loginWithEmailAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginWithEmailAllowed = this._loginWithEmailAllowed;
    }
    if (this._maxDeltaTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeltaTimeSeconds = this._maxDeltaTimeSeconds;
    }
    if (this._maxFailureWaitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailureWaitSeconds = this._maxFailureWaitSeconds;
    }
    if (this._minimumQuickLoginWaitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumQuickLoginWaitSeconds = this._minimumQuickLoginWaitSeconds;
    }
    if (this._otpPolicyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpPolicyAlgorithm = this._otpPolicyAlgorithm;
    }
    if (this._otpPolicyDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpPolicyDigits = this._otpPolicyDigits;
    }
    if (this._otpPolicyInitialCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpPolicyInitialCounter = this._otpPolicyInitialCounter;
    }
    if (this._otpPolicyLookAheadWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpPolicyLookAheadWindow = this._otpPolicyLookAheadWindow;
    }
    if (this._otpPolicyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpPolicyPeriod = this._otpPolicyPeriod;
    }
    if (this._otpPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpPolicyType = this._otpPolicyType;
    }
    if (this._otpSupportedApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpSupportedApplications = this._otpSupportedApplications;
    }
    if (this._passwordPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordPolicy = this._passwordPolicy;
    }
    if (this._permanentLockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanentLockout = this._permanentLockout;
    }
    if (this._quickLoginCheckMilliSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickLoginCheckMilliSeconds = this._quickLoginCheckMilliSeconds;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._registrationAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationAllowed = this._registrationAllowed;
    }
    if (this._registrationEmailAsUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationEmailAsUsername = this._registrationEmailAsUsername;
    }
    if (this._registrationFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationFlow = this._registrationFlow;
    }
    if (this._rememberMe !== undefined) {
      hasAnyValues = true;
      internalValueResult.rememberMe = this._rememberMe;
    }
    if (this._resetCredentialsFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetCredentialsFlow = this._resetCredentialsFlow;
    }
    if (this._resetPasswordAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetPasswordAllowed = this._resetPasswordAllowed;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    if (this._scopeMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeMappings = this._scopeMappings?.internalValue;
    }
    if (this._smtpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpServer = this._smtpServer;
    }
    if (this._sslRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRequired = this._sslRequired;
    }
    if (this._supportedLocales !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedLocales = this._supportedLocales;
    }
    if (this._userFederationMappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFederationMappers = this._userFederationMappers?.internalValue;
    }
    if (this._userFederationProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFederationProviders = this._userFederationProviders?.internalValue;
    }
    if (this._userManagedAccessAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.userManagedAccessAllowed = this._userManagedAccessAllowed;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    if (this._verifyEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyEmail = this._verifyEmail;
    }
    if (this._waitIncrementSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIncrementSeconds = this._waitIncrementSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenLifespan = undefined;
      this._accessTokenLifespanForImplicitFlow = undefined;
      this._accountTheme = undefined;
      this._adminEventsDetailsEnabled = undefined;
      this._adminEventsEnabled = undefined;
      this._adminTheme = undefined;
      this._authenticationFlows.internalValue = undefined;
      this._authenticatorConfig.internalValue = undefined;
      this._browserFlow = undefined;
      this._bruteForceProtected = undefined;
      this._clientAuthenticationFlow = undefined;
      this._clientScopeMappings = undefined;
      this._clientScopes.internalValue = undefined;
      this._clients.internalValue = undefined;
      this._defaultDefaultClientScopes = undefined;
      this._defaultLocale = undefined;
      this._defaultRole.internalValue = undefined;
      this._directGrantFlow = undefined;
      this._displayName = undefined;
      this._displayNameHtml = undefined;
      this._dockerAuthenticationFlow = undefined;
      this._duplicateEmailsAllowed = undefined;
      this._editUsernameAllowed = undefined;
      this._emailTheme = undefined;
      this._enabled = undefined;
      this._enabledEventTypes = undefined;
      this._eventsEnabled = undefined;
      this._eventsListeners = undefined;
      this._failureFactor = undefined;
      this._id = undefined;
      this._identityProviderMappers.internalValue = undefined;
      this._identityProviders.internalValue = undefined;
      this._internationalizationEnabled = undefined;
      this._loginTheme = undefined;
      this._loginWithEmailAllowed = undefined;
      this._maxDeltaTimeSeconds = undefined;
      this._maxFailureWaitSeconds = undefined;
      this._minimumQuickLoginWaitSeconds = undefined;
      this._otpPolicyAlgorithm = undefined;
      this._otpPolicyDigits = undefined;
      this._otpPolicyInitialCounter = undefined;
      this._otpPolicyLookAheadWindow = undefined;
      this._otpPolicyPeriod = undefined;
      this._otpPolicyType = undefined;
      this._otpSupportedApplications = undefined;
      this._passwordPolicy = undefined;
      this._permanentLockout = undefined;
      this._quickLoginCheckMilliSeconds = undefined;
      this._realm = undefined;
      this._registrationAllowed = undefined;
      this._registrationEmailAsUsername = undefined;
      this._registrationFlow = undefined;
      this._rememberMe = undefined;
      this._resetCredentialsFlow = undefined;
      this._resetPasswordAllowed = undefined;
      this._roles.internalValue = undefined;
      this._scopeMappings.internalValue = undefined;
      this._smtpServer = undefined;
      this._sslRequired = undefined;
      this._supportedLocales = undefined;
      this._userFederationMappers.internalValue = undefined;
      this._userFederationProviders.internalValue = undefined;
      this._userManagedAccessAllowed = undefined;
      this._users.internalValue = undefined;
      this._verifyEmail = undefined;
      this._waitIncrementSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenLifespan = value.accessTokenLifespan;
      this._accessTokenLifespanForImplicitFlow = value.accessTokenLifespanForImplicitFlow;
      this._accountTheme = value.accountTheme;
      this._adminEventsDetailsEnabled = value.adminEventsDetailsEnabled;
      this._adminEventsEnabled = value.adminEventsEnabled;
      this._adminTheme = value.adminTheme;
      this._authenticationFlows.internalValue = value.authenticationFlows;
      this._authenticatorConfig.internalValue = value.authenticatorConfig;
      this._browserFlow = value.browserFlow;
      this._bruteForceProtected = value.bruteForceProtected;
      this._clientAuthenticationFlow = value.clientAuthenticationFlow;
      this._clientScopeMappings = value.clientScopeMappings;
      this._clientScopes.internalValue = value.clientScopes;
      this._clients.internalValue = value.clients;
      this._defaultDefaultClientScopes = value.defaultDefaultClientScopes;
      this._defaultLocale = value.defaultLocale;
      this._defaultRole.internalValue = value.defaultRole;
      this._directGrantFlow = value.directGrantFlow;
      this._displayName = value.displayName;
      this._displayNameHtml = value.displayNameHtml;
      this._dockerAuthenticationFlow = value.dockerAuthenticationFlow;
      this._duplicateEmailsAllowed = value.duplicateEmailsAllowed;
      this._editUsernameAllowed = value.editUsernameAllowed;
      this._emailTheme = value.emailTheme;
      this._enabled = value.enabled;
      this._enabledEventTypes = value.enabledEventTypes;
      this._eventsEnabled = value.eventsEnabled;
      this._eventsListeners = value.eventsListeners;
      this._failureFactor = value.failureFactor;
      this._id = value.id;
      this._identityProviderMappers.internalValue = value.identityProviderMappers;
      this._identityProviders.internalValue = value.identityProviders;
      this._internationalizationEnabled = value.internationalizationEnabled;
      this._loginTheme = value.loginTheme;
      this._loginWithEmailAllowed = value.loginWithEmailAllowed;
      this._maxDeltaTimeSeconds = value.maxDeltaTimeSeconds;
      this._maxFailureWaitSeconds = value.maxFailureWaitSeconds;
      this._minimumQuickLoginWaitSeconds = value.minimumQuickLoginWaitSeconds;
      this._otpPolicyAlgorithm = value.otpPolicyAlgorithm;
      this._otpPolicyDigits = value.otpPolicyDigits;
      this._otpPolicyInitialCounter = value.otpPolicyInitialCounter;
      this._otpPolicyLookAheadWindow = value.otpPolicyLookAheadWindow;
      this._otpPolicyPeriod = value.otpPolicyPeriod;
      this._otpPolicyType = value.otpPolicyType;
      this._otpSupportedApplications = value.otpSupportedApplications;
      this._passwordPolicy = value.passwordPolicy;
      this._permanentLockout = value.permanentLockout;
      this._quickLoginCheckMilliSeconds = value.quickLoginCheckMilliSeconds;
      this._realm = value.realm;
      this._registrationAllowed = value.registrationAllowed;
      this._registrationEmailAsUsername = value.registrationEmailAsUsername;
      this._registrationFlow = value.registrationFlow;
      this._rememberMe = value.rememberMe;
      this._resetCredentialsFlow = value.resetCredentialsFlow;
      this._resetPasswordAllowed = value.resetPasswordAllowed;
      this._roles.internalValue = value.roles;
      this._scopeMappings.internalValue = value.scopeMappings;
      this._smtpServer = value.smtpServer;
      this._sslRequired = value.sslRequired;
      this._supportedLocales = value.supportedLocales;
      this._userFederationMappers.internalValue = value.userFederationMappers;
      this._userFederationProviders.internalValue = value.userFederationProviders;
      this._userManagedAccessAllowed = value.userManagedAccessAllowed;
      this._users.internalValue = value.users;
      this._verifyEmail = value.verifyEmail;
      this._waitIncrementSeconds = value.waitIncrementSeconds;
    }
  }

  // access_token_lifespan - computed: false, optional: true, required: false
  private _accessTokenLifespan?: number; 
  public get accessTokenLifespan() {
    return this.getNumberAttribute('access_token_lifespan');
  }
  public set accessTokenLifespan(value: number) {
    this._accessTokenLifespan = value;
  }
  public resetAccessTokenLifespan() {
    this._accessTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifespanInput() {
    return this._accessTokenLifespan;
  }

  // access_token_lifespan_for_implicit_flow - computed: false, optional: true, required: false
  private _accessTokenLifespanForImplicitFlow?: number; 
  public get accessTokenLifespanForImplicitFlow() {
    return this.getNumberAttribute('access_token_lifespan_for_implicit_flow');
  }
  public set accessTokenLifespanForImplicitFlow(value: number) {
    this._accessTokenLifespanForImplicitFlow = value;
  }
  public resetAccessTokenLifespanForImplicitFlow() {
    this._accessTokenLifespanForImplicitFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifespanForImplicitFlowInput() {
    return this._accessTokenLifespanForImplicitFlow;
  }

  // account_theme - computed: false, optional: true, required: false
  private _accountTheme?: string; 
  public get accountTheme() {
    return this.getStringAttribute('account_theme');
  }
  public set accountTheme(value: string) {
    this._accountTheme = value;
  }
  public resetAccountTheme() {
    this._accountTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountThemeInput() {
    return this._accountTheme;
  }

  // admin_events_details_enabled - computed: false, optional: true, required: false
  private _adminEventsDetailsEnabled?: boolean | cdktf.IResolvable; 
  public get adminEventsDetailsEnabled() {
    return this.getBooleanAttribute('admin_events_details_enabled');
  }
  public set adminEventsDetailsEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEventsDetailsEnabled = value;
  }
  public resetAdminEventsDetailsEnabled() {
    this._adminEventsDetailsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEventsDetailsEnabledInput() {
    return this._adminEventsDetailsEnabled;
  }

  // admin_events_enabled - computed: false, optional: true, required: false
  private _adminEventsEnabled?: boolean | cdktf.IResolvable; 
  public get adminEventsEnabled() {
    return this.getBooleanAttribute('admin_events_enabled');
  }
  public set adminEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEventsEnabled = value;
  }
  public resetAdminEventsEnabled() {
    this._adminEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEventsEnabledInput() {
    return this._adminEventsEnabled;
  }

  // admin_theme - computed: false, optional: true, required: false
  private _adminTheme?: string; 
  public get adminTheme() {
    return this.getStringAttribute('admin_theme');
  }
  public set adminTheme(value: string) {
    this._adminTheme = value;
  }
  public resetAdminTheme() {
    this._adminTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminThemeInput() {
    return this._adminTheme;
  }

  // authentication_flows - computed: false, optional: true, required: false
  private _authenticationFlows = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlowsList(this, "authentication_flows", false);
  public get authenticationFlows() {
    return this._authenticationFlows;
  }
  public putAuthenticationFlows(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticationFlows[] | cdktf.IResolvable) {
    this._authenticationFlows.internalValue = value;
  }
  public resetAuthenticationFlows() {
    this._authenticationFlows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowsInput() {
    return this._authenticationFlows.internalValue;
  }

  // authenticator_config - computed: false, optional: true, required: false
  private _authenticatorConfig = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfigList(this, "authenticator_config", false);
  public get authenticatorConfig() {
    return this._authenticatorConfig;
  }
  public putAuthenticatorConfig(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmAuthenticatorConfig[] | cdktf.IResolvable) {
    this._authenticatorConfig.internalValue = value;
  }
  public resetAuthenticatorConfig() {
    this._authenticatorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorConfigInput() {
    return this._authenticatorConfig.internalValue;
  }

  // browser_flow - computed: false, optional: true, required: false
  private _browserFlow?: string; 
  public get browserFlow() {
    return this.getStringAttribute('browser_flow');
  }
  public set browserFlow(value: string) {
    this._browserFlow = value;
  }
  public resetBrowserFlow() {
    this._browserFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserFlowInput() {
    return this._browserFlow;
  }

  // brute_force_protected - computed: false, optional: true, required: false
  private _bruteForceProtected?: boolean | cdktf.IResolvable; 
  public get bruteForceProtected() {
    return this.getBooleanAttribute('brute_force_protected');
  }
  public set bruteForceProtected(value: boolean | cdktf.IResolvable) {
    this._bruteForceProtected = value;
  }
  public resetBruteForceProtected() {
    this._bruteForceProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceProtectedInput() {
    return this._bruteForceProtected;
  }

  // client_authentication_flow - computed: false, optional: true, required: false
  private _clientAuthenticationFlow?: string; 
  public get clientAuthenticationFlow() {
    return this.getStringAttribute('client_authentication_flow');
  }
  public set clientAuthenticationFlow(value: string) {
    this._clientAuthenticationFlow = value;
  }
  public resetClientAuthenticationFlow() {
    this._clientAuthenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationFlowInput() {
    return this._clientAuthenticationFlow;
  }

  // client_scope_mappings - computed: false, optional: true, required: false
  private _clientScopeMappings?: { [key: string]: string }; 
  public get clientScopeMappings() {
    return this.getStringMapAttribute('client_scope_mappings');
  }
  public set clientScopeMappings(value: { [key: string]: string }) {
    this._clientScopeMappings = value;
  }
  public resetClientScopeMappings() {
    this._clientScopeMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeMappingsInput() {
    return this._clientScopeMappings;
  }

  // client_scopes - computed: false, optional: true, required: false
  private _clientScopes = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopesList(this, "client_scopes", false);
  public get clientScopes() {
    return this._clientScopes;
  }
  public putClientScopes(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientScopes[] | cdktf.IResolvable) {
    this._clientScopes.internalValue = value;
  }
  public resetClientScopes() {
    this._clientScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopesInput() {
    return this._clientScopes.internalValue;
  }

  // clients - computed: false, optional: true, required: false
  private _clients = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }
  public putClients(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmClients[] | cdktf.IResolvable) {
    this._clients.internalValue = value;
  }
  public resetClients() {
    this._clients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }

  // default_default_client_scopes - computed: false, optional: true, required: false
  private _defaultDefaultClientScopes?: string[]; 
  public get defaultDefaultClientScopes() {
    return this.getListAttribute('default_default_client_scopes');
  }
  public set defaultDefaultClientScopes(value: string[]) {
    this._defaultDefaultClientScopes = value;
  }
  public resetDefaultDefaultClientScopes() {
    this._defaultDefaultClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDefaultClientScopesInput() {
    return this._defaultDefaultClientScopes;
  }

  // default_locale - computed: false, optional: true, required: false
  private _defaultLocale?: string; 
  public get defaultLocale() {
    return this.getStringAttribute('default_locale');
  }
  public set defaultLocale(value: string) {
    this._defaultLocale = value;
  }
  public resetDefaultLocale() {
    this._defaultLocale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocaleInput() {
    return this._defaultLocale;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRoleOutputReference(this, "default_role");
  public get defaultRole() {
    return this._defaultRole;
  }
  public putDefaultRole(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmDefaultRole) {
    this._defaultRole.internalValue = value;
  }
  public resetDefaultRole() {
    this._defaultRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole.internalValue;
  }

  // direct_grant_flow - computed: false, optional: true, required: false
  private _directGrantFlow?: string; 
  public get directGrantFlow() {
    return this.getStringAttribute('direct_grant_flow');
  }
  public set directGrantFlow(value: string) {
    this._directGrantFlow = value;
  }
  public resetDirectGrantFlow() {
    this._directGrantFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directGrantFlowInput() {
    return this._directGrantFlow;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_name_html - computed: false, optional: true, required: false
  private _displayNameHtml?: string; 
  public get displayNameHtml() {
    return this.getStringAttribute('display_name_html');
  }
  public set displayNameHtml(value: string) {
    this._displayNameHtml = value;
  }
  public resetDisplayNameHtml() {
    this._displayNameHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameHtmlInput() {
    return this._displayNameHtml;
  }

  // docker_authentication_flow - computed: false, optional: true, required: false
  private _dockerAuthenticationFlow?: string; 
  public get dockerAuthenticationFlow() {
    return this.getStringAttribute('docker_authentication_flow');
  }
  public set dockerAuthenticationFlow(value: string) {
    this._dockerAuthenticationFlow = value;
  }
  public resetDockerAuthenticationFlow() {
    this._dockerAuthenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerAuthenticationFlowInput() {
    return this._dockerAuthenticationFlow;
  }

  // duplicate_emails_allowed - computed: false, optional: true, required: false
  private _duplicateEmailsAllowed?: boolean | cdktf.IResolvable; 
  public get duplicateEmailsAllowed() {
    return this.getBooleanAttribute('duplicate_emails_allowed');
  }
  public set duplicateEmailsAllowed(value: boolean | cdktf.IResolvable) {
    this._duplicateEmailsAllowed = value;
  }
  public resetDuplicateEmailsAllowed() {
    this._duplicateEmailsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateEmailsAllowedInput() {
    return this._duplicateEmailsAllowed;
  }

  // edit_username_allowed - computed: false, optional: true, required: false
  private _editUsernameAllowed?: boolean | cdktf.IResolvable; 
  public get editUsernameAllowed() {
    return this.getBooleanAttribute('edit_username_allowed');
  }
  public set editUsernameAllowed(value: boolean | cdktf.IResolvable) {
    this._editUsernameAllowed = value;
  }
  public resetEditUsernameAllowed() {
    this._editUsernameAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editUsernameAllowedInput() {
    return this._editUsernameAllowed;
  }

  // email_theme - computed: false, optional: true, required: false
  private _emailTheme?: string; 
  public get emailTheme() {
    return this.getStringAttribute('email_theme');
  }
  public set emailTheme(value: string) {
    this._emailTheme = value;
  }
  public resetEmailTheme() {
    this._emailTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailThemeInput() {
    return this._emailTheme;
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

  // enabled_event_types - computed: false, optional: true, required: false
  private _enabledEventTypes?: string[]; 
  public get enabledEventTypes() {
    return this.getListAttribute('enabled_event_types');
  }
  public set enabledEventTypes(value: string[]) {
    this._enabledEventTypes = value;
  }
  public resetEnabledEventTypes() {
    this._enabledEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEventTypesInput() {
    return this._enabledEventTypes;
  }

  // events_enabled - computed: false, optional: true, required: false
  private _eventsEnabled?: boolean | cdktf.IResolvable; 
  public get eventsEnabled() {
    return this.getBooleanAttribute('events_enabled');
  }
  public set eventsEnabled(value: boolean | cdktf.IResolvable) {
    this._eventsEnabled = value;
  }
  public resetEventsEnabled() {
    this._eventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsEnabledInput() {
    return this._eventsEnabled;
  }

  // events_listeners - computed: false, optional: true, required: false
  private _eventsListeners?: string[]; 
  public get eventsListeners() {
    return this.getListAttribute('events_listeners');
  }
  public set eventsListeners(value: string[]) {
    this._eventsListeners = value;
  }
  public resetEventsListeners() {
    this._eventsListeners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsListenersInput() {
    return this._eventsListeners;
  }

  // failure_factor - computed: false, optional: true, required: false
  private _failureFactor?: number; 
  public get failureFactor() {
    return this.getNumberAttribute('failure_factor');
  }
  public set failureFactor(value: number) {
    this._failureFactor = value;
  }
  public resetFailureFactor() {
    this._failureFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureFactorInput() {
    return this._failureFactor;
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

  // identity_provider_mappers - computed: false, optional: true, required: false
  private _identityProviderMappers = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappersList(this, "identity_provider_mappers", false);
  public get identityProviderMappers() {
    return this._identityProviderMappers;
  }
  public putIdentityProviderMappers(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviderMappers[] | cdktf.IResolvable) {
    this._identityProviderMappers.internalValue = value;
  }
  public resetIdentityProviderMappers() {
    this._identityProviderMappers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderMappersInput() {
    return this._identityProviderMappers.internalValue;
  }

  // identity_providers - computed: false, optional: true, required: false
  private _identityProviders = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProvidersList(this, "identity_providers", false);
  public get identityProviders() {
    return this._identityProviders;
  }
  public putIdentityProviders(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmIdentityProviders[] | cdktf.IResolvable) {
    this._identityProviders.internalValue = value;
  }
  public resetIdentityProviders() {
    this._identityProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProvidersInput() {
    return this._identityProviders.internalValue;
  }

  // internationalization_enabled - computed: false, optional: true, required: false
  private _internationalizationEnabled?: boolean | cdktf.IResolvable; 
  public get internationalizationEnabled() {
    return this.getBooleanAttribute('internationalization_enabled');
  }
  public set internationalizationEnabled(value: boolean | cdktf.IResolvable) {
    this._internationalizationEnabled = value;
  }
  public resetInternationalizationEnabled() {
    this._internationalizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internationalizationEnabledInput() {
    return this._internationalizationEnabled;
  }

  // login_theme - computed: false, optional: true, required: false
  private _loginTheme?: string; 
  public get loginTheme() {
    return this.getStringAttribute('login_theme');
  }
  public set loginTheme(value: string) {
    this._loginTheme = value;
  }
  public resetLoginTheme() {
    this._loginTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginThemeInput() {
    return this._loginTheme;
  }

  // login_with_email_allowed - computed: false, optional: true, required: false
  private _loginWithEmailAllowed?: boolean | cdktf.IResolvable; 
  public get loginWithEmailAllowed() {
    return this.getBooleanAttribute('login_with_email_allowed');
  }
  public set loginWithEmailAllowed(value: boolean | cdktf.IResolvable) {
    this._loginWithEmailAllowed = value;
  }
  public resetLoginWithEmailAllowed() {
    this._loginWithEmailAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginWithEmailAllowedInput() {
    return this._loginWithEmailAllowed;
  }

  // max_delta_time_seconds - computed: false, optional: true, required: false
  private _maxDeltaTimeSeconds?: number; 
  public get maxDeltaTimeSeconds() {
    return this.getNumberAttribute('max_delta_time_seconds');
  }
  public set maxDeltaTimeSeconds(value: number) {
    this._maxDeltaTimeSeconds = value;
  }
  public resetMaxDeltaTimeSeconds() {
    this._maxDeltaTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeltaTimeSecondsInput() {
    return this._maxDeltaTimeSeconds;
  }

  // max_failure_wait_seconds - computed: false, optional: true, required: false
  private _maxFailureWaitSeconds?: number; 
  public get maxFailureWaitSeconds() {
    return this.getNumberAttribute('max_failure_wait_seconds');
  }
  public set maxFailureWaitSeconds(value: number) {
    this._maxFailureWaitSeconds = value;
  }
  public resetMaxFailureWaitSeconds() {
    this._maxFailureWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailureWaitSecondsInput() {
    return this._maxFailureWaitSeconds;
  }

  // minimum_quick_login_wait_seconds - computed: false, optional: true, required: false
  private _minimumQuickLoginWaitSeconds?: number; 
  public get minimumQuickLoginWaitSeconds() {
    return this.getNumberAttribute('minimum_quick_login_wait_seconds');
  }
  public set minimumQuickLoginWaitSeconds(value: number) {
    this._minimumQuickLoginWaitSeconds = value;
  }
  public resetMinimumQuickLoginWaitSeconds() {
    this._minimumQuickLoginWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumQuickLoginWaitSecondsInput() {
    return this._minimumQuickLoginWaitSeconds;
  }

  // otp_policy_algorithm - computed: false, optional: true, required: false
  private _otpPolicyAlgorithm?: string; 
  public get otpPolicyAlgorithm() {
    return this.getStringAttribute('otp_policy_algorithm');
  }
  public set otpPolicyAlgorithm(value: string) {
    this._otpPolicyAlgorithm = value;
  }
  public resetOtpPolicyAlgorithm() {
    this._otpPolicyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyAlgorithmInput() {
    return this._otpPolicyAlgorithm;
  }

  // otp_policy_digits - computed: false, optional: true, required: false
  private _otpPolicyDigits?: number; 
  public get otpPolicyDigits() {
    return this.getNumberAttribute('otp_policy_digits');
  }
  public set otpPolicyDigits(value: number) {
    this._otpPolicyDigits = value;
  }
  public resetOtpPolicyDigits() {
    this._otpPolicyDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyDigitsInput() {
    return this._otpPolicyDigits;
  }

  // otp_policy_initial_counter - computed: false, optional: true, required: false
  private _otpPolicyInitialCounter?: number; 
  public get otpPolicyInitialCounter() {
    return this.getNumberAttribute('otp_policy_initial_counter');
  }
  public set otpPolicyInitialCounter(value: number) {
    this._otpPolicyInitialCounter = value;
  }
  public resetOtpPolicyInitialCounter() {
    this._otpPolicyInitialCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyInitialCounterInput() {
    return this._otpPolicyInitialCounter;
  }

  // otp_policy_look_ahead_window - computed: false, optional: true, required: false
  private _otpPolicyLookAheadWindow?: number; 
  public get otpPolicyLookAheadWindow() {
    return this.getNumberAttribute('otp_policy_look_ahead_window');
  }
  public set otpPolicyLookAheadWindow(value: number) {
    this._otpPolicyLookAheadWindow = value;
  }
  public resetOtpPolicyLookAheadWindow() {
    this._otpPolicyLookAheadWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyLookAheadWindowInput() {
    return this._otpPolicyLookAheadWindow;
  }

  // otp_policy_period - computed: false, optional: true, required: false
  private _otpPolicyPeriod?: number; 
  public get otpPolicyPeriod() {
    return this.getNumberAttribute('otp_policy_period');
  }
  public set otpPolicyPeriod(value: number) {
    this._otpPolicyPeriod = value;
  }
  public resetOtpPolicyPeriod() {
    this._otpPolicyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyPeriodInput() {
    return this._otpPolicyPeriod;
  }

  // otp_policy_type - computed: false, optional: true, required: false
  private _otpPolicyType?: string; 
  public get otpPolicyType() {
    return this.getStringAttribute('otp_policy_type');
  }
  public set otpPolicyType(value: string) {
    this._otpPolicyType = value;
  }
  public resetOtpPolicyType() {
    this._otpPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyTypeInput() {
    return this._otpPolicyType;
  }

  // otp_supported_applications - computed: false, optional: true, required: false
  private _otpSupportedApplications?: string[]; 
  public get otpSupportedApplications() {
    return this.getListAttribute('otp_supported_applications');
  }
  public set otpSupportedApplications(value: string[]) {
    this._otpSupportedApplications = value;
  }
  public resetOtpSupportedApplications() {
    this._otpSupportedApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpSupportedApplicationsInput() {
    return this._otpSupportedApplications;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // permanent_lockout - computed: false, optional: true, required: false
  private _permanentLockout?: boolean | cdktf.IResolvable; 
  public get permanentLockout() {
    return this.getBooleanAttribute('permanent_lockout');
  }
  public set permanentLockout(value: boolean | cdktf.IResolvable) {
    this._permanentLockout = value;
  }
  public resetPermanentLockout() {
    this._permanentLockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentLockoutInput() {
    return this._permanentLockout;
  }

  // quick_login_check_milli_seconds - computed: false, optional: true, required: false
  private _quickLoginCheckMilliSeconds?: number; 
  public get quickLoginCheckMilliSeconds() {
    return this.getNumberAttribute('quick_login_check_milli_seconds');
  }
  public set quickLoginCheckMilliSeconds(value: number) {
    this._quickLoginCheckMilliSeconds = value;
  }
  public resetQuickLoginCheckMilliSeconds() {
    this._quickLoginCheckMilliSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickLoginCheckMilliSecondsInput() {
    return this._quickLoginCheckMilliSeconds;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // registration_allowed - computed: false, optional: true, required: false
  private _registrationAllowed?: boolean | cdktf.IResolvable; 
  public get registrationAllowed() {
    return this.getBooleanAttribute('registration_allowed');
  }
  public set registrationAllowed(value: boolean | cdktf.IResolvable) {
    this._registrationAllowed = value;
  }
  public resetRegistrationAllowed() {
    this._registrationAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationAllowedInput() {
    return this._registrationAllowed;
  }

  // registration_email_as_username - computed: false, optional: true, required: false
  private _registrationEmailAsUsername?: boolean | cdktf.IResolvable; 
  public get registrationEmailAsUsername() {
    return this.getBooleanAttribute('registration_email_as_username');
  }
  public set registrationEmailAsUsername(value: boolean | cdktf.IResolvable) {
    this._registrationEmailAsUsername = value;
  }
  public resetRegistrationEmailAsUsername() {
    this._registrationEmailAsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationEmailAsUsernameInput() {
    return this._registrationEmailAsUsername;
  }

  // registration_flow - computed: false, optional: true, required: false
  private _registrationFlow?: string; 
  public get registrationFlow() {
    return this.getStringAttribute('registration_flow');
  }
  public set registrationFlow(value: string) {
    this._registrationFlow = value;
  }
  public resetRegistrationFlow() {
    this._registrationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationFlowInput() {
    return this._registrationFlow;
  }

  // remember_me - computed: false, optional: true, required: false
  private _rememberMe?: boolean | cdktf.IResolvable; 
  public get rememberMe() {
    return this.getBooleanAttribute('remember_me');
  }
  public set rememberMe(value: boolean | cdktf.IResolvable) {
    this._rememberMe = value;
  }
  public resetRememberMe() {
    this._rememberMe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberMeInput() {
    return this._rememberMe;
  }

  // reset_credentials_flow - computed: false, optional: true, required: false
  private _resetCredentialsFlow?: string; 
  public get resetCredentialsFlow() {
    return this.getStringAttribute('reset_credentials_flow');
  }
  public set resetCredentialsFlow(value: string) {
    this._resetCredentialsFlow = value;
  }
  public resetResetCredentialsFlow() {
    this._resetCredentialsFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCredentialsFlowInput() {
    return this._resetCredentialsFlow;
  }

  // reset_password_allowed - computed: false, optional: true, required: false
  private _resetPasswordAllowed?: boolean | cdktf.IResolvable; 
  public get resetPasswordAllowed() {
    return this.getBooleanAttribute('reset_password_allowed');
  }
  public set resetPasswordAllowed(value: boolean | cdktf.IResolvable) {
    this._resetPasswordAllowed = value;
  }
  public resetResetPasswordAllowed() {
    this._resetPasswordAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPasswordAllowedInput() {
    return this._resetPasswordAllowed;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRolesOutputReference(this, "roles");
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmRoles) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // scope_mappings - computed: false, optional: true, required: false
  private _scopeMappings = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappingsList(this, "scope_mappings", false);
  public get scopeMappings() {
    return this._scopeMappings;
  }
  public putScopeMappings(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmScopeMappings[] | cdktf.IResolvable) {
    this._scopeMappings.internalValue = value;
  }
  public resetScopeMappings() {
    this._scopeMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeMappingsInput() {
    return this._scopeMappings.internalValue;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer?: { [key: string]: string }; 
  public get smtpServer() {
    return this.getStringMapAttribute('smtp_server');
  }
  public set smtpServer(value: { [key: string]: string }) {
    this._smtpServer = value;
  }
  public resetSmtpServer() {
    this._smtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer;
  }

  // ssl_required - computed: false, optional: true, required: false
  private _sslRequired?: string; 
  public get sslRequired() {
    return this.getStringAttribute('ssl_required');
  }
  public set sslRequired(value: string) {
    this._sslRequired = value;
  }
  public resetSslRequired() {
    this._sslRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRequiredInput() {
    return this._sslRequired;
  }

  // supported_locales - computed: false, optional: true, required: false
  private _supportedLocales?: string[]; 
  public get supportedLocales() {
    return this.getListAttribute('supported_locales');
  }
  public set supportedLocales(value: string[]) {
    this._supportedLocales = value;
  }
  public resetSupportedLocales() {
    this._supportedLocales = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLocalesInput() {
    return this._supportedLocales;
  }

  // user_federation_mappers - computed: false, optional: true, required: false
  private _userFederationMappers = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappersList(this, "user_federation_mappers", false);
  public get userFederationMappers() {
    return this._userFederationMappers;
  }
  public putUserFederationMappers(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationMappers[] | cdktf.IResolvable) {
    this._userFederationMappers.internalValue = value;
  }
  public resetUserFederationMappers() {
    this._userFederationMappers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFederationMappersInput() {
    return this._userFederationMappers.internalValue;
  }

  // user_federation_providers - computed: false, optional: true, required: false
  private _userFederationProviders = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProvidersList(this, "user_federation_providers", false);
  public get userFederationProviders() {
    return this._userFederationProviders;
  }
  public putUserFederationProviders(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUserFederationProviders[] | cdktf.IResolvable) {
    this._userFederationProviders.internalValue = value;
  }
  public resetUserFederationProviders() {
    this._userFederationProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFederationProvidersInput() {
    return this._userFederationProviders.internalValue;
  }

  // user_managed_access_allowed - computed: false, optional: true, required: false
  private _userManagedAccessAllowed?: boolean | cdktf.IResolvable; 
  public get userManagedAccessAllowed() {
    return this.getBooleanAttribute('user_managed_access_allowed');
  }
  public set userManagedAccessAllowed(value: boolean | cdktf.IResolvable) {
    this._userManagedAccessAllowed = value;
  }
  public resetUserManagedAccessAllowed() {
    this._userManagedAccessAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedAccessAllowedInput() {
    return this._userManagedAccessAllowed;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // verify_email - computed: false, optional: true, required: false
  private _verifyEmail?: boolean | cdktf.IResolvable; 
  public get verifyEmail() {
    return this.getBooleanAttribute('verify_email');
  }
  public set verifyEmail(value: boolean | cdktf.IResolvable) {
    this._verifyEmail = value;
  }
  public resetVerifyEmail() {
    this._verifyEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEmailInput() {
    return this._verifyEmail;
  }

  // wait_increment_seconds - computed: false, optional: true, required: false
  private _waitIncrementSeconds?: number; 
  public get waitIncrementSeconds() {
    return this.getNumberAttribute('wait_increment_seconds');
  }
  public set waitIncrementSeconds(value: number) {
    this._waitIncrementSeconds = value;
  }
  public resetWaitIncrementSeconds() {
    this._waitIncrementSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIncrementSecondsInput() {
    return this._waitIncrementSeconds;
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides {
  /**
  * Flow to be overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#for_flow DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#for_flow}
  */
  readonly forFlow?: string;
  /**
  * Identity Provider to be overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#identity_provider DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#identity_provider}
  */
  readonly identityProvider: string;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    for_flow: cdktf.stringToTerraform(struct!.forFlow),
    identity_provider: cdktf.stringToTerraform(struct!.identityProvider),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    for_flow: {
      value: cdktf.stringToHclTerraform(struct!.forFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider: {
      value: cdktf.stringToHclTerraform(struct!.identityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.forFlow = this._forFlow;
    }
    if (this._identityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProvider = this._identityProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forFlow = undefined;
      this._identityProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forFlow = value.forFlow;
      this._identityProvider = value.identityProvider;
    }
  }

  // for_flow - computed: false, optional: true, required: false
  private _forFlow?: string; 
  public get forFlow() {
    return this.getStringAttribute('for_flow');
  }
  public set forFlow(value: string) {
    this._forFlow = value;
  }
  public resetForFlow() {
    this._forFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forFlowInput() {
    return this._forFlow;
  }

  // identity_provider - computed: false, optional: false, required: true
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesOutputReference {
    return new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec {
  /**
  * Selector for looking up Keycloak Custom Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#instance_selector DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#instance_selector}
  */
  readonly instanceSelector?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector;
  /**
  * Keycloak Realm REST object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#realm}
  */
  readonly realm: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm;
  /**
  * A list of overrides to the default Realm behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#realm_overrides DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#realm_overrides}
  */
  readonly realmOverrides?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides[] | cdktf.IResolvable;
  /**
  * When set to true, this KeycloakRealm will be marked as unmanaged and not be managed by this operator. It can then be used for targeting purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#unmanaged DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_selector: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorToTerraform(struct!.instanceSelector),
    realm: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmToTerraform(struct!.realm),
    realm_overrides: cdktf.listMapper(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesToTerraform, false)(struct!.realmOverrides),
    unmanaged: cdktf.booleanToTerraform(struct!.unmanaged),
  }
}


export function dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_selector: {
      value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorToHclTerraform(struct!.instanceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector",
    },
    realm: {
      value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmToHclTerraform(struct!.realm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm",
    },
    realm_overrides: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesToHclTerraform, false)(struct!.realmOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesList",
    },
    unmanaged: {
      value: cdktf.booleanToHclTerraform(struct!.unmanaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    if (this._realm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm?.internalValue;
    }
    if (this._realmOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmOverrides = this._realmOverrides?.internalValue;
    }
    if (this._unmanaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanaged = this._unmanaged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceSelector.internalValue = undefined;
      this._realm.internalValue = undefined;
      this._realmOverrides.internalValue = undefined;
      this._unmanaged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceSelector.internalValue = value.instanceSelector;
      this._realm.internalValue = value.realm;
      this._realmOverrides.internalValue = value.realmOverrides;
      this._unmanaged = value.unmanaged;
    }
  }

  // instance_selector - computed: false, optional: true, required: false
  private _instanceSelector = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelectorOutputReference(this, "instance_selector");
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecInstanceSelector) {
    this._instanceSelector.internalValue = value;
  }
  public resetInstanceSelector() {
    this._instanceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }

  // realm - computed: false, optional: false, required: true
  private _realm = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOutputReference(this, "realm");
  public get realm() {
    return this._realm;
  }
  public putRealm(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealm) {
    this._realm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm.internalValue;
  }

  // realm_overrides - computed: false, optional: true, required: false
  private _realmOverrides = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverridesList(this, "realm_overrides", false);
  public get realmOverrides() {
    return this._realmOverrides;
  }
  public putRealmOverrides(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecRealmOverrides[] | cdktf.IResolvable) {
    this._realmOverrides.internalValue = value;
  }
  public resetRealmOverrides() {
    this._realmOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmOverridesInput() {
    return this._realmOverrides.internalValue;
  }

  // unmanaged - computed: false, optional: true, required: false
  private _unmanaged?: boolean | cdktf.IResolvable; 
  public get unmanaged() {
    return this.getBooleanAttribute('unmanaged');
  }
  public set unmanaged(value: boolean | cdktf.IResolvable) {
    this._unmanaged = value;
  }
  public resetUnmanaged() {
    this._unmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInput() {
    return this._unmanaged;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest k8s_keycloak_org_keycloak_realm_v1alpha1_manifest}
*/
export class DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keycloak_org_keycloak_realm_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKeycloakOrgKeycloakRealmV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keycloak_org_keycloak_realm_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keycloak_org_keycloak_realm_v1alpha1_manifest k8s_keycloak_org_keycloak_realm_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keycloak_org_keycloak_realm_v1alpha1_manifest',
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
  private _metadata = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakRealmV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
