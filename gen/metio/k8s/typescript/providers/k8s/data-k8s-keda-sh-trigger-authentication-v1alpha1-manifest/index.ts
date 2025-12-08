// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#metadata DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata;
  /**
  * TriggerAuthenticationSpec defines the various ways to authenticate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#spec DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec;
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#annotations DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#labels DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#namespace DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secret_key_ref DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom | cdktf.IResolvable | undefined) {
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#value_from DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secret_key_ref DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom | cdktf.IResolvable | undefined) {
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#value_from DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRefToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secret_key_ref DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom | cdktf.IResolvable | undefined) {
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#value_from DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#access_key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#access_key}
  */
  readonly accessKey: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#access_secret_key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#access_secret_key}
  */
  readonly accessSecretKey: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#access_token DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#access_token}
  */
  readonly accessToken?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyToTerraform(struct!.accessKey),
    access_secret_key: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyToTerraform(struct!.accessSecretKey),
    access_token: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenToTerraform(struct!.accessToken),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyToHclTerraform(struct!.accessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey",
    },
    access_secret_key: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyToHclTerraform(struct!.accessSecretKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey",
    },
    access_token: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey?.internalValue;
    }
    if (this._accessSecretKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessSecretKey = this._accessSecretKey?.internalValue;
    }
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey.internalValue = undefined;
      this._accessSecretKey.internalValue = undefined;
      this._accessToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey.internalValue = value.accessKey;
      this._accessSecretKey.internalValue = value.accessSecretKey;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKeyOutputReference(this, "access_key");
  public get accessKey() {
    return this._accessKey;
  }
  public putAccessKey(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessKey) {
    this._accessKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey.internalValue;
  }

  // access_secret_key - computed: false, optional: false, required: true
  private _accessSecretKey = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKeyOutputReference(this, "access_secret_key");
  public get accessSecretKey() {
    return this._accessSecretKey;
  }
  public putAccessSecretKey(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessSecretKey) {
    this._accessSecretKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSecretKeyInput() {
    return this._accessSecretKey.internalValue;
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsAccessToken) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity {
  /**
  * Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_authority_host DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_authority_host}
  */
  readonly identityAuthorityHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_id}
  */
  readonly identityId?: string;
  /**
  * IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_owner DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_owner}
  */
  readonly identityOwner?: string;
  /**
  * Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_tenant_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_tenant_id}
  */
  readonly identityTenantId?: string;
  /**
  * PodIdentityProvider contains the list of providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#provider DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#provider}
  */
  readonly provider: string;
  /**
  * RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#role_arn DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentityToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_authority_host: cdktf.stringToTerraform(struct!.identityAuthorityHost),
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    identity_owner: cdktf.stringToTerraform(struct!.identityOwner),
    identity_tenant_id: cdktf.stringToTerraform(struct!.identityTenantId),
    provider: cdktf.stringToTerraform(struct!.provider),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentityToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_authority_host: {
      value: cdktf.stringToHclTerraform(struct!.identityAuthorityHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_owner: {
      value: cdktf.stringToHclTerraform(struct!.identityOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.identityTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityAuthorityHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAuthorityHost = this._identityAuthorityHost;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._identityOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityOwner = this._identityOwner;
    }
    if (this._identityTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityTenantId = this._identityTenantId;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = undefined;
      this._identityId = undefined;
      this._identityOwner = undefined;
      this._identityTenantId = undefined;
      this._provider = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = value.identityAuthorityHost;
      this._identityId = value.identityId;
      this._identityOwner = value.identityOwner;
      this._identityTenantId = value.identityTenantId;
      this._provider = value.provider;
      this._roleArn = value.roleArn;
    }
  }

  // identity_authority_host - computed: false, optional: true, required: false
  private _identityAuthorityHost?: string; 
  public get identityAuthorityHost() {
    return this.getStringAttribute('identity_authority_host');
  }
  public set identityAuthorityHost(value: string) {
    this._identityAuthorityHost = value;
  }
  public resetIdentityAuthorityHost() {
    this._identityAuthorityHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAuthorityHostInput() {
    return this._identityAuthorityHost;
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // identity_owner - computed: false, optional: true, required: false
  private _identityOwner?: string; 
  public get identityOwner() {
    return this.getStringAttribute('identity_owner');
  }
  public set identityOwner(value: string) {
    this._identityOwner = value;
  }
  public resetIdentityOwner() {
    this._identityOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityOwnerInput() {
    return this._identityOwner;
  }

  // identity_tenant_id - computed: false, optional: true, required: false
  private _identityTenantId?: string; 
  public get identityTenantId() {
    return this.getStringAttribute('identity_tenant_id');
  }
  public set identityTenantId(value: string) {
    this._identityTenantId = value;
  }
  public resetIdentityTenantId() {
    this._identityTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTenantIdInput() {
    return this._identityTenantId;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#parameter DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#parameter}
  */
  readonly parameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#version_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#version_id}
  */
  readonly versionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#version_stage DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#version_stage}
  */
  readonly versionStage?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameter: cdktf.stringToTerraform(struct!.parameter),
    version_id: cdktf.stringToTerraform(struct!.versionId),
    version_stage: cdktf.stringToTerraform(struct!.versionStage),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets | cdktf.IResolvable): any {
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
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktf.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameter = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameter = value.parameter;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
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

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsOutputReference {
    return new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#credentials DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials;
  /**
  * AuthPodIdentity allows users to select the platform native identity mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#pod_identity DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#pod_identity}
  */
  readonly podIdentity?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#region DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secrets DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secrets}
  */
  readonly secrets: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets[] | cdktf.IResolvable;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsToTerraform(struct!.credentials),
    pod_identity: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentityToTerraform(struct!.podIdentity),
    region: cdktf.stringToTerraform(struct!.region),
    secrets: cdktf.listMapper(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials",
    },
    pod_identity: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentityToHclTerraform(struct!.podIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._podIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentity = this._podIdentity?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._podIdentity.internalValue = undefined;
      this._region = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._podIdentity.internalValue = value.podIdentity;
      this._region = value.region;
      this._secrets.internalValue = value.secrets;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // pod_identity - computed: false, optional: true, required: false
  private _podIdentity = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentityOutputReference(this, "pod_identity");
  public get podIdentity() {
    return this._podIdentity;
  }
  public putPodIdentity(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerPodIdentity) {
    this._podIdentity.internalValue = value;
  }
  public resetPodIdentity() {
    this._podIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityInput() {
    return this._podIdentity.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secrets - computed: false, optional: false, required: true
  private _secrets = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#active_directory_endpoint DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#active_directory_endpoint}
  */
  readonly activeDirectoryEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key_vault_resource_url DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key_vault_resource_url}
  */
  readonly keyVaultResourceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#type DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloudToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_endpoint: cdktf.stringToTerraform(struct!.activeDirectoryEndpoint),
    key_vault_resource_url: cdktf.stringToTerraform(struct!.keyVaultResourceUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloudToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.activeDirectoryEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_resource_url: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultResourceUrl),
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

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryEndpoint = this._activeDirectoryEndpoint;
    }
    if (this._keyVaultResourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultResourceUrl = this._keyVaultResourceUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDirectoryEndpoint = undefined;
      this._keyVaultResourceUrl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDirectoryEndpoint = value.activeDirectoryEndpoint;
      this._keyVaultResourceUrl = value.keyVaultResourceUrl;
      this._type = value.type;
    }
  }

  // active_directory_endpoint - computed: false, optional: true, required: false
  private _activeDirectoryEndpoint?: string; 
  public get activeDirectoryEndpoint() {
    return this.getStringAttribute('active_directory_endpoint');
  }
  public set activeDirectoryEndpoint(value: string) {
    this._activeDirectoryEndpoint = value;
  }
  public resetActiveDirectoryEndpoint() {
    this._activeDirectoryEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryEndpointInput() {
    return this._activeDirectoryEndpoint;
  }

  // key_vault_resource_url - computed: false, optional: true, required: false
  private _keyVaultResourceUrl?: string; 
  public get keyVaultResourceUrl() {
    return this.getStringAttribute('key_vault_resource_url');
  }
  public set keyVaultResourceUrl(value: string) {
    this._keyVaultResourceUrl = value;
  }
  public resetKeyVaultResourceUrl() {
    this._keyVaultResourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultResourceUrlInput() {
    return this._keyVaultResourceUrl;
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
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRefToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secret_key_ref DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom | cdktf.IResolvable | undefined) {
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#value_from DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#client_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#client_secret DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#client_secret}
  */
  readonly clientSecret: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#tenant_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#tenant_id}
  */
  readonly tenantId: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._tenantId = value.tenantId;
    }
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity {
  /**
  * Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_authority_host DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_authority_host}
  */
  readonly identityAuthorityHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_id}
  */
  readonly identityId?: string;
  /**
  * IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_owner DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_owner}
  */
  readonly identityOwner?: string;
  /**
  * Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_tenant_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_tenant_id}
  */
  readonly identityTenantId?: string;
  /**
  * PodIdentityProvider contains the list of providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#provider DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#provider}
  */
  readonly provider: string;
  /**
  * RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#role_arn DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentityToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_authority_host: cdktf.stringToTerraform(struct!.identityAuthorityHost),
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    identity_owner: cdktf.stringToTerraform(struct!.identityOwner),
    identity_tenant_id: cdktf.stringToTerraform(struct!.identityTenantId),
    provider: cdktf.stringToTerraform(struct!.provider),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentityToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_authority_host: {
      value: cdktf.stringToHclTerraform(struct!.identityAuthorityHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_owner: {
      value: cdktf.stringToHclTerraform(struct!.identityOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.identityTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityAuthorityHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAuthorityHost = this._identityAuthorityHost;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._identityOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityOwner = this._identityOwner;
    }
    if (this._identityTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityTenantId = this._identityTenantId;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = undefined;
      this._identityId = undefined;
      this._identityOwner = undefined;
      this._identityTenantId = undefined;
      this._provider = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = value.identityAuthorityHost;
      this._identityId = value.identityId;
      this._identityOwner = value.identityOwner;
      this._identityTenantId = value.identityTenantId;
      this._provider = value.provider;
      this._roleArn = value.roleArn;
    }
  }

  // identity_authority_host - computed: false, optional: true, required: false
  private _identityAuthorityHost?: string; 
  public get identityAuthorityHost() {
    return this.getStringAttribute('identity_authority_host');
  }
  public set identityAuthorityHost(value: string) {
    this._identityAuthorityHost = value;
  }
  public resetIdentityAuthorityHost() {
    this._identityAuthorityHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAuthorityHostInput() {
    return this._identityAuthorityHost;
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // identity_owner - computed: false, optional: true, required: false
  private _identityOwner?: string; 
  public get identityOwner() {
    return this.getStringAttribute('identity_owner');
  }
  public set identityOwner(value: string) {
    this._identityOwner = value;
  }
  public resetIdentityOwner() {
    this._identityOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityOwnerInput() {
    return this._identityOwner;
  }

  // identity_tenant_id - computed: false, optional: true, required: false
  private _identityTenantId?: string; 
  public get identityTenantId() {
    return this.getStringAttribute('identity_tenant_id');
  }
  public set identityTenantId(value: string) {
    this._identityTenantId = value;
  }
  public resetIdentityTenantId() {
    this._identityTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTenantIdInput() {
    return this._identityTenantId;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#parameter DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#parameter}
  */
  readonly parameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#version DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameter: cdktf.stringToTerraform(struct!.parameter),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets | cdktf.IResolvable): any {
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
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameter = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameter = value.parameter;
      this._version = value.version;
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

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsOutputReference {
    return new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#cloud DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#cloud}
  */
  readonly cloud?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#credentials DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials;
  /**
  * AuthPodIdentity allows users to select the platform native identity mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#pod_identity DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#pod_identity}
  */
  readonly podIdentity?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secrets DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secrets}
  */
  readonly secrets: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#vault_uri DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#vault_uri}
  */
  readonly vaultUri: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloudToTerraform(struct!.cloud),
    credentials: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsToTerraform(struct!.credentials),
    pod_identity: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentityToTerraform(struct!.podIdentity),
    secrets: cdktf.listMapper(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsToTerraform, false)(struct!.secrets),
    vault_uri: cdktf.stringToTerraform(struct!.vaultUri),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloudToHclTerraform(struct!.cloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud",
    },
    credentials: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials",
    },
    pod_identity: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentityToHclTerraform(struct!.podIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsList",
    },
    vault_uri: {
      value: cdktf.stringToHclTerraform(struct!.vaultUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud?.internalValue;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._podIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentity = this._podIdentity?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._vaultUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultUri = this._vaultUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloud.internalValue = undefined;
      this._credentials.internalValue = undefined;
      this._podIdentity.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._vaultUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloud.internalValue = value.cloud;
      this._credentials.internalValue = value.credentials;
      this._podIdentity.internalValue = value.podIdentity;
      this._secrets.internalValue = value.secrets;
      this._vaultUri = value.vaultUri;
    }
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // pod_identity - computed: false, optional: true, required: false
  private _podIdentity = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentityOutputReference(this, "pod_identity");
  public get podIdentity() {
    return this._podIdentity;
  }
  public putPodIdentity(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultPodIdentity) {
    this._podIdentity.internalValue = value;
  }
  public resetPodIdentity() {
    this._podIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityInput() {
    return this._podIdentity.internalValue;
  }

  // secrets - computed: false, optional: false, required: true
  private _secrets = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // vault_uri - computed: false, optional: false, required: true
  private _vaultUri?: string; 
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
  public set vaultUri(value: string) {
    this._vaultUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUriInput() {
    return this._vaultUri;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#parameter DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#parameter}
  */
  readonly parameter: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    parameter: cdktf.stringToTerraform(struct!.parameter),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef | cdktf.IResolvable): any {
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
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef | cdktf.IResolvable | undefined {
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
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._parameter = undefined;
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
      this._parameter = value.parameter;
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

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefOutputReference {
    return new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#container_name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#parameter DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#parameter}
  */
  readonly parameter: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    name: cdktf.stringToTerraform(struct!.name),
    parameter: cdktf.stringToTerraform(struct!.parameter),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._name = undefined;
      this._parameter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._name = value.name;
      this._parameter = value.parameter;
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

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvOutputReference {
    return new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRefToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secret_key_ref DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom | cdktf.IResolvable | undefined) {
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#value_from DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#client_secret DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#client_secret}
  */
  readonly clientSecret: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_secret: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretToTerraform(struct!.clientSecret),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_secret: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientSecret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientSecret.internalValue = value.clientSecret;
    }
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity {
  /**
  * Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_authority_host DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_authority_host}
  */
  readonly identityAuthorityHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_id}
  */
  readonly identityId?: string;
  /**
  * IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_owner DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_owner}
  */
  readonly identityOwner?: string;
  /**
  * Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_tenant_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_tenant_id}
  */
  readonly identityTenantId?: string;
  /**
  * PodIdentityProvider contains the list of providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#provider DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#provider}
  */
  readonly provider: string;
  /**
  * RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#role_arn DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentityToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_authority_host: cdktf.stringToTerraform(struct!.identityAuthorityHost),
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    identity_owner: cdktf.stringToTerraform(struct!.identityOwner),
    identity_tenant_id: cdktf.stringToTerraform(struct!.identityTenantId),
    provider: cdktf.stringToTerraform(struct!.provider),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentityToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_authority_host: {
      value: cdktf.stringToHclTerraform(struct!.identityAuthorityHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_owner: {
      value: cdktf.stringToHclTerraform(struct!.identityOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.identityTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityAuthorityHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAuthorityHost = this._identityAuthorityHost;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._identityOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityOwner = this._identityOwner;
    }
    if (this._identityTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityTenantId = this._identityTenantId;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = undefined;
      this._identityId = undefined;
      this._identityOwner = undefined;
      this._identityTenantId = undefined;
      this._provider = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = value.identityAuthorityHost;
      this._identityId = value.identityId;
      this._identityOwner = value.identityOwner;
      this._identityTenantId = value.identityTenantId;
      this._provider = value.provider;
      this._roleArn = value.roleArn;
    }
  }

  // identity_authority_host - computed: false, optional: true, required: false
  private _identityAuthorityHost?: string; 
  public get identityAuthorityHost() {
    return this.getStringAttribute('identity_authority_host');
  }
  public set identityAuthorityHost(value: string) {
    this._identityAuthorityHost = value;
  }
  public resetIdentityAuthorityHost() {
    this._identityAuthorityHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAuthorityHostInput() {
    return this._identityAuthorityHost;
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // identity_owner - computed: false, optional: true, required: false
  private _identityOwner?: string; 
  public get identityOwner() {
    return this.getStringAttribute('identity_owner');
  }
  public set identityOwner(value: string) {
    this._identityOwner = value;
  }
  public resetIdentityOwner() {
    this._identityOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityOwnerInput() {
    return this._identityOwner;
  }

  // identity_tenant_id - computed: false, optional: true, required: false
  private _identityTenantId?: string; 
  public get identityTenantId() {
    return this.getStringAttribute('identity_tenant_id');
  }
  public set identityTenantId(value: string) {
    this._identityTenantId = value;
  }
  public resetIdentityTenantId() {
    this._identityTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTenantIdInput() {
    return this._identityTenantId;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#parameter DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#parameter}
  */
  readonly parameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#version DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    parameter: cdktf.stringToTerraform(struct!.parameter),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._parameter = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._parameter = value.parameter;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsOutputReference {
    return new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#credentials DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials;
  /**
  * AuthPodIdentity allows users to select the platform native identity mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#pod_identity DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#pod_identity}
  */
  readonly podIdentity?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secrets DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secrets}
  */
  readonly secrets: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets[] | cdktf.IResolvable;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsToTerraform(struct!.credentials),
    pod_identity: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentityToTerraform(struct!.podIdentity),
    secrets: cdktf.listMapper(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials",
    },
    pod_identity: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentityToHclTerraform(struct!.podIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._podIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentity = this._podIdentity?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._podIdentity.internalValue = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._podIdentity.internalValue = value.podIdentity;
      this._secrets.internalValue = value.secrets;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // pod_identity - computed: false, optional: true, required: false
  private _podIdentity = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentityOutputReference(this, "pod_identity");
  public get podIdentity() {
    return this._podIdentity;
  }
  public putPodIdentity(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerPodIdentity) {
    this._podIdentity.internalValue = value;
  }
  public resetPodIdentity() {
    this._podIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityInput() {
    return this._podIdentity.internalValue;
  }

  // secrets - computed: false, optional: false, required: true
  private _secrets = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#service_account DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#token DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#token}
  */
  readonly token?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredentialToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredentialToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccount = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccount = value.serviceAccount;
      this._token = value.token;
    }
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#alt_names DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#alt_names}
  */
  readonly altNames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#common_name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#format DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#ip_sans DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#ip_sans}
  */
  readonly ipSans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#other_sans DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#other_sans}
  */
  readonly otherSans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#ttl DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#uri_sans DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#uri_sans}
  */
  readonly uriSans?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiDataToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alt_names: cdktf.stringToTerraform(struct!.altNames),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    format: cdktf.stringToTerraform(struct!.format),
    ip_sans: cdktf.stringToTerraform(struct!.ipSans),
    other_sans: cdktf.stringToTerraform(struct!.otherSans),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    uri_sans: cdktf.stringToTerraform(struct!.uriSans),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiDataToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alt_names: {
      value: cdktf.stringToHclTerraform(struct!.altNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sans: {
      value: cdktf.stringToHclTerraform(struct!.ipSans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_sans: {
      value: cdktf.stringToHclTerraform(struct!.otherSans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_sans: {
      value: cdktf.stringToHclTerraform(struct!.uriSans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._altNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.altNames = this._altNames;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._ipSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSans = this._ipSans;
    }
    if (this._otherSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSans = this._otherSans;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uriSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriSans = this._uriSans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._altNames = undefined;
      this._commonName = undefined;
      this._format = undefined;
      this._ipSans = undefined;
      this._otherSans = undefined;
      this._ttl = undefined;
      this._uriSans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._altNames = value.altNames;
      this._commonName = value.commonName;
      this._format = value.format;
      this._ipSans = value.ipSans;
      this._otherSans = value.otherSans;
      this._ttl = value.ttl;
      this._uriSans = value.uriSans;
    }
  }

  // alt_names - computed: false, optional: true, required: false
  private _altNames?: string; 
  public get altNames() {
    return this.getStringAttribute('alt_names');
  }
  public set altNames(value: string) {
    this._altNames = value;
  }
  public resetAltNames() {
    this._altNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // ip_sans - computed: false, optional: true, required: false
  private _ipSans?: string; 
  public get ipSans() {
    return this.getStringAttribute('ip_sans');
  }
  public set ipSans(value: string) {
    this._ipSans = value;
  }
  public resetIpSans() {
    this._ipSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSansInput() {
    return this._ipSans;
  }

  // other_sans - computed: false, optional: true, required: false
  private _otherSans?: string; 
  public get otherSans() {
    return this.getStringAttribute('other_sans');
  }
  public set otherSans(value: string) {
    this._otherSans = value;
  }
  public resetOtherSans() {
    this._otherSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSansInput() {
    return this._otherSans;
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

  // uri_sans - computed: false, optional: true, required: false
  private _uriSans?: string; 
  public get uriSans() {
    return this.getStringAttribute('uri_sans');
  }
  public set uriSans(value: string) {
    this._uriSans = value;
  }
  public resetUriSans() {
    this._uriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSansInput() {
    return this._uriSans;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#parameter DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#parameter}
  */
  readonly parameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#path DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#pki_data DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#pki_data}
  */
  readonly pkiData?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData;
  /**
  * VaultSecretType defines the type of vault secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#type DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    parameter: cdktf.stringToTerraform(struct!.parameter),
    path: cdktf.stringToTerraform(struct!.path),
    pki_data: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiDataToTerraform(struct!.pkiData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets | cdktf.IResolvable): any {
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
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
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
    pki_data: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiDataToHclTerraform(struct!.pkiData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData",
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

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pkiData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiData = this._pkiData?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._parameter = undefined;
      this._path = undefined;
      this._pkiData.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._parameter = value.parameter;
      this._path = value.path;
      this._pkiData.internalValue = value.pkiData;
      this._type = value.type;
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

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
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

  // pki_data - computed: false, optional: true, required: false
  private _pkiData = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiDataOutputReference(this, "pki_data");
  public get pkiData() {
    return this._pkiData;
  }
  public putPkiData(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsPkiData) {
    this._pkiData.internalValue = value;
  }
  public resetPkiData() {
    this._pkiData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiDataInput() {
    return this._pkiData.internalValue;
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

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsOutputReference {
    return new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#address DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * VaultAuthentication contains the list of Hashicorp Vault authentication methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#authentication DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#authentication}
  */
  readonly authentication: string;
  /**
  * Credential defines the Hashicorp Vault credentials depending on the authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#credential DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#credential}
  */
  readonly credential?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#mount DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#mount}
  */
  readonly mount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#namespace DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#role DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secrets DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secrets}
  */
  readonly secrets: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets[] | cdktf.IResolvable;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    authentication: cdktf.stringToTerraform(struct!.authentication),
    credential: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredentialToTerraform(struct!.credential),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
    secrets: cdktf.listMapper(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._authentication = undefined;
      this._credential.internalValue = undefined;
      this._mount = undefined;
      this._namespace = undefined;
      this._role = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._authentication = value.authentication;
      this._credential.internalValue = value.credential;
      this._mount = value.mount;
      this._namespace = value.namespace;
      this._role = value.role;
      this._secrets.internalValue = value.secrets;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // credential - computed: false, optional: true, required: false
  private _credential = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultCredential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // mount - computed: false, optional: true, required: false
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // secrets - computed: false, optional: false, required: true
  private _secrets = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity {
  /**
  * Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_authority_host DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_authority_host}
  */
  readonly identityAuthorityHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_id}
  */
  readonly identityId?: string;
  /**
  * IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_owner DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_owner}
  */
  readonly identityOwner?: string;
  /**
  * Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#identity_tenant_id DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#identity_tenant_id}
  */
  readonly identityTenantId?: string;
  /**
  * PodIdentityProvider contains the list of providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#provider DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#provider}
  */
  readonly provider: string;
  /**
  * RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#role_arn DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentityToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_authority_host: cdktf.stringToTerraform(struct!.identityAuthorityHost),
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    identity_owner: cdktf.stringToTerraform(struct!.identityOwner),
    identity_tenant_id: cdktf.stringToTerraform(struct!.identityTenantId),
    provider: cdktf.stringToTerraform(struct!.provider),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentityToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_authority_host: {
      value: cdktf.stringToHclTerraform(struct!.identityAuthorityHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_owner: {
      value: cdktf.stringToHclTerraform(struct!.identityOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.identityTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityAuthorityHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAuthorityHost = this._identityAuthorityHost;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._identityOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityOwner = this._identityOwner;
    }
    if (this._identityTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityTenantId = this._identityTenantId;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = undefined;
      this._identityId = undefined;
      this._identityOwner = undefined;
      this._identityTenantId = undefined;
      this._provider = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityAuthorityHost = value.identityAuthorityHost;
      this._identityId = value.identityId;
      this._identityOwner = value.identityOwner;
      this._identityTenantId = value.identityTenantId;
      this._provider = value.provider;
      this._roleArn = value.roleArn;
    }
  }

  // identity_authority_host - computed: false, optional: true, required: false
  private _identityAuthorityHost?: string; 
  public get identityAuthorityHost() {
    return this.getStringAttribute('identity_authority_host');
  }
  public set identityAuthorityHost(value: string) {
    this._identityAuthorityHost = value;
  }
  public resetIdentityAuthorityHost() {
    this._identityAuthorityHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAuthorityHostInput() {
    return this._identityAuthorityHost;
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // identity_owner - computed: false, optional: true, required: false
  private _identityOwner?: string; 
  public get identityOwner() {
    return this.getStringAttribute('identity_owner');
  }
  public set identityOwner(value: string) {
    this._identityOwner = value;
  }
  public resetIdentityOwner() {
    this._identityOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityOwnerInput() {
    return this._identityOwner;
  }

  // identity_tenant_id - computed: false, optional: true, required: false
  private _identityTenantId?: string; 
  public get identityTenantId() {
    return this.getStringAttribute('identity_tenant_id');
  }
  public set identityTenantId(value: string) {
    this._identityTenantId = value;
  }
  public resetIdentityTenantId() {
    this._identityTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTenantIdInput() {
    return this._identityTenantId;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#key DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#name DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#parameter DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#parameter}
  */
  readonly parameter: string;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    parameter: cdktf.stringToTerraform(struct!.parameter),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef | cdktf.IResolvable): any {
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
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef | cdktf.IResolvable | undefined {
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
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._parameter = undefined;
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
      this._parameter = value.parameter;
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

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefOutputReference {
    return new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec {
  /**
  * AwsSecretManager is used to authenticate using AwsSecretManager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#aws_secret_manager DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#aws_secret_manager}
  */
  readonly awsSecretManager?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager;
  /**
  * AzureKeyVault is used to authenticate using Azure Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#azure_key_vault DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#azure_key_vault}
  */
  readonly azureKeyVault?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#config_map_target_ref DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#config_map_target_ref}
  */
  readonly configMapTargetRef?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#env DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#gcp_secret_manager DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#gcp_secret_manager}
  */
  readonly gcpSecretManager?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager;
  /**
  * HashiCorpVault is used to authenticate using Hashicorp Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#hashi_corp_vault DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#hashi_corp_vault}
  */
  readonly hashiCorpVault?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault;
  /**
  * AuthPodIdentity allows users to select the platform native identity mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#pod_identity DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#pod_identity}
  */
  readonly podIdentity?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#secret_target_ref DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest#secret_target_ref}
  */
  readonly secretTargetRef?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef[] | cdktf.IResolvable;
}

export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_secret_manager: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerToTerraform(struct!.awsSecretManager),
    azure_key_vault: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultToTerraform(struct!.azureKeyVault),
    config_map_target_ref: cdktf.listMapper(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefToTerraform, false)(struct!.configMapTargetRef),
    env: cdktf.listMapper(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvToTerraform, false)(struct!.env),
    gcp_secret_manager: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerToTerraform(struct!.gcpSecretManager),
    hashi_corp_vault: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultToTerraform(struct!.hashiCorpVault),
    pod_identity: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentityToTerraform(struct!.podIdentity),
    secret_target_ref: cdktf.listMapper(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefToTerraform, false)(struct!.secretTargetRef),
  }
}


export function dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_secret_manager: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerToHclTerraform(struct!.awsSecretManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager",
    },
    azure_key_vault: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultToHclTerraform(struct!.azureKeyVault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault",
    },
    config_map_target_ref: {
      value: cdktf.listMapperHcl(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefToHclTerraform, false)(struct!.configMapTargetRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvList",
    },
    gcp_secret_manager: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerToHclTerraform(struct!.gcpSecretManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager",
    },
    hashi_corp_vault: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultToHclTerraform(struct!.hashiCorpVault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault",
    },
    pod_identity: {
      value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentityToHclTerraform(struct!.podIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity",
    },
    secret_target_ref: {
      value: cdktf.listMapperHcl(dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefToHclTerraform, false)(struct!.secretTargetRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsSecretManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretManager = this._awsSecretManager?.internalValue;
    }
    if (this._azureKeyVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVault = this._azureKeyVault?.internalValue;
    }
    if (this._configMapTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapTargetRef = this._configMapTargetRef?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._gcpSecretManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManager = this._gcpSecretManager?.internalValue;
    }
    if (this._hashiCorpVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashiCorpVault = this._hashiCorpVault?.internalValue;
    }
    if (this._podIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentity = this._podIdentity?.internalValue;
    }
    if (this._secretTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretTargetRef = this._secretTargetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsSecretManager.internalValue = undefined;
      this._azureKeyVault.internalValue = undefined;
      this._configMapTargetRef.internalValue = undefined;
      this._env.internalValue = undefined;
      this._gcpSecretManager.internalValue = undefined;
      this._hashiCorpVault.internalValue = undefined;
      this._podIdentity.internalValue = undefined;
      this._secretTargetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsSecretManager.internalValue = value.awsSecretManager;
      this._azureKeyVault.internalValue = value.azureKeyVault;
      this._configMapTargetRef.internalValue = value.configMapTargetRef;
      this._env.internalValue = value.env;
      this._gcpSecretManager.internalValue = value.gcpSecretManager;
      this._hashiCorpVault.internalValue = value.hashiCorpVault;
      this._podIdentity.internalValue = value.podIdentity;
      this._secretTargetRef.internalValue = value.secretTargetRef;
    }
  }

  // aws_secret_manager - computed: false, optional: true, required: false
  private _awsSecretManager = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManagerOutputReference(this, "aws_secret_manager");
  public get awsSecretManager() {
    return this._awsSecretManager;
  }
  public putAwsSecretManager(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAwsSecretManager) {
    this._awsSecretManager.internalValue = value;
  }
  public resetAwsSecretManager() {
    this._awsSecretManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretManagerInput() {
    return this._awsSecretManager.internalValue;
  }

  // azure_key_vault - computed: false, optional: true, required: false
  private _azureKeyVault = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVaultOutputReference(this, "azure_key_vault");
  public get azureKeyVault() {
    return this._azureKeyVault;
  }
  public putAzureKeyVault(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecAzureKeyVault) {
    this._azureKeyVault.internalValue = value;
  }
  public resetAzureKeyVault() {
    this._azureKeyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultInput() {
    return this._azureKeyVault.internalValue;
  }

  // config_map_target_ref - computed: false, optional: true, required: false
  private _configMapTargetRef = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRefList(this, "config_map_target_ref", false);
  public get configMapTargetRef() {
    return this._configMapTargetRef;
  }
  public putConfigMapTargetRef(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecConfigMapTargetRef[] | cdktf.IResolvable) {
    this._configMapTargetRef.internalValue = value;
  }
  public resetConfigMapTargetRef() {
    this._configMapTargetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapTargetRefInput() {
    return this._configMapTargetRef.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // gcp_secret_manager - computed: false, optional: true, required: false
  private _gcpSecretManager = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManagerOutputReference(this, "gcp_secret_manager");
  public get gcpSecretManager() {
    return this._gcpSecretManager;
  }
  public putGcpSecretManager(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecGcpSecretManager) {
    this._gcpSecretManager.internalValue = value;
  }
  public resetGcpSecretManager() {
    this._gcpSecretManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerInput() {
    return this._gcpSecretManager.internalValue;
  }

  // hashi_corp_vault - computed: false, optional: true, required: false
  private _hashiCorpVault = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVaultOutputReference(this, "hashi_corp_vault");
  public get hashiCorpVault() {
    return this._hashiCorpVault;
  }
  public putHashiCorpVault(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecHashiCorpVault) {
    this._hashiCorpVault.internalValue = value;
  }
  public resetHashiCorpVault() {
    this._hashiCorpVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashiCorpVaultInput() {
    return this._hashiCorpVault.internalValue;
  }

  // pod_identity - computed: false, optional: true, required: false
  private _podIdentity = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentityOutputReference(this, "pod_identity");
  public get podIdentity() {
    return this._podIdentity;
  }
  public putPodIdentity(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecPodIdentity) {
    this._podIdentity.internalValue = value;
  }
  public resetPodIdentity() {
    this._podIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityInput() {
    return this._podIdentity.internalValue;
  }

  // secret_target_ref - computed: false, optional: true, required: false
  private _secretTargetRef = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRefList(this, "secret_target_ref", false);
  public get secretTargetRef() {
    return this._secretTargetRef;
  }
  public putSecretTargetRef(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecSecretTargetRef[] | cdktf.IResolvable) {
    this._secretTargetRef.internalValue = value;
  }
  public resetSecretTargetRef() {
    this._secretTargetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTargetRefInput() {
    return this._secretTargetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest k8s_keda_sh_trigger_authentication_v1alpha1_manifest}
*/
export class DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keda_sh_trigger_authentication_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKedaShTriggerAuthenticationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keda_sh_trigger_authentication_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keda_sh_trigger_authentication_v1alpha1_manifest k8s_keda_sh_trigger_authentication_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keda_sh_trigger_authentication_v1alpha1_manifest',
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
  private _metadata = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKedaShTriggerAuthenticationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
