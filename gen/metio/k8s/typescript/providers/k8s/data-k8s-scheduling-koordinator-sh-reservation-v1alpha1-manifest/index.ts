// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#metadata DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#spec DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec;
}
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#annotations DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#labels DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#name DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#api_version DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * If true, AND if the owner has the 'foregroundDeletion' finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs 'delete' permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#block_owner_deletion DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#block_owner_deletion}
  */
  readonly blockOwnerDeletion?: boolean | cdktf.IResolvable;
  /**
  * If true, this reference points to the managing controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#controller DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#controller}
  */
  readonly controller?: boolean | cdktf.IResolvable;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#kind DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#name DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#namespace DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#uid DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersControllerToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    block_owner_deletion: cdktf.booleanToTerraform(struct!.blockOwnerDeletion),
    controller: cdktf.booleanToTerraform(struct!.controller),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersControllerToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController | cdktf.IResolvable): any {
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
    block_owner_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.blockOwnerDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    controller: {
      value: cdktf.booleanToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._blockOwnerDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockOwnerDeletion = this._blockOwnerDeletion;
    }
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
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
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._blockOwnerDeletion = undefined;
      this._controller = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._blockOwnerDeletion = value.blockOwnerDeletion;
      this._controller = value.controller;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._uid = value.uid;
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

  // block_owner_deletion - computed: false, optional: true, required: false
  private _blockOwnerDeletion?: boolean | cdktf.IResolvable; 
  public get blockOwnerDeletion() {
    return this.getBooleanAttribute('block_owner_deletion');
  }
  public set blockOwnerDeletion(value: boolean | cdktf.IResolvable) {
    this._blockOwnerDeletion = value;
  }
  public resetBlockOwnerDeletion() {
    this._blockOwnerDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOwnerDeletionInput() {
    return this._blockOwnerDeletion;
  }

  // controller - computed: false, optional: true, required: false
  private _controller?: boolean | cdktf.IResolvable; 
  public get controller() {
    return this.getBooleanAttribute('controller');
  }
  public set controller(value: boolean | cdktf.IResolvable) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
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

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#key DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#operator DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#values DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#match_expressions DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#match_labels DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsList",
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

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#api_version DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#field_path DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#kind DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#name DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#namespace DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#resource_version DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#uid DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObjectToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObjectToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject | cdktf.IResolvable): any {
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject | cdktf.IResolvable | undefined {
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#controller DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#controller}
  */
  readonly controller?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#label_selector DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector;
  /**
  * Multiple field selectors are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#object DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#object}
  */
  readonly object?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject;
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersControllerToTerraform(struct!.controller),
    label_selector: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorToTerraform(struct!.labelSelector),
    object: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObjectToTerraform(struct!.object),
  }
}


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller: {
      value: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersControllerToHclTerraform(struct!.controller),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController",
    },
    label_selector: {
      value: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector",
    },
    object: {
      value: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controller.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._object.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controller.internalValue = value.controller;
      this._labelSelector.internalValue = value.labelSelector;
      this._object.internalValue = value.object;
    }
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersControllerOutputReference(this, "controller");
  public get controller() {
    return this._controller;
  }
  public putController(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersController) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }
}

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersOutputReference {
    return new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#effect DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#key DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#time_added DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#value DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
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


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
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

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined) {
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

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsOutputReference {
    return new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec {
  /**
  * When 'AllocateOnce' is set, the reserved resources are only available for the first owner who allocates successfully and are not allocatable to other owners anymore. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#allocate_once DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#allocate_once}
  */
  readonly allocateOnce?: boolean | cdktf.IResolvable;
  /**
  * AllocatePolicy represents the allocation policy of reserved resources that Reservation expects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#allocate_policy DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#allocate_policy}
  */
  readonly allocatePolicy?: string;
  /**
  * Expired timestamp when the reservation is expected to expire. If both 'expires' and 'ttl' are set, 'expires' is checked first. 'expires' and 'ttl' are mutually exclusive. Defaults to being set dynamically at runtime based on the 'ttl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#expires DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#expires}
  */
  readonly expires?: string;
  /**
  * Specify the owners who can allocate the reserved resources. Multiple owner selectors and ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#owners DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#owners}
  */
  readonly owners: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners[] | cdktf.IResolvable;
  /**
  * By default, the resources requirements of reservation (specified in 'template.spec') is filtered by whether the node has sufficient free resources (i.e. Reservation Request < Node Free). When 'preAllocation' is set, the scheduler will skip this validation and allow overcommitment. The scheduled reservation would be waiting to be available until free resources are sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#pre_allocation DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#pre_allocation}
  */
  readonly preAllocation?: boolean | cdktf.IResolvable;
  /**
  * Specifies the reservation's taints. This can be toleranted by the reservation tolerance. Eviction is not supported for NoExecute taints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#taints DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#taints}
  */
  readonly taints?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable;
  /**
  * Template defines the scheduling requirements (resources, affinities, images, ...) processed by the scheduler just like a normal pod. If the 'template.spec.nodeName' is specified, the scheduler will not choose another node but reserve resources on the specified node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#template DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#template}
  */
  readonly template: { [key: string]: string };
  /**
  * Time-to-Live period for the reservation. 'expires' and 'ttl' are mutually exclusive. Defaults to 24h. Set 0 to disable expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#ttl DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#ttl}
  */
  readonly ttl?: string;
  /**
  * Unschedulable controls reservation schedulability of new pods. By default, reservation is schedulable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#unschedulable DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest#unschedulable}
  */
  readonly unschedulable?: boolean | cdktf.IResolvable;
}

export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_once: cdktf.booleanToTerraform(struct!.allocateOnce),
    allocate_policy: cdktf.stringToTerraform(struct!.allocatePolicy),
    expires: cdktf.stringToTerraform(struct!.expires),
    owners: cdktf.listMapper(dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersToTerraform, false)(struct!.owners),
    pre_allocation: cdktf.booleanToTerraform(struct!.preAllocation),
    taints: cdktf.listMapper(dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsToTerraform, false)(struct!.taints),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    unschedulable: cdktf.booleanToTerraform(struct!.unschedulable),
  }
}


export function dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_once: {
      value: cdktf.booleanToHclTerraform(struct!.allocateOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allocate_policy: {
      value: cdktf.stringToHclTerraform(struct!.allocatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires: {
      value: cdktf.stringToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owners: {
      value: cdktf.listMapperHcl(dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersToHclTerraform, false)(struct!.owners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersList",
    },
    pre_allocation: {
      value: cdktf.booleanToHclTerraform(struct!.preAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsList",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unschedulable: {
      value: cdktf.booleanToHclTerraform(struct!.unschedulable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateOnce = this._allocateOnce;
    }
    if (this._allocatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatePolicy = this._allocatePolicy;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._owners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owners = this._owners?.internalValue;
    }
    if (this._preAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAllocation = this._preAllocation;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._unschedulable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unschedulable = this._unschedulable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocateOnce = undefined;
      this._allocatePolicy = undefined;
      this._expires = undefined;
      this._owners.internalValue = undefined;
      this._preAllocation = undefined;
      this._taints.internalValue = undefined;
      this._template = undefined;
      this._ttl = undefined;
      this._unschedulable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocateOnce = value.allocateOnce;
      this._allocatePolicy = value.allocatePolicy;
      this._expires = value.expires;
      this._owners.internalValue = value.owners;
      this._preAllocation = value.preAllocation;
      this._taints.internalValue = value.taints;
      this._template = value.template;
      this._ttl = value.ttl;
      this._unschedulable = value.unschedulable;
    }
  }

  // allocate_once - computed: false, optional: true, required: false
  private _allocateOnce?: boolean | cdktf.IResolvable; 
  public get allocateOnce() {
    return this.getBooleanAttribute('allocate_once');
  }
  public set allocateOnce(value: boolean | cdktf.IResolvable) {
    this._allocateOnce = value;
  }
  public resetAllocateOnce() {
    this._allocateOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateOnceInput() {
    return this._allocateOnce;
  }

  // allocate_policy - computed: false, optional: true, required: false
  private _allocatePolicy?: string; 
  public get allocatePolicy() {
    return this.getStringAttribute('allocate_policy');
  }
  public set allocatePolicy(value: string) {
    this._allocatePolicy = value;
  }
  public resetAllocatePolicy() {
    this._allocatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePolicyInput() {
    return this._allocatePolicy;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // owners - computed: false, optional: false, required: true
  private _owners = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwnersList(this, "owners", false);
  public get owners() {
    return this._owners;
  }
  public putOwners(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOwners[] | cdktf.IResolvable) {
    this._owners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners.internalValue;
  }

  // pre_allocation - computed: false, optional: true, required: false
  private _preAllocation?: boolean | cdktf.IResolvable; 
  public get preAllocation() {
    return this.getBooleanAttribute('pre_allocation');
  }
  public set preAllocation(value: boolean | cdktf.IResolvable) {
    this._preAllocation = value;
  }
  public resetPreAllocation() {
    this._preAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAllocationInput() {
    return this._preAllocation;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: boolean | cdktf.IResolvable; 
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
  public set unschedulable(value: boolean | cdktf.IResolvable) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest k8s_scheduling_koordinator_sh_reservation_v1alpha1_manifest}
*/
export class DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scheduling_koordinator_sh_reservation_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchedulingKoordinatorShReservationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scheduling_koordinator_sh_reservation_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/scheduling_koordinator_sh_reservation_v1alpha1_manifest k8s_scheduling_koordinator_sh_reservation_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scheduling_koordinator_sh_reservation_v1alpha1_manifest',
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
  private _metadata = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingKoordinatorShReservationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
