// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKyvernoIoCleanupPolicyV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#metadata DataK8SKyvernoIoCleanupPolicyV2Manifest#metadata}
  */
  readonly metadata: DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata;
  /**
  * Spec declares policy behaviors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#spec DataK8SKyvernoIoCleanupPolicyV2Manifest#spec}
  */
  readonly spec: DataK8SKyvernoIoCleanupPolicyV2ManifestSpec;
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#labels DataK8SKyvernoIoCleanupPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestMetadataToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestMetadataToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll {
  /**
  * Key is the context entry (using JMESPath) for conditional rule evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key?: { [key: string]: string };
  /**
  * Message is an optional display message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#message DataK8SKyvernoIoCleanupPolicyV2Manifest#message}
  */
  readonly message?: string;
  /**
  * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#value DataK8SKyvernoIoCleanupPolicyV2Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny {
  /**
  * Key is the context entry (using JMESPath) for conditional rule evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key?: { [key: string]: string };
  /**
  * Message is an optional display message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#message DataK8SKyvernoIoCleanupPolicyV2Manifest#message}
  */
  readonly message?: string;
  /**
  * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#value DataK8SKyvernoIoCleanupPolicyV2Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions {
  /**
  * AllConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, all of the conditions need to pass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#all DataK8SKyvernoIoCleanupPolicyV2Manifest#all}
  */
  readonly all?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll[] | cdktf.IResolvable;
  /**
  * AnyConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, at least one of the conditions need to pass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#any DataK8SKyvernoIoCleanupPolicyV2Manifest#any}
  */
  readonly any?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllToTerraform, false)(struct!.all),
    any: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyToTerraform, false)(struct!.any),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllToHclTerraform, false)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllList",
    },
    any: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyToHclTerraform, false)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions | cdktf.IResolvable | undefined) {
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
  private _all = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAll[] | cdktf.IResolvable) {
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
  private _any = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsAny[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData {
  /**
  * Key is a unique identifier for the data value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the data value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#value DataK8SKyvernoIoCleanupPolicyV2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders {
  /**
  * Key is the header key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#value DataK8SKyvernoIoCleanupPolicyV2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders | cdktf.IResolvable | undefined) {
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
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService {
  /**
  * CABundle is a PEM encoded CA bundle which will be used to validate the server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#ca_bundle DataK8SKyvernoIoCleanupPolicyV2Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * Headers is a list of optional HTTP headers to be included in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#headers DataK8SKyvernoIoCleanupPolicyV2Manifest#headers}
  */
  readonly headers?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders[] | cdktf.IResolvable;
  /**
  * URL is the JSON web service URL. A typical form is 'https://{service}.{namespace}:{port}/{path}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#url DataK8SKyvernoIoCleanupPolicyV2Manifest#url}
  */
  readonly url: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    headers: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersToTerraform, false)(struct!.headers),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService | cdktf.IResolvable): any {
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
    headers: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle = undefined;
      this._headers.internalValue = undefined;
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
      this._headers.internalValue = value.headers;
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

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall {
  /**
  * The data object specifies the POST data sent to the server. Only applicable when the method field is set to POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#data DataK8SKyvernoIoCleanupPolicyV2Manifest#data}
  */
  readonly data?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData[] | cdktf.IResolvable;
  /**
  * Default is an optional arbitrary JSON object that the context value is set to, if the apiCall returns error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#default DataK8SKyvernoIoCleanupPolicyV2Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the server. For example a JMESPath of 'items | length(@)' applied to the API server response for the URLPath '/apis/apps/v1/deployments' will return the total count of deployments across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Method is the HTTP request type (GET or POST). Defaults to GET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#method DataK8SKyvernoIoCleanupPolicyV2Manifest#method}
  */
  readonly method?: string;
  /**
  * Service is an API call to a JSON web service. This is used for non-Kubernetes API server calls. It's mutually exclusive with the URLPath field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#service DataK8SKyvernoIoCleanupPolicyV2Manifest#service}
  */
  readonly service?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService;
  /**
  * URLPath is the URL path to be used in the HTTP GET or POST request to the Kubernetes API server (e.g. '/api/v1/namespaces' or '/apis/apps/v1/deployments'). The format required is the same format used by the 'kubectl get --raw' command. See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls for details. It's mutually exclusive with the Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#url_path DataK8SKyvernoIoCleanupPolicyV2Manifest#url_path}
  */
  readonly urlPath?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataToTerraform, false)(struct!.data),
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    jmes_path: cdktf.stringToTerraform(struct!.jmesPath),
    method: cdktf.stringToTerraform(struct!.method),
    service: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceToTerraform(struct!.service),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataList",
    },
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
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._default = undefined;
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
      this._default = value.default;
      this._jmesPath = value.jmesPath;
      this._method = value.method;
      this._service.internalValue = value.service;
      this._urlPath = value.urlPath;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
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
  private _service = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallService) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap {
  /**
  * Name is the ConfigMap name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the ConfigMap namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMapToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMapToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference {
  /**
  * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the server. For example a JMESPath of 'items | length(@)' applied to the API server response for the URLPath '/apis/apps/v1/deployments' will return the total count of deployments across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Name of the global context entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReferenceToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jmes_path: cdktf.stringToTerraform(struct!.jmesPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReferenceToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials {
  /**
  * AllowInsecureRegistry allows insecure access to a registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#allow_insecure_registry DataK8SKyvernoIoCleanupPolicyV2Manifest#allow_insecure_registry}
  */
  readonly allowInsecureRegistry?: boolean | cdktf.IResolvable;
  /**
  * Providers specifies a list of OCI Registry names, whose authentication providers are provided. It can be of one of these values: default,google,azure,amazon,github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#providers DataK8SKyvernoIoCleanupPolicyV2Manifest#providers}
  */
  readonly providers?: string[];
  /**
  * Secrets specifies a list of secrets that are provided for credentials. Secrets must live in the Kyverno namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#secrets DataK8SKyvernoIoCleanupPolicyV2Manifest#secrets}
  */
  readonly secrets?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentialsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentialsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry {
  /**
  * ImageRegistryCredentials provides credentials that will be used for authentication with registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#image_registry_credentials DataK8SKyvernoIoCleanupPolicyV2Manifest#image_registry_credentials}
  */
  readonly imageRegistryCredentials?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials;
  /**
  * JMESPath is an optional JSON Match Expression that can be used to transform the ImageData struct returned as a result of processing the image reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Reference is image reference to a container image in the registry. Example: ghcr.io/kyverno/kyverno:latest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#reference DataK8SKyvernoIoCleanupPolicyV2Manifest#reference}
  */
  readonly reference: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_registry_credentials: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentialsToTerraform(struct!.imageRegistryCredentials),
    jmes_path: cdktf.stringToTerraform(struct!.jmesPath),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_registry_credentials: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentialsToHclTerraform(struct!.imageRegistryCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry | cdktf.IResolvable | undefined) {
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
  private _imageRegistryCredentials = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentialsOutputReference(this, "image_registry_credentials");
  public get imageRegistryCredentials() {
    return this._imageRegistryCredentials;
  }
  public putImageRegistryCredentials(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryImageRegistryCredentials) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable {
  /**
  * Default is an optional arbitrary JSON object that the variable may take if the JMESPath expression evaluates to nil
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#default DataK8SKyvernoIoCleanupPolicyV2Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * JMESPath is an optional JMESPath Expression that can be used to transform the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#jmes_path DataK8SKyvernoIoCleanupPolicyV2Manifest#jmes_path}
  */
  readonly jmesPath?: string;
  /**
  * Value is any arbitrary JSON object representable in YAML or JSON form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#value DataK8SKyvernoIoCleanupPolicyV2Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariableToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariableToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext {
  /**
  * APICall is an HTTP request to the Kubernetes API server, or other JSON web service. The data returned is stored in the context with the name for the context entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#api_call DataK8SKyvernoIoCleanupPolicyV2Manifest#api_call}
  */
  readonly apiCall?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall;
  /**
  * ConfigMap is the ConfigMap reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#config_map DataK8SKyvernoIoCleanupPolicyV2Manifest#config_map}
  */
  readonly configMap?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap;
  /**
  * GlobalContextEntryReference is a reference to a cached global context entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#global_reference DataK8SKyvernoIoCleanupPolicyV2Manifest#global_reference}
  */
  readonly globalReference?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference;
  /**
  * ImageRegistry defines requests to an OCI/Docker V2 registry to fetch image details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#image_registry DataK8SKyvernoIoCleanupPolicyV2Manifest#image_registry}
  */
  readonly imageRegistry?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry;
  /**
  * Name is the variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Variable defines an arbitrary JMESPath context variable that can be defined inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#variable DataK8SKyvernoIoCleanupPolicyV2Manifest#variable}
  */
  readonly variable?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_call: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallToTerraform(struct!.apiCall),
    config_map: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMapToTerraform(struct!.configMap),
    global_reference: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReferenceToTerraform(struct!.globalReference),
    image_registry: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryToTerraform(struct!.imageRegistry),
    name: cdktf.stringToTerraform(struct!.name),
    variable: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariableToTerraform(struct!.variable),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_call: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallToHclTerraform(struct!.apiCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall",
    },
    config_map: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap",
    },
    global_reference: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReferenceToHclTerraform(struct!.globalReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference",
    },
    image_registry: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryToHclTerraform(struct!.imageRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariableToHclTerraform(struct!.variable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext | cdktf.IResolvable | undefined) {
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
  private _apiCall = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCallOutputReference(this, "api_call");
  public get apiCall() {
    return this._apiCall;
  }
  public putApiCall(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextApiCall) {
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
  private _configMap = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextConfigMap) {
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
  private _globalReference = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReferenceOutputReference(this, "global_reference");
  public get globalReference() {
    return this._globalReference;
  }
  public putGlobalReference(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextGlobalReference) {
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
  private _imageRegistry = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistryOutputReference(this, "image_registry");
  public get imageRegistry() {
    return this._imageRegistry;
  }
  public putImageRegistry(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextImageRegistry) {
    this._imageRegistry.internalValue = value;
  }
  public resetImageRegistry() {
    this._imageRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry.internalValue;
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

  // variable - computed: false, optional: true, required: false
  private _variable = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariableOutputReference(this, "variable");
  public get variable() {
    return this._variable;
  }
  public putVariable(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextVariable) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#names DataK8SKyvernoIoCleanupPolicyV2Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector",
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesNamespaceSelector) {
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
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesSelector) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllResources) {
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
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllSubjects[] | cdktf.IResolvable) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#names DataK8SKyvernoIoCleanupPolicyV2Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector",
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesNamespaceSelector) {
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
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesSelector) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyResources) {
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
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnySubjects[] | cdktf.IResolvable) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude {
  /**
  * All allows specifying resources which will be ANDed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#all DataK8SKyvernoIoCleanupPolicyV2Manifest#all}
  */
  readonly all?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll[] | cdktf.IResolvable;
  /**
  * Any allows specifying resources which will be ORed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#any DataK8SKyvernoIoCleanupPolicyV2Manifest#any}
  */
  readonly any?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllToTerraform, false)(struct!.all),
    any: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyToTerraform, false)(struct!.any),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllToHclTerraform, false)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllList",
    },
    any: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyToHclTerraform, false)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude | cdktf.IResolvable | undefined) {
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
  private _all = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAll[] | cdktf.IResolvable) {
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
  private _any = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeAny[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#names DataK8SKyvernoIoCleanupPolicyV2Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector",
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesNamespaceSelector) {
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
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesSelector) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllResources) {
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
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllSubjects[] | cdktf.IResolvable) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#key DataK8SKyvernoIoCleanupPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operator DataK8SKyvernoIoCleanupPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#values DataK8SKyvernoIoCleanupPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_expressions DataK8SKyvernoIoCleanupPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match_labels DataK8SKyvernoIoCleanupPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources {
  /**
  * Annotations is a map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters '*' (matches zero or many characters) and '?' (matches at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#annotations DataK8SKyvernoIoCleanupPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Kinds is a list of resource kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kinds DataK8SKyvernoIoCleanupPolicyV2Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Name is the name of the resource. The name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character). NOTE: 'Name' is being deprecated in favor of 'Names'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Names are the names of the resources. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#names DataK8SKyvernoIoCleanupPolicyV2Manifest#names}
  */
  readonly names?: string[];
  /**
  * NamespaceSelector is a label selector for the resource namespace. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character).Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace_selector DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector;
  /**
  * Namespaces is a list of namespaces names. Each name supports wildcard characters '*' (matches zero or many characters) and '?' (at least one character).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespaces DataK8SKyvernoIoCleanupPolicyV2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Operations can contain values ['CREATE, 'UPDATE', 'CONNECT', 'DELETE'], which are used to match a specific action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#operations DataK8SKyvernoIoCleanupPolicyV2Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Selector is a label selector. Label keys and values in 'matchLabels' support the wildcard characters '*' (matches zero or many characters) and '?' (matches one character). Wildcards allows writing label selectors like ['storage.k8s.io/*': '*']. Note that using ['*' : '*'] matches any key and value but does not match an empty label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#selector DataK8SKyvernoIoCleanupPolicyV2Manifest#selector}
  */
  readonly selector?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    name: cdktf.stringToTerraform(struct!.name),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    namespace_selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    selector: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector",
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesNamespaceSelector) {
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
  private _selector = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesSelector) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects {
  /**
  * APIGroup holds the API group of the referenced subject. Defaults to '' for ServiceAccount subjects. Defaults to 'rbac.authorization.k8s.io' for User and Group subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#api_group DataK8SKyvernoIoCleanupPolicyV2Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind of object being referenced. Values defined by this API group are 'User', 'Group', and 'ServiceAccount'. If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#kind DataK8SKyvernoIoCleanupPolicyV2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the object being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#name DataK8SKyvernoIoCleanupPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referenced object. If the object kind is non-namespace, such as 'User' or 'Group', and this value is not empty the Authorizer should report an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#namespace DataK8SKyvernoIoCleanupPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny {
  /**
  * ClusterRoles is the list of cluster-wide role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#cluster_roles DataK8SKyvernoIoCleanupPolicyV2Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * ResourceDescription contains information about the resource being created or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#resources DataK8SKyvernoIoCleanupPolicyV2Manifest#resources}
  */
  readonly resources?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources;
  /**
  * Roles is the list of namespaced role names for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#roles DataK8SKyvernoIoCleanupPolicyV2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Subjects is the list of subject names like users, user groups, and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#subjects DataK8SKyvernoIoCleanupPolicyV2Manifest#subjects}
  */
  readonly subjects?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    resources: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny | cdktf.IResolvable): any {
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
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyResources) {
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
  private _subjects = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnySubjects[] | cdktf.IResolvable) {
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyOutputReference {
    return new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch {
  /**
  * All allows specifying resources which will be ANDed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#all DataK8SKyvernoIoCleanupPolicyV2Manifest#all}
  */
  readonly all?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll[] | cdktf.IResolvable;
  /**
  * Any allows specifying resources which will be ORed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#any DataK8SKyvernoIoCleanupPolicyV2Manifest#any}
  */
  readonly any?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllToTerraform, false)(struct!.all),
    any: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyToTerraform, false)(struct!.any),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllToHclTerraform, false)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllList",
    },
    any: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyToHclTerraform, false)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch | cdktf.IResolvable | undefined) {
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
  private _all = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAll[] | cdktf.IResolvable) {
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
  private _any = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchAny[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoCleanupPolicyV2ManifestSpec {
  /**
  * Conditions defines the conditions used to select the resources which will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#conditions DataK8SKyvernoIoCleanupPolicyV2Manifest#conditions}
  */
  readonly conditions?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions;
  /**
  * Context defines variables and data sources that can be used during rule execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#context DataK8SKyvernoIoCleanupPolicyV2Manifest#context}
  */
  readonly context?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext[] | cdktf.IResolvable;
  /**
  * ExcludeResources defines when cleanuppolicy should not be applied. The exclude criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the name or role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#exclude DataK8SKyvernoIoCleanupPolicyV2Manifest#exclude}
  */
  readonly exclude?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude;
  /**
  * MatchResources defines when cleanuppolicy should be applied. The match criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the user name or role. At least one kind is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#match DataK8SKyvernoIoCleanupPolicyV2Manifest#match}
  */
  readonly match: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch;
  /**
  * The schedule in Cron format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#schedule DataK8SKyvernoIoCleanupPolicyV2Manifest#schedule}
  */
  readonly schedule: string;
}

export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecToTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsToTerraform(struct!.conditions),
    context: cdktf.listMapper(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextToTerraform, false)(struct!.context),
    exclude: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeToTerraform(struct!.exclude),
    match: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchToTerraform(struct!.match),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SKyvernoIoCleanupPolicyV2ManifestSpecToHclTerraform(struct?: DataK8SKyvernoIoCleanupPolicyV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions",
    },
    context: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextToHclTerraform, false)(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextList",
    },
    exclude: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude",
    },
    match: {
      value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch",
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

export class DataK8SKyvernoIoCleanupPolicyV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoCleanupPolicyV2ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _conditions = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecConditions) {
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
  private _context = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContextList(this, "context", false);
  public get context() {
    return this._context;
  }
  public putContext(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecContext[] | cdktf.IResolvable) {
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
  private _exclude = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpecMatch) {
    this._match.internalValue = value;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest k8s_kyverno_io_cleanup_policy_v2_manifest}
*/
export class DataK8SKyvernoIoCleanupPolicyV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kyverno_io_cleanup_policy_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKyvernoIoCleanupPolicyV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKyvernoIoCleanupPolicyV2Manifest to import
  * @param importFromId The id of the existing DataK8SKyvernoIoCleanupPolicyV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKyvernoIoCleanupPolicyV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kyverno_io_cleanup_policy_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kyverno_io_cleanup_policy_v2_manifest k8s_kyverno_io_cleanup_policy_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKyvernoIoCleanupPolicyV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKyvernoIoCleanupPolicyV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kyverno_io_cleanup_policy_v2_manifest',
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
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SKyvernoIoCleanupPolicyV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKyvernoIoCleanupPolicyV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKyvernoIoCleanupPolicyV2ManifestSpec) {
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
      metadata: dataK8SKyvernoIoCleanupPolicyV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKyvernoIoCleanupPolicyV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestMetadata",
      },
      spec: {
        value: dataK8SKyvernoIoCleanupPolicyV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoCleanupPolicyV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
