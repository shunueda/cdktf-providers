// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#metadata DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata;
  /**
  * The specification of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#spec DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec;
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#annotations DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#labels DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#name DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#namespace DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#key DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#name DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#optional DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom {
  /**
  * Selects a key of a Secret in the resource's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#secret_key_ref DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromSecretKeyRef) {
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
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword {
  /**
  * Secret from which the password should be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#value_from DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#value_from}
  */
  readonly valueFrom: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: false, required: true
  private _valueFrom = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication {
  /**
  * Specify the password for the user. If not set, a new password is generated by the User Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#password DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#password}
  */
  readonly password?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword;
  /**
  * Authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#type DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword",
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

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._type = value.type;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource {
  /**
  * Name of resource for which given ACL rule applies. Can be combined with 'patternType' field to use prefix pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#name DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Describes the pattern used in the resource field. The supported types are 'literal' and 'prefix'. With 'literal' pattern type, the resource field will be used as a definition of a full name. With 'prefix' pattern type, the resource name will be used only as a prefix. Default value is 'literal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#pattern_type DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Resource type. The available resource types are 'topic', 'group', 'cluster', and 'transactionalId'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#type DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResourceToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResourceToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource | cdktf.IResolvable): any {
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
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._patternType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._patternType = value.patternType;
      this._type = value.type;
    }
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

  // pattern_type - computed: false, optional: true, required: false
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  public resetPatternType() {
    this._patternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls {
  /**
  * The host from which the action described in the ACL rule is allowed or denied. If not set, it defaults to '*', allowing or denying the action from any host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#host DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Operation which will be allowed or denied. Supported operations are: Read, Write, Create, Delete, Alter, Describe, ClusterAction, AlterConfigs, DescribeConfigs, IdempotentWrite and All.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#operation DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#operation}
  */
  readonly operation?: string;
  /**
  * List of operations to allow or deny. Supported operations are: Read, Write, Create, Delete, Alter, Describe, ClusterAction, AlterConfigs, DescribeConfigs, IdempotentWrite and All. Only certain operations work with the specified resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#operations DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Indicates the resource for which given ACL rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#resource DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#resource}
  */
  readonly resource: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource;
  /**
  * The type of the rule. Currently the only supported type is 'allow'. ACL rules with type 'allow' are used to allow user to execute the specified operations. Default value is 'allow'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#type DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    operation: cdktf.stringToTerraform(struct!.operation),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    resource: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource",
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

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._operation = undefined;
      this._operations = undefined;
      this._resource.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._operation = value.operation;
      this._operations = value.operations;
      this._resource.internalValue = value.resource;
      this._type = value.type;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

  // resource - computed: false, optional: false, required: true
  private _resource = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
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

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization {
  /**
  * List of ACL rules which should be applied to this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#acls DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#acls}
  */
  readonly acls: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls[] | cdktf.IResolvable;
  /**
  * Authorization type. Currently the only supported type is 'simple'. 'simple' authorization type uses the Kafka Admin API for managing the ACL rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#type DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acls: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsToTerraform, false)(struct!.acls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acls: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsToHclTerraform, false)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsList",
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

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acls.internalValue = value.acls;
      this._type = value.type;
    }
  }

  // acls - computed: false, optional: false, required: true
  private _acls = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas {
  /**
  * A quota on the maximum bytes per-second that each client group can fetch from a broker before the clients in the group are throttled. Defined on a per-broker basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#consumer_byte_rate DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#consumer_byte_rate}
  */
  readonly consumerByteRate?: number;
  /**
  * A quota on the rate at which mutations are accepted for the create topics request, the create partitions request and the delete topics request. The rate is accumulated by the number of partitions created or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#controller_mutation_rate DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#controller_mutation_rate}
  */
  readonly controllerMutationRate?: number;
  /**
  * A quota on the maximum bytes per-second that each client group can publish to a broker before the clients in the group are throttled. Defined on a per-broker basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#producer_byte_rate DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#producer_byte_rate}
  */
  readonly producerByteRate?: number;
  /**
  * A quota on the maximum CPU utilization of each client group as a percentage of network and I/O threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#request_percentage DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#request_percentage}
  */
  readonly requestPercentage?: number;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotasToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_byte_rate: cdktf.numberToTerraform(struct!.consumerByteRate),
    controller_mutation_rate: cdktf.numberToTerraform(struct!.controllerMutationRate),
    producer_byte_rate: cdktf.numberToTerraform(struct!.producerByteRate),
    request_percentage: cdktf.numberToTerraform(struct!.requestPercentage),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotasToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_byte_rate: {
      value: cdktf.numberToHclTerraform(struct!.consumerByteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    controller_mutation_rate: {
      value: cdktf.numberToHclTerraform(struct!.controllerMutationRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_byte_rate: {
      value: cdktf.numberToHclTerraform(struct!.producerByteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_percentage: {
      value: cdktf.numberToHclTerraform(struct!.requestPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerByteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerByteRate = this._consumerByteRate;
    }
    if (this._controllerMutationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerMutationRate = this._controllerMutationRate;
    }
    if (this._producerByteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerByteRate = this._producerByteRate;
    }
    if (this._requestPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPercentage = this._requestPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerByteRate = undefined;
      this._controllerMutationRate = undefined;
      this._producerByteRate = undefined;
      this._requestPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerByteRate = value.consumerByteRate;
      this._controllerMutationRate = value.controllerMutationRate;
      this._producerByteRate = value.producerByteRate;
      this._requestPercentage = value.requestPercentage;
    }
  }

  // consumer_byte_rate - computed: false, optional: true, required: false
  private _consumerByteRate?: number; 
  public get consumerByteRate() {
    return this.getNumberAttribute('consumer_byte_rate');
  }
  public set consumerByteRate(value: number) {
    this._consumerByteRate = value;
  }
  public resetConsumerByteRate() {
    this._consumerByteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerByteRateInput() {
    return this._consumerByteRate;
  }

  // controller_mutation_rate - computed: false, optional: true, required: false
  private _controllerMutationRate?: number; 
  public get controllerMutationRate() {
    return this.getNumberAttribute('controller_mutation_rate');
  }
  public set controllerMutationRate(value: number) {
    this._controllerMutationRate = value;
  }
  public resetControllerMutationRate() {
    this._controllerMutationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerMutationRateInput() {
    return this._controllerMutationRate;
  }

  // producer_byte_rate - computed: false, optional: true, required: false
  private _producerByteRate?: number; 
  public get producerByteRate() {
    return this.getNumberAttribute('producer_byte_rate');
  }
  public set producerByteRate(value: number) {
    this._producerByteRate = value;
  }
  public resetProducerByteRate() {
    this._producerByteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerByteRateInput() {
    return this._producerByteRate;
  }

  // request_percentage - computed: false, optional: true, required: false
  private _requestPercentage?: number; 
  public get requestPercentage() {
    return this.getNumberAttribute('request_percentage');
  }
  public set requestPercentage(value: number) {
    this._requestPercentage = value;
  }
  public resetRequestPercentage() {
    this._requestPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPercentageInput() {
    return this._requestPercentage;
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#annotations DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#labels DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret {
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#metadata DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate {
  /**
  * Template for KafkaUser resources. The template allows users to specify how the 'Secret' with password or TLS certificates is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#secret DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretToTerraform(struct!.secret),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret.internalValue = value.secret;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec {
  /**
  * Authentication mechanism enabled for this Kafka user. The supported authentication mechanisms are 'scram-sha-512', 'tls', and 'tls-external'. * 'scram-sha-512' generates a secret with SASL SCRAM-SHA-512 credentials. * 'tls' generates a secret with user certificate for mutual TLS authentication. * 'tls-external' does not generate a user certificate. But prepares the user for using mutual TLS authentication using a user certificate generated outside the User Operator. ACLs and quotas set for this user are configured in the 'CN=<username>' format. Authentication is optional. If authentication is not configured, no credentials are generated. ACLs and quotas set for the user are configured in the '<username>' format suitable for SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#authentication DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#authentication}
  */
  readonly authentication?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication;
  /**
  * Authorization rules for this Kafka user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#authorization DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#authorization}
  */
  readonly authorization?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization;
  /**
  * Quotas on requests to control the broker resources used by clients. Network bandwidth and request rate quotas can be enforced.Kafka documentation for Kafka User quotas can be found at http://kafka.apache.org/documentation/#design_quotas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#quotas DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#quotas}
  */
  readonly quotas?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas;
  /**
  * Template to specify how Kafka User 'Secrets' are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#template DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest#template}
  */
  readonly template?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate;
}

export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecToTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationToTerraform(struct!.authentication),
    authorization: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationToTerraform(struct!.authorization),
    quotas: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotasToTerraform(struct!.quotas),
    template: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication",
    },
    authorization: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization",
    },
    quotas: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas",
    },
    template: {
      value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._quotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotas = this._quotas?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._quotas.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._authorization.internalValue = value.authorization;
      this._quotas.internalValue = value.quotas;
      this._template.internalValue = value.template;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest k8s_kafka_strimzi_io_kafka_user_v1beta1_manifest}
*/
export class DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kafka_strimzi_io_kafka_user_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKafkaStrimziIoKafkaUserV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kafka_strimzi_io_kafka_user_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kafka_strimzi_io_kafka_user_v1beta1_manifest k8s_kafka_strimzi_io_kafka_user_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kafka_strimzi_io_kafka_user_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec) {
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
      metadata: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaUserV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
