// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#metadata DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#metadata}
  */
  readonly metadata: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#spec DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#spec}
  */
  readonly spec?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec;
}
export interface DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#annotations DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#labels DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#name DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#namespace DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadataToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadataToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#secret_name DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#secret_ref DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#secret_ref}
  */
  readonly secretRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#secret_scope DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#secret_scope}
  */
  readonly secretScope?: string;
}

export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElementToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
    secret_scope: cdktf.stringToTerraform(struct!.secretScope),
  }
}


export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElementToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_scope: {
      value: cdktf.stringToHclTerraform(struct!.secretScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    if (this._secretScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretScope = this._secretScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
      this._secretRef = undefined;
      this._secretScope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
      this._secretRef = value.secretRef;
      this._secretScope = value.secretScope;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }

  // secret_scope - computed: false, optional: true, required: false
  private _secretScope?: string; 
  public get secretScope() {
    return this.getStringAttribute('secret_scope');
  }
  public set secretScope(value: string) {
    this._secretScope = value;
  }
  public resetSecretScope() {
    this._secretScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScopeInput() {
    return this._secretScope;
  }
}
export interface DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#element DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#element}
  */
  readonly element?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement;
}

export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element: dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElementToTerraform(struct!.element),
  }
}


export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element: {
      value: dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElementToHclTerraform(struct!.element),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._element?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._element.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._element.internalValue = value.element;
    }
  }

  // element - computed: false, optional: true, required: false
  private _element = new DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }
  public putElement(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentElement) {
    this._element.internalValue = value;
  }
  public resetElement() {
    this._element.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element.internalValue;
  }
}

export class DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentList extends cdktf.ComplexList {
  public internalValue? : DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentOutputReference {
    return new DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#content DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#content}
  */
  readonly content?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#id DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#labels DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#name DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#namespace DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.listMapper(dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentToTerraform, false)(struct!.content),
    id: cdktf.stringToTerraform(struct!.id),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.listMapperHcl(dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentToHclTerraform, false)(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
      this._id = undefined;
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
      this._content.internalValue = value.content;
      this._id = value.id;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content = new DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecContent[] | cdktf.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest k8s_lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest}
*/
export class DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest to import
  * @param importFromId The id of the existing DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest k8s_lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lerentis_uploadfilter24_eu_bitwarden_secret_v1beta5_manifest',
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
  private _metadata = new DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec) {
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
      metadata: dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestMetadata",
      },
      spec: {
        value: dataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenSecretV1Beta5ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
