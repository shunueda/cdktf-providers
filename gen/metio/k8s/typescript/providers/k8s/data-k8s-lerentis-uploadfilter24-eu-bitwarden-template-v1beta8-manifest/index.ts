// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#metadata DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#metadata}
  */
  readonly metadata: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#spec DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#spec}
  */
  readonly spec?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec;
}
export interface DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#annotations DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#labels DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#name DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#namespace DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadataToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadataToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#filename DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#template DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#template}
  */
  readonly template: string;
}

export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElementToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElementToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
      this._template = value.template;
    }
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#element DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#element}
  */
  readonly element?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement;
}

export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element: dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElementToTerraform(struct!.element),
  }
}


export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element: {
      value: dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElementToHclTerraform(struct!.element),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent | cdktf.IResolvable | undefined) {
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
  private _element = new DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }
  public putElement(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentElement) {
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

export class DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentList extends cdktf.ComplexList {
  public internalValue? : DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentOutputReference {
    return new DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#annotations DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#content DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#content}
  */
  readonly content?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#labels DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#name DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#namespace DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#secret_type DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest#secret_type}
  */
  readonly secretType?: string;
}

export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecToTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    content: cdktf.listMapper(dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentToTerraform, false)(struct!.content),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
  }
}


export function dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecToHclTerraform(struct?: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec | cdktf.IResolvable): any {
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
    content: {
      value: cdktf.listMapperHcl(dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentToHclTerraform, false)(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentList",
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
    secret_type: {
      value: cdktf.stringToHclTerraform(struct!.secretType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
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
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._content.internalValue = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._secretType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._content.internalValue = value.content;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
      this._secretType = value.secretType;
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

  // content - computed: false, optional: true, required: false
  private _content = new DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecContent[] | cdktf.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
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

  // secret_type - computed: false, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest k8s_lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest}
*/
export class DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest to import
  * @param importFromId The id of the existing DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest k8s_lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lerentis_uploadfilter24_eu_bitwarden_template_v1beta8_manifest',
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
  private _metadata = new DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec) {
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
      metadata: dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestMetadata",
      },
      spec: {
        value: dataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLerentisUploadfilter24EuBitwardenTemplateV1Beta8ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
