// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#metadata DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata;
  /**
  * Spec declares policy exception behaviors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#spec DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec;
}
export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#annotations DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#labels DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#name DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData {
  /**
  * Key is a unique identifier for the data value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#key DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the data value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#value DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataToTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataToHclTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataOutputReference {
    return new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders {
  /**
  * Key is the header key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#key DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#value DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersToTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersToHclTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersOutputReference {
    return new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService {
  /**
  * CABundle is a PEM encoded CA bundle which will be used to validate the server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#ca_bundle DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * Headers is a list of optional HTTP headers to be included in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#headers DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders[] | cdktf.IResolvable;
  /**
  * URL is the JSON web service URL. A typical form is 'https://{service}.{namespace}:{port}/{path}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#url DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceToTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    headers: cdktf.listMapper(dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersToTerraform, false)(struct!.headers),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceToHclTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersList",
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService | cdktf.IResolvable | undefined) {
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
  private _headers = new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall {
  /**
  * The data object specifies the POST data sent to the server. Only applicable when the method field is set to POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#data DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#data}
  */
  readonly data?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData[] | cdktf.IResolvable;
  /**
  * Method is the HTTP request type (GET or POST). Defaults to GET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#method DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * RefreshInterval defines the interval in duration at which to poll the APICall. The duration is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5h' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#refresh_interval DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * RetryLimit defines the number of times the APICall should be retried in case of failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#retry_limit DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#retry_limit}
  */
  readonly retryLimit?: number;
  /**
  * Service is an API call to a JSON web service. This is used for non-Kubernetes API server calls. It's mutually exclusive with the URLPath field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#service DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#service}
  */
  readonly service?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService;
  /**
  * URLPath is the URL path to be used in the HTTP GET or POST request to the Kubernetes API server (e.g. '/api/v1/namespaces' or '/apis/apps/v1/deployments'). The format required is the same format used by the 'kubectl get --raw' command. See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls for details. It's mutually exclusive with the Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#url_path DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#url_path}
  */
  readonly urlPath?: string;
}

export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallToTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataToTerraform, false)(struct!.data),
    method: cdktf.stringToTerraform(struct!.method),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    retry_limit: cdktf.numberToTerraform(struct!.retryLimit),
    service: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceToTerraform(struct!.service),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallToHclTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_limit: {
      value: cdktf.numberToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService",
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
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

  public set internalValue(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._method = undefined;
      this._refreshInterval = undefined;
      this._retryLimit = undefined;
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
      this._method = value.method;
      this._refreshInterval = value.refreshInterval;
      this._retryLimit = value.retryLimit;
      this._service.internalValue = value.service;
      this._urlPath = value.urlPath;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
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

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: number; 
  public get retryLimit() {
    return this.getNumberAttribute('retry_limit');
  }
  public set retryLimit(value: number) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallService) {
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
export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource {
  /**
  * Group defines the group of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#group DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Namespace defines the namespace of the resource. Leave empty for cluster scoped resources. If left empty for namespaced resources, all resources from all namespaces will be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#namespace DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Resource defines the type of the resource. Requires the pluralized form of the resource kind in lowercase. (Ex., 'deployments')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#resource DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#resource}
  */
  readonly resource: string;
  /**
  * Version defines the version of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#version DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResourceToTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResourceToHclTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
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

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._namespace = undefined;
      this._resource = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._namespace = value.namespace;
      this._resource = value.resource;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec {
  /**
  * Stores results from an API call which will be cached. Mutually exclusive with KubernetesResource. This can be used to make calls to external (non-Kubernetes API server) services. It can also be used to make calls to the Kubernetes API server in such cases: 1. A POST is needed to create a resource. 2. Finer-grained control is needed. Example: To restrict the number of resources cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#api_call DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#api_call}
  */
  readonly apiCall?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall;
  /**
  * Stores a list of Kubernetes resources which will be cached. Mutually exclusive with APICall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#kubernetes_resource DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest#kubernetes_resource}
  */
  readonly kubernetesResource?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource;
}

export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecToTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_call: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallToTerraform(struct!.apiCall),
    kubernetes_resource: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResourceToTerraform(struct!.kubernetesResource),
  }
}


export function dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_call: {
      value: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallToHclTerraform(struct!.apiCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall",
    },
    kubernetes_resource: {
      value: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResourceToHclTerraform(struct!.kubernetesResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCall = this._apiCall?.internalValue;
    }
    if (this._kubernetesResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResource = this._kubernetesResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiCall.internalValue = undefined;
      this._kubernetesResource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiCall.internalValue = value.apiCall;
      this._kubernetesResource.internalValue = value.kubernetesResource;
    }
  }

  // api_call - computed: false, optional: true, required: false
  private _apiCall = new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCallOutputReference(this, "api_call");
  public get apiCall() {
    return this._apiCall;
  }
  public putApiCall(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecApiCall) {
    this._apiCall.internalValue = value;
  }
  public resetApiCall() {
    this._apiCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCallInput() {
    return this._apiCall.internalValue;
  }

  // kubernetes_resource - computed: false, optional: true, required: false
  private _kubernetesResource = new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResourceOutputReference(this, "kubernetes_resource");
  public get kubernetesResource() {
    return this._kubernetesResource;
  }
  public putKubernetesResource(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecKubernetesResource) {
    this._kubernetesResource.internalValue = value;
  }
  public resetKubernetesResource() {
    this._kubernetesResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourceInput() {
    return this._kubernetesResource.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest k8s_kyverno_io_global_context_entry_v2alpha1_manifest}
*/
export class DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kyverno_io_global_context_entry_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKyvernoIoGlobalContextEntryV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kyverno_io_global_context_entry_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kyverno_io_global_context_entry_v2alpha1_manifest k8s_kyverno_io_global_context_entry_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kyverno_io_global_context_entry_v2alpha1_manifest',
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
  private _metadata = new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec) {
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
      metadata: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoGlobalContextEntryV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
