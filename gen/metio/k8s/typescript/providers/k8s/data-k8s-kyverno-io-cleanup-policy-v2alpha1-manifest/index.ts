// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#metadata DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata;
  /**
  * Spec declares policy behaviors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#spec DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec;
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll {
  /**
  * Key is the context entry (using JMESPath) for conditional rule evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key?: { [key: string]: string };
  /**
  * Message is an optional display message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#message DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#message}
  */
  readonly message?: string;
  /**
  * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#value DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.key),
    message: cdktf.stringToTerraform(struct!.message),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.key),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._message = undefined;
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
      this._key = value.key;
      this._message = value.message;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: { [key: string]: string }; 
  public get key() {
    return this.getStringMapAttribute('key');
  }
  public set key(value: { [key: string]: string }) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny {
  /**
  * Key is the context entry (using JMESPath) for conditional rule evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key?: { [key: string]: string };
  /**
  * Message is an optional display message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#message DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#message}
  */
  readonly message?: string;
  /**
  * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#value DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.key),
    message: cdktf.stringToTerraform(struct!.message),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.key),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._message = undefined;
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
      this._key = value.key;
      this._message = value.message;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: { [key: string]: string }; 
  public get key() {
    return this.getStringMapAttribute('key');
  }
  public set key(value: { [key: string]: string }) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions {
  /**
  * AllConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, all of the conditions need to pass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#all DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#all}
  */
  readonly all?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll[] | cdktf.IResolvable;
  /**
  * AnyConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, at least one of the conditions need to pass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#any DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#any}
  */
  readonly any?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllToTerraform, false)(struct!.all),
    any: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyToTerraform, false)(struct!.any),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllToHclTerraform, false)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllList",
    },
    any: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyToHclTerraform, false)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._any.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._any.internalValue = value.any;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAll[] | cdktf.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // any - computed: false, optional: true, required: false
  private _any = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsAny[] | cdktf.IResolvable) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData {
  /**
  * Key is a unique identifier for the data value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the data value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#value DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService {
  /**
  * CABundle is a PEM encoded CA bundle which will be used to validate the server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#ca_bundle DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * URL is the JSON web service URL. A typical form is 'https://{service}.{namespace}:{port}/{path}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#url DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallServiceToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallServiceToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundle = value.caBundle;
      this._url = value.url;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall {
  /**
  * The data object specifies the POST data sent to the server. Only applicable when the method field is set to POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#data DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#data}
  */
  readonly data?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData[] | cdktf.IResolvable;
  /**
  * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the server. For example a JMESPath of 'items | length(@)' applied to the API server response for the URLPath '/apis/apps/v1/deployments' will return the total count of deployments across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Method is the HTTP request type (GET or POST). Defaults to GET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#method DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Service is an API call to a JSON web service. This is used for non-Kubernetes API server calls. It's mutually exclusive with the URLPath field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#service DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#service}
  */
  readonly service?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService;
  /**
  * URLPath is the URL path to be used in the HTTP GET or POST request to the Kubernetes API server (e.g. '/api/v1/namespaces' or '/apis/apps/v1/deployments'). The format required is the same format used by the 'kubectl get --raw' command. See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls for details. It's mutually exclusive with the Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#url_path DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#url_path}
  */
  readonly urlPath?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataToTerraform, false)(struct!.data),
    jmes_path: cdktf.stringToTerraform(struct!.jmesPath),
    method: cdktf.stringToTerraform(struct!.method),
    service: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallServiceToTerraform(struct!.service),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataList",
    },
    jmes_path: {
      value: cdktf.stringToHclTerraform(struct!.jmesPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._jmesPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmesPath = this._jmesPath;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._jmesPath = undefined;
      this._method = undefined;
      this._service.internalValue = undefined;
      this._urlPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
      this._jmesPath = value.jmesPath;
      this._method = value.method;
      this._service.internalValue = value.service;
      this._urlPath = value.urlPath;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // jmes_path - computed: false, optional: true, required: false
  private _jmesPath?: string; 
  public get jmesPath() {
    return this.getStringAttribute('jmes_path');
  }
  public set jmesPath(value: string) {
    this._jmesPath = value;
  }
  public resetJmesPath() {
    this._jmesPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmesPathInput() {
    return this._jmesPath;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap {
  /**
  * Name is the ConfigMap name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the ConfigMap namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMapToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMapToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference {
  /**
  * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the server. For example a JMESPath of 'items | length(@)' applied to the API server response for the URLPath '/apis/apps/v1/deployments' will return the total count of deployments across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Name of the global context entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReferenceToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jmes_path: cdktf.stringToTerraform(struct!.jmesPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReferenceToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jmes_path: {
      value: cdktf.stringToHclTerraform(struct!.jmesPath),
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jmesPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmesPath = this._jmesPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jmesPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jmesPath = value.jmesPath;
      this._name = value.name;
    }
  }

  // jmes_path - computed: false, optional: true, required: false
  private _jmesPath?: string; 
  public get jmesPath() {
    return this.getStringAttribute('jmes_path');
  }
  public set jmesPath(value: string) {
    this._jmesPath = value;
  }
  public resetJmesPath() {
    this._jmesPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmesPathInput() {
    return this._jmesPath;
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials {
  /**
  * AllowInsecureRegistry allows insecure access to a registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#allow_insecure_registry DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#allow_insecure_registry}
  */
  readonly allowInsecureRegistry?: boolean | cdktf.IResolvable;
  /**
  * Providers specifies a list of OCI Registry names, whose authentication providers are provided. It can be of one of these values: default,google,azure,amazon,github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#providers DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#providers}
  */
  readonly providers?: string[];
  /**
  * Secrets specifies a list of secrets that are provided for credentials. Secrets must live in the Kyverno namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#secrets DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#secrets}
  */
  readonly secrets?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentialsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_registry: cdktf.booleanToTerraform(struct!.allowInsecureRegistry),
    providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.providers),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentialsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_registry: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.providers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureRegistry = this._allowInsecureRegistry;
    }
    if (this._providers !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecureRegistry = undefined;
      this._providers = undefined;
      this._secrets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecureRegistry = value.allowInsecureRegistry;
      this._providers = value.providers;
      this._secrets = value.secrets;
    }
  }

  // allow_insecure_registry - computed: false, optional: true, required: false
  private _allowInsecureRegistry?: boolean | cdktf.IResolvable; 
  public get allowInsecureRegistry() {
    return this.getBooleanAttribute('allow_insecure_registry');
  }
  public set allowInsecureRegistry(value: boolean | cdktf.IResolvable) {
    this._allowInsecureRegistry = value;
  }
  public resetAllowInsecureRegistry() {
    this._allowInsecureRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureRegistryInput() {
    return this._allowInsecureRegistry;
  }

  // providers - computed: false, optional: true, required: false
  private _providers?: string[]; 
  public get providers() {
    return this.getListAttribute('providers');
  }
  public set providers(value: string[]) {
    this._providers = value;
  }
  public resetProviders() {
    this._providers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry {
  /**
  * ImageRegistryCredentials provides credentials that will be used for authentication with registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#image_registry_credentials DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#image_registry_credentials}
  */
  readonly imageRegistryCredentials?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials;
  /**
  * JMESPath is an optional JSON Match Expression that can be used to transform the ImageData struct returned as a result of processing the image reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Reference is image reference to a container image in the registry. Example: ghcr.io/kyverno/kyverno:latest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#reference DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#reference}
  */
  readonly reference: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_registry_credentials: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentialsToTerraform(struct!.imageRegistryCredentials),
    jmes_path: cdktf.stringToTerraform(struct!.jmesPath),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_registry_credentials: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentialsToHclTerraform(struct!.imageRegistryCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials",
    },
    jmes_path: {
      value: cdktf.stringToHclTerraform(struct!.jmesPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageRegistryCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistryCredentials = this._imageRegistryCredentials?.internalValue;
    }
    if (this._jmesPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmesPath = this._jmesPath;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageRegistryCredentials.internalValue = undefined;
      this._jmesPath = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageRegistryCredentials.internalValue = value.imageRegistryCredentials;
      this._jmesPath = value.jmesPath;
      this._reference = value.reference;
    }
  }

  // image_registry_credentials - computed: false, optional: true, required: false
  private _imageRegistryCredentials = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentialsOutputReference(this, "image_registry_credentials");
  public get imageRegistryCredentials() {
    return this._imageRegistryCredentials;
  }
  public putImageRegistryCredentials(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryImageRegistryCredentials) {
    this._imageRegistryCredentials.internalValue = value;
  }
  public resetImageRegistryCredentials() {
    this._imageRegistryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialsInput() {
    return this._imageRegistryCredentials.internalValue;
  }

  // jmes_path - computed: false, optional: true, required: false
  private _jmesPath?: string; 
  public get jmesPath() {
    return this.getStringAttribute('jmes_path');
  }
  public set jmesPath(value: string) {
    this._jmesPath = value;
  }
  public resetJmesPath() {
    this._jmesPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmesPathInput() {
    return this._jmesPath;
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable {
  /**
  * Default is an optional arbitrary JSON object that the variable may take if the JMESPath expression evaluates to nil
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#default DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * JMESPath is an optional JMESPath Expression that can be used to transform the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Value is any arbitrary JSON object representable in YAML or JSON form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#value DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariableToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    jmes_path: cdktf.stringToTerraform(struct!.jmesPath),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariableToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jmes_path: {
      value: cdktf.stringToHclTerraform(struct!.jmesPath),
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._jmesPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmesPath = this._jmesPath;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._jmesPath = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._jmesPath = value.jmesPath;
      this._value = value.value;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // jmes_path - computed: false, optional: true, required: false
  private _jmesPath?: string; 
  public get jmesPath() {
    return this.getStringAttribute('jmes_path');
  }
  public set jmesPath(value: string) {
    this._jmesPath = value;
  }
  public resetJmesPath() {
    this._jmesPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmesPathInput() {
    return this._jmesPath;
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext {
  /**
  * APICall is an HTTP request to the Kubernetes API server, or other JSON web service. The data returned is stored in the context with the name for the context entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#api_call DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#api_call}
  */
  readonly apiCall?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall;
  /**
  * ConfigMap is the ConfigMap reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#config_map DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap;
  /**
  * GlobalContextEntryReference is a reference to a cached global context entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#global_reference DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#global_reference}
  */
  readonly globalReference?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference;
  /**
  * ImageRegistry defines requests to an OCI/Docker V2 registry to fetch image details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#image_registry DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#image_registry}
  */
  readonly imageRegistry?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry;
  /**
  * Name is the variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Variable defines an arbitrary JMESPath context variable that can be defined inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#variable DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#variable}
  */
  readonly variable?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_call: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallToTerraform(struct!.apiCall),
    config_map: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMapToTerraform(struct!.configMap),
    global_reference: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReferenceToTerraform(struct!.globalReference),
    image_registry: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryToTerraform(struct!.imageRegistry),
    name: cdktf.stringToTerraform(struct!.name),
    variable: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariableToTerraform(struct!.variable),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_call: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallToHclTerraform(struct!.apiCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall",
    },
    config_map: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap",
    },
    global_reference: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReferenceToHclTerraform(struct!.globalReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference",
    },
    image_registry: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryToHclTerraform(struct!.imageRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariableToHclTerraform(struct!.variable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCall = this._apiCall?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._globalReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalReference = this._globalReference?.internalValue;
    }
    if (this._imageRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistry = this._imageRegistry?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiCall.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._globalReference.internalValue = undefined;
      this._imageRegistry.internalValue = undefined;
      this._name = undefined;
      this._variable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiCall.internalValue = value.apiCall;
      this._configMap.internalValue = value.configMap;
      this._globalReference.internalValue = value.globalReference;
      this._imageRegistry.internalValue = value.imageRegistry;
      this._name = value.name;
      this._variable.internalValue = value.variable;
    }
  }

  // api_call - computed: false, optional: true, required: false
  private _apiCall = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCallOutputReference(this, "api_call");
  public get apiCall() {
    return this._apiCall;
  }
  public putApiCall(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextApiCall) {
    this._apiCall.internalValue = value;
  }
  public resetApiCall() {
    this._apiCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCallInput() {
    return this._apiCall.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // global_reference - computed: false, optional: true, required: false
  private _globalReference = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReferenceOutputReference(this, "global_reference");
  public get globalReference() {
    return this._globalReference;
  }
  public putGlobalReference(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextGlobalReference) {
    this._globalReference.internalValue = value;
  }
  public resetGlobalReference() {
    this._globalReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReferenceInput() {
    return this._globalReference.internalValue;
  }

  // image_registry - computed: false, optional: true, required: false
  private _imageRegistry = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistryOutputReference(this, "image_registry");
  public get imageRegistry() {
    return this._imageRegistry;
  }
  public putImageRegistry(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextImageRegistry) {
    this._imageRegistry.internalValue = value;
  }
  public resetImageRegistry() {
    this._imageRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry.internalValue;
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

  // variable - computed: false, optional: true, required: false
  private _variable = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariableOutputReference(this, "variable");
  public get variable() {
    return this._variable;
  }
  public putVariable(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextVariable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#names DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources | cdktf.IResolvable): any {
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
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._kinds = undefined;
      this._name = undefined;
      this._names = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._operations = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._kinds = value.kinds;
      this._name = value.name;
      this._names = value.names;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._operations = value.operations;
      this._selector.internalValue = value.selector;
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

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
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

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoles = this._clusterRoles;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoles = undefined;
      this._resources.internalValue = undefined;
      this._roles = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoles = value.clusterRoles;
      this._resources.internalValue = value.resources;
      this._roles = value.roles;
      this._subjects.internalValue = value.subjects;
    }
  }

  // cluster_roles - computed: false, optional: true, required: false
  private _clusterRoles?: string[]; 
  public get clusterRoles() {
    return this.getListAttribute('cluster_roles');
  }
  public set clusterRoles(value: string[]) {
    this._clusterRoles = value;
  }
  public resetClusterRoles() {
    this._clusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRolesInput() {
    return this._clusterRoles;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

  // subjects - computed: false, optional: true, required: false
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  public resetSubjects() {
    this._subjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#names DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources | cdktf.IResolvable): any {
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
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._kinds = undefined;
      this._name = undefined;
      this._names = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._operations = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._kinds = value.kinds;
      this._name = value.name;
      this._names = value.names;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._operations = value.operations;
      this._selector.internalValue = value.selector;
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

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
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

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoles = this._clusterRoles;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoles = undefined;
      this._resources.internalValue = undefined;
      this._roles = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoles = value.clusterRoles;
      this._resources.internalValue = value.resources;
      this._roles = value.roles;
      this._subjects.internalValue = value.subjects;
    }
  }

  // cluster_roles - computed: false, optional: true, required: false
  private _clusterRoles?: string[]; 
  public get clusterRoles() {
    return this.getListAttribute('cluster_roles');
  }
  public set clusterRoles(value: string[]) {
    this._clusterRoles = value;
  }
  public resetClusterRoles() {
    this._clusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRolesInput() {
    return this._clusterRoles;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

  // subjects - computed: false, optional: true, required: false
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnySubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  public resetSubjects() {
    this._subjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude {
  /**
  * All allows specifying resources which will be ANDed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#all DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#all}
  */
  readonly all?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll[] | cdktf.IResolvable;
  /**
  * Any allows specifying resources which will be ORed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#any DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#any}
  */
  readonly any?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllToTerraform, false)(struct!.all),
    any: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyToTerraform, false)(struct!.any),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllToHclTerraform, false)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllList",
    },
    any: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyToHclTerraform, false)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._any.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._any.internalValue = value.any;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAll[] | cdktf.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // any - computed: false, optional: true, required: false
  private _any = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeAny[] | cdktf.IResolvable) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#names DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources | cdktf.IResolvable): any {
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
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._kinds = undefined;
      this._name = undefined;
      this._names = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._operations = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._kinds = value.kinds;
      this._name = value.name;
      this._names = value.names;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._operations = value.operations;
      this._selector.internalValue = value.selector;
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

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
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

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoles = this._clusterRoles;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoles = undefined;
      this._resources.internalValue = undefined;
      this._roles = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoles = value.clusterRoles;
      this._resources.internalValue = value.resources;
      this._roles = value.roles;
      this._subjects.internalValue = value.subjects;
    }
  }

  // cluster_roles - computed: false, optional: true, required: false
  private _clusterRoles?: string[]; 
  public get clusterRoles() {
    return this.getListAttribute('cluster_roles');
  }
  public set clusterRoles(value: string[]) {
    this._clusterRoles = value;
  }
  public resetClusterRoles() {
    this._clusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRolesInput() {
    return this._clusterRoles;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

  // subjects - computed: false, optional: true, required: false
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  public resetSubjects() {
    this._subjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#key DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#values DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#names DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources | cdktf.IResolvable): any {
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
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._kinds = undefined;
      this._name = undefined;
      this._names = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._operations = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._kinds = value.kinds;
      this._name = value.name;
      this._names = value.names;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._operations = value.operations;
      this._selector.internalValue = value.selector;
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

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
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

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#name DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoles = this._clusterRoles;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoles = undefined;
      this._resources.internalValue = undefined;
      this._roles = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoles = value.clusterRoles;
      this._resources.internalValue = value.resources;
      this._roles = value.roles;
      this._subjects.internalValue = value.subjects;
    }
  }

  // cluster_roles - computed: false, optional: true, required: false
  private _clusterRoles?: string[]; 
  public get clusterRoles() {
    return this.getListAttribute('cluster_roles');
  }
  public set clusterRoles(value: string[]) {
    this._clusterRoles = value;
  }
  public resetClusterRoles() {
    this._clusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRolesInput() {
    return this._clusterRoles;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

  // subjects - computed: false, optional: true, required: false
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnySubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  public resetSubjects() {
    this._subjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch {
  /**
  * All allows specifying resources which will be ANDed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#all DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#all}
  */
  readonly all?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll[] | cdktf.IResolvable;
  /**
  * Any allows specifying resources which will be ORed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#any DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#any}
  */
  readonly any?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllToTerraform, false)(struct!.all),
    any: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyToTerraform, false)(struct!.any),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllToHclTerraform, false)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllList",
    },
    any: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyToHclTerraform, false)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._any.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._any.internalValue = value.any;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAll[] | cdktf.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // any - computed: false, optional: true, required: false
  private _any = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchAny[] | cdktf.IResolvable) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec {
  /**
  * Conditions defines the conditions used to select the resources which will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#conditions DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#conditions}
  */
  readonly conditions?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions;
  /**
  * Context defines variables and data sources that can be used during rule execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#context DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#context}
  */
  readonly context?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext[] | cdktf.IResolvable;
  /**
  * ExcludeResources defines when cleanuppolicy should not be applied. The exclude criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the name or role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#exclude DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#exclude}
  */
  readonly exclude?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude;
  /**
  * MatchResources defines when cleanuppolicy should be applied. The match criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the user name or role. At least one kind is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#match DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#match}
  */
  readonly match?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch;
  /**
  * The schedule in Cron format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#schedule DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest#schedule}
  */
  readonly schedule: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsToTerraform(struct!.conditions),
    context: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextToTerraform, false)(struct!.context),
    exclude: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeToTerraform(struct!.exclude),
    match: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchToTerraform(struct!.match),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions",
    },
    context: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextToHclTerraform, false)(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextList",
    },
    exclude: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude",
    },
    match: {
      value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._context.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._match.internalValue = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._context.internalValue = value.context;
      this._exclude.internalValue = value.exclude;
      this._match.internalValue = value.match;
      this._schedule = value.schedule;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContextList(this, "context", false);
  public get context() {
    return this._context;
  }
  public putContext(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecContext[] | cdktf.IResolvable) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest k8s_kyverno_io_cleanup_policy_v2alpha1_manifest}
*/
export class DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kyverno_io_cleanup_policy_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKyvernoIoCleanupPolicyV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kyverno_io_cleanup_policy_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_cleanup_policy_v2alpha1_manifest k8s_kyverno_io_cleanup_policy_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kyverno_io_cleanup_policy_v2alpha1_manifest',
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
  private _metadata = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec) {
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
      metadata: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoCleanupPolicyV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
