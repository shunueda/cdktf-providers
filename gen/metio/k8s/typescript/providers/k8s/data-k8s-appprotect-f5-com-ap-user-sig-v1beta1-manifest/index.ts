// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppprotectF5ComApUserSigV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#metadata DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata;
  /**
  * APUserSigSpec defines the desired state of APUserSig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#spec DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec;
}
export interface DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#annotations DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#labels DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#name DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#namespace DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#name DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackTypeToTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackTypeToHclTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType | cdktf.IResolvable): any {
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

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#type DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#value DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferencesToTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferencesToHclTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
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
export interface DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#name DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsToTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsToHclTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems | cdktf.IResolvable): any {
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

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems | cdktf.IResolvable | undefined) {
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

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsOutputReference {
    return new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#accuracy DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#accuracy}
  */
  readonly accuracy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#attack_type DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#attack_type}
  */
  readonly attackType?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#description DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#name DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#references DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#references}
  */
  readonly references?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#risk DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#risk}
  */
  readonly risk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#rule DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#signature_type DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#signature_type}
  */
  readonly signatureType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#systems DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#systems}
  */
  readonly systems?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems[] | cdktf.IResolvable;
}

export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesToTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accuracy: cdktf.stringToTerraform(struct!.accuracy),
    attack_type: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackTypeToTerraform(struct!.attackType),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    references: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferencesToTerraform(struct!.references),
    risk: cdktf.stringToTerraform(struct!.risk),
    rule: cdktf.stringToTerraform(struct!.rule),
    signature_type: cdktf.stringToTerraform(struct!.signatureType),
    systems: cdktf.listMapper(dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsToTerraform, false)(struct!.systems),
  }
}


export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesToHclTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accuracy: {
      value: cdktf.stringToHclTerraform(struct!.accuracy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attack_type: {
      value: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackTypeToHclTerraform(struct!.attackType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    references: {
      value: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences",
    },
    risk: {
      value: cdktf.stringToHclTerraform(struct!.risk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_type: {
      value: cdktf.stringToHclTerraform(struct!.signatureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    systems: {
      value: cdktf.listMapperHcl(dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsToHclTerraform, false)(struct!.systems),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accuracy !== undefined) {
      hasAnyValues = true;
      internalValueResult.accuracy = this._accuracy;
    }
    if (this._attackType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackType = this._attackType?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    if (this._risk !== undefined) {
      hasAnyValues = true;
      internalValueResult.risk = this._risk;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._signatureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureType = this._signatureType;
    }
    if (this._systems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systems = this._systems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accuracy = undefined;
      this._attackType.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._references.internalValue = undefined;
      this._risk = undefined;
      this._rule = undefined;
      this._signatureType = undefined;
      this._systems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accuracy = value.accuracy;
      this._attackType.internalValue = value.attackType;
      this._description = value.description;
      this._name = value.name;
      this._references.internalValue = value.references;
      this._risk = value.risk;
      this._rule = value.rule;
      this._signatureType = value.signatureType;
      this._systems.internalValue = value.systems;
    }
  }

  // accuracy - computed: false, optional: true, required: false
  private _accuracy?: string; 
  public get accuracy() {
    return this.getStringAttribute('accuracy');
  }
  public set accuracy(value: string) {
    this._accuracy = value;
  }
  public resetAccuracy() {
    this._accuracy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accuracyInput() {
    return this._accuracy;
  }

  // attack_type - computed: false, optional: true, required: false
  private _attackType = new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackTypeOutputReference(this, "attack_type");
  public get attackType() {
    return this._attackType;
  }
  public putAttackType(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesAttackType) {
    this._attackType.internalValue = value;
  }
  public resetAttackType() {
    this._attackType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeInput() {
    return this._attackType.internalValue;
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

  // references - computed: false, optional: true, required: false
  private _references = new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesReferences) {
    this._references.internalValue = value;
  }
  public resetReferences() {
    this._references.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }

  // risk - computed: false, optional: true, required: false
  private _risk?: string; 
  public get risk() {
    return this.getStringAttribute('risk');
  }
  public set risk(value: string) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // signature_type - computed: false, optional: true, required: false
  private _signatureType?: string; 
  public get signatureType() {
    return this.getStringAttribute('signature_type');
  }
  public set signatureType(value: string) {
    this._signatureType = value;
  }
  public resetSignatureType() {
    this._signatureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureTypeInput() {
    return this._signatureType;
  }

  // systems - computed: false, optional: true, required: false
  private _systems = new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystemsList(this, "systems", false);
  public get systems() {
    return this._systems;
  }
  public putSystems(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesSystems[] | cdktf.IResolvable) {
    this._systems.internalValue = value;
  }
  public resetSystems() {
    this._systems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemsInput() {
    return this._systems.internalValue;
  }
}

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesOutputReference {
    return new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#properties DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#properties}
  */
  readonly properties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#signatures DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#signatures}
  */
  readonly signatures?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#software_version DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#tag DataK8SAppprotectF5ComApUserSigV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecToTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.stringToTerraform(struct!.properties),
    signatures: cdktf.listMapper(dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesToTerraform, false)(struct!.signatures),
    software_version: cdktf.stringToTerraform(struct!.softwareVersion),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signatures: {
      value: cdktf.listMapperHcl(dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesToHclTerraform, false)(struct!.signatures),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesList",
    },
    software_version: {
      value: cdktf.stringToHclTerraform(struct!.softwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._signatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatures = this._signatures?.internalValue;
    }
    if (this._softwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVersion = this._softwareVersion;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._properties = undefined;
      this._signatures.internalValue = undefined;
      this._softwareVersion = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._properties = value.properties;
      this._signatures.internalValue = value.signatures;
      this._softwareVersion = value.softwareVersion;
      this._tag = value.tag;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // signatures - computed: false, optional: true, required: false
  private _signatures = new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignaturesList(this, "signatures", false);
  public get signatures() {
    return this._signatures;
  }
  public putSignatures(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecSignatures[] | cdktf.IResolvable) {
    this._signatures.internalValue = value;
  }
  public resetSignatures() {
    this._signatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures.internalValue;
  }

  // software_version - computed: false, optional: true, required: false
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest k8s_appprotect_f5_com_ap_user_sig_v1beta1_manifest}
*/
export class DataK8SAppprotectF5ComApUserSigV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appprotect_f5_com_ap_user_sig_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppprotectF5ComApUserSigV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppprotectF5ComApUserSigV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAppprotectF5ComApUserSigV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppprotectF5ComApUserSigV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appprotect_f5_com_ap_user_sig_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appprotect_f5_com_ap_user_sig_v1beta1_manifest k8s_appprotect_f5_com_ap_user_sig_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppprotectF5ComApUserSigV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appprotect_f5_com_ap_user_sig_v1beta1_manifest',
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
  private _metadata = new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec) {
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
      metadata: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectF5ComApUserSigV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectF5ComApUserSigV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
