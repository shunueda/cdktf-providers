// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#metadata DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata;
  /**
  * VaultPKISecretSpec defines the desired state of VaultPKISecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#spec DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec;
}
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#annotations DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#labels DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates {
  /**
  * Name of the Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Text contains the Go text template format. The template references attributes from the data structure of the source secret. Refer to https://pkg.go.dev/text/template for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#text DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#text}
  */
  readonly text: string;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable): any {
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
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._text = value.text;
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

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs {
  /**
  * KeyOverride to the rendered template in the Destination secret. If Key is empty, then the Key from reference spec will be used. Set this to override the Key set from the reference spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#key_override DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#key_override}
  */
  readonly keyOverride?: string;
  /**
  * Name of the Template in SecretTransformationSpec.Templates. the rendered secret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_override: cdktf.stringToTerraform(struct!.keyOverride),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_override: {
      value: cdktf.stringToHclTerraform(struct!.keyOverride),
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

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
    }
  }

  // key_override - computed: false, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsOutputReference {
    return new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs {
  /**
  * IgnoreExcludes controls whether to use the SecretTransformation's Excludes data key filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#ignore_excludes DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#ignore_excludes}
  */
  readonly ignoreExcludes?: boolean | cdktf.IResolvable;
  /**
  * IgnoreIncludes controls whether to use the SecretTransformation's Includes data key filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#ignore_includes DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#ignore_includes}
  */
  readonly ignoreIncludes?: boolean | cdktf.IResolvable;
  /**
  * Name of the SecretTransformation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the SecretTransformation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * TemplateRefs map to a Template found in this TransformationRef. If empty, then all templates from the SecretTransformation will be rendered to the K8s Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#template_refs DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#template_refs}
  */
  readonly templateRefs?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs[] | cdktf.IResolvable;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_excludes: cdktf.booleanToTerraform(struct!.ignoreExcludes),
    ignore_includes: cdktf.booleanToTerraform(struct!.ignoreIncludes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    template_refs: cdktf.listMapper(dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToTerraform, false)(struct!.templateRefs),
  }
}


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_excludes: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreExcludes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_includes: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreIncludes),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_refs: {
      value: cdktf.listMapperHcl(dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToHclTerraform, false)(struct!.templateRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreExcludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreExcludes = this._ignoreExcludes;
    }
    if (this._ignoreIncludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreIncludes = this._ignoreIncludes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._templateRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRefs = this._templateRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreExcludes = undefined;
      this._ignoreIncludes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._templateRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreExcludes = value.ignoreExcludes;
      this._ignoreIncludes = value.ignoreIncludes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._templateRefs.internalValue = value.templateRefs;
    }
  }

  // ignore_excludes - computed: false, optional: true, required: false
  private _ignoreExcludes?: boolean | cdktf.IResolvable; 
  public get ignoreExcludes() {
    return this.getBooleanAttribute('ignore_excludes');
  }
  public set ignoreExcludes(value: boolean | cdktf.IResolvable) {
    this._ignoreExcludes = value;
  }
  public resetIgnoreExcludes() {
    this._ignoreExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExcludesInput() {
    return this._ignoreExcludes;
  }

  // ignore_includes - computed: false, optional: true, required: false
  private _ignoreIncludes?: boolean | cdktf.IResolvable; 
  public get ignoreIncludes() {
    return this.getBooleanAttribute('ignore_includes');
  }
  public set ignoreIncludes(value: boolean | cdktf.IResolvable) {
    this._ignoreIncludes = value;
  }
  public resetIgnoreIncludes() {
    this._ignoreIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIncludesInput() {
    return this._ignoreIncludes;
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

  // template_refs - computed: false, optional: true, required: false
  private _templateRefs = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsList(this, "template_refs", false);
  public get templateRefs() {
    return this._templateRefs;
  }
  public putTemplateRefs(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs[] | cdktf.IResolvable) {
    this._templateRefs.internalValue = value;
  }
  public resetTemplateRefs() {
    this._templateRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefsInput() {
    return this._templateRefs.internalValue;
  }
}

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsOutputReference {
    return new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation {
  /**
  * ExcludeRaw data from the destination Secret. Exclusion policy can be set globally by including 'exclude-raw' in the '--global-transformation-options' command line flag. If set, the command line flag always takes precedence over this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#exclude_raw DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#exclude_raw}
  */
  readonly excludeRaw?: boolean | cdktf.IResolvable;
  /**
  * Excludes contains regex patterns used to filter top-level source secret data fields for exclusion from the final K8s Secret data. These pattern filters are never applied to templated fields as defined in Templates. They are always applied before any inclusion patterns. To exclude all source secret data fields, you can configure the single pattern '.*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#excludes DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#excludes}
  */
  readonly excludes?: string[];
  /**
  * Includes contains regex patterns used to filter top-level source secret data fields for inclusion in the final K8s Secret data. These pattern filters are never applied to templated fields as defined in Templates. They are always applied last.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#includes DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#includes}
  */
  readonly includes?: string[];
  /**
  * Templates maps a template name to its Template. Templates are always included in the rendered K8s Secret, and take precedence over templates defined in a SecretTransformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#templates DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#templates}
  */
  readonly templates?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates;
  /**
  * TransformationRefs contain references to template configuration from SecretTransformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#transformation_refs DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#transformation_refs}
  */
  readonly transformationRefs?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs[] | cdktf.IResolvable;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_raw: cdktf.booleanToTerraform(struct!.excludeRaw),
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
    templates: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToTerraform(struct!.templates),
    transformation_refs: cdktf.listMapper(dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToTerraform, false)(struct!.transformationRefs),
  }
}


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_raw: {
      value: cdktf.booleanToHclTerraform(struct!.excludeRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    templates: {
      value: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToHclTerraform(struct!.templates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates",
    },
    transformation_refs: {
      value: cdktf.listMapperHcl(dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToHclTerraform, false)(struct!.transformationRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRaw = this._excludeRaw;
    }
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    if (this._templates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates?.internalValue;
    }
    if (this._transformationRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationRefs = this._transformationRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeRaw = undefined;
      this._excludes = undefined;
      this._includes = undefined;
      this._templates.internalValue = undefined;
      this._transformationRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeRaw = value.excludeRaw;
      this._excludes = value.excludes;
      this._includes = value.includes;
      this._templates.internalValue = value.templates;
      this._transformationRefs.internalValue = value.transformationRefs;
    }
  }

  // exclude_raw - computed: false, optional: true, required: false
  private _excludeRaw?: boolean | cdktf.IResolvable; 
  public get excludeRaw() {
    return this.getBooleanAttribute('exclude_raw');
  }
  public set excludeRaw(value: boolean | cdktf.IResolvable) {
    this._excludeRaw = value;
  }
  public resetExcludeRaw() {
    this._excludeRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRawInput() {
    return this._excludeRaw;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }

  // templates - computed: false, optional: true, required: false
  private _templates = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplatesOutputReference(this, "templates");
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTemplates) {
    this._templates.internalValue = value;
  }
  public resetTemplates() {
    this._templates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }

  // transformation_refs - computed: false, optional: true, required: false
  private _transformationRefs = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsList(this, "transformation_refs", false);
  public get transformationRefs() {
    return this._transformationRefs;
  }
  public putTransformationRefs(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs[] | cdktf.IResolvable) {
    this._transformationRefs.internalValue = value;
  }
  public resetTransformationRefs() {
    this._transformationRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationRefsInput() {
    return this._transformationRefs.internalValue;
  }
}
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination {
  /**
  * Annotations to apply to the Secret. Requires Create to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#annotations DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Create the destination Secret. If the Secret already exists this should be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#create DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Labels to apply to the Secret. Requires Create to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#labels DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Overwrite the destination Secret if it exists and Create is true. This is useful when migrating to VSO from a previous secret deployment strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#overwrite DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Transformation provides configuration for transforming the secret data before it is stored in the Destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#transformation DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#transformation}
  */
  readonly transformation?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation;
  /**
  * Type of Kubernetes Secret. Requires Create to be set to true. Defaults to Opaque.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#type DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    create: cdktf.booleanToTerraform(struct!.create),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    transformation: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationToTerraform(struct!.transformation),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable): any {
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
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation: {
      value: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationToHclTerraform(struct!.transformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation",
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

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._create = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._transformation.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._create = value.create;
      this._labels = value.labels;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._transformation.internalValue = value.transformation;
      this._type = value.type;
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

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationTransformation) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
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
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets {
  /**
  * Kind of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#kind DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
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
}

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsOutputReference {
    return new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec {
  /**
  * AltNames to include in the request May contain both DNS names and email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#alt_names DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#alt_names}
  */
  readonly altNames?: string[];
  /**
  * Clear the Kubernetes secret when the resource is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#clear DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#clear}
  */
  readonly clear?: boolean | cdktf.IResolvable;
  /**
  * CommonName to include in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#common_name DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Destination provides configuration necessary for syncing the Vault secret to Kubernetes. If the type is set to 'kubernetes.io/tls', 'tls.key' will be set to the 'private_key' response from Vault, and 'tls.crt' will be set to 'certificate' + 'ca_chain' from the Vault response ('issuing_ca' is used when 'ca_chain' is empty). The 'remove_roots_from_chain=true' option is used with Vault to exclude the root CA from the Vault response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#destination DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#destination}
  */
  readonly destination: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination;
  /**
  * ExcludeCNFromSans from DNS or Email Subject Alternate Names. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#exclude_cn_from_sans DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#exclude_cn_from_sans}
  */
  readonly excludeCnFromSans?: boolean | cdktf.IResolvable;
  /**
  * ExpiryOffset to use for computing when the certificate should be renewed. The rotation time will be difference between the expiration and the offset. Should be in duration notation e.g. 30s, 120s, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#expiry_offset DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#expiry_offset}
  */
  readonly expiryOffset?: string;
  /**
  * Format for the certificate. Choices: 'pem', 'der', 'pem_bundle'. If 'pem_bundle', any private key and issuing cert will be appended to the certificate pem. If 'der', the value will be base64 encoded. Default: pem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#format DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * IPSans to include in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#ip_sans DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * IssuerRef reference to an existing PKI issuer, either by Vault-generated identifier, the literal string default to refer to the currently configured default issuer, or the name assigned to an issuer. This parameter is part of the request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#issuer_ref DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#issuer_ref}
  */
  readonly issuerRef?: string;
  /**
  * Mount for the secret in Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#mount DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#mount}
  */
  readonly mount: string;
  /**
  * Namespace of the secrets engine mount in Vault. If not set, the namespace that's part of VaultAuth resource will be inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NotAfter field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#not_after DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#not_after}
  */
  readonly notAfter?: string;
  /**
  * Requested other SANs, in an array with the format oid;type:value for each entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#other_sans DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#other_sans}
  */
  readonly otherSans?: string[];
  /**
  * PrivateKeyFormat, generally the default will be controlled by the Format parameter as either base64-encoded DER or PEM-encoded DER. However, this can be set to 'pkcs8' to have the returned private key contain base64-encoded pkcs8 or PEM-encoded pkcs8 instead. Default: der
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#private_key_format DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#private_key_format}
  */
  readonly privateKeyFormat?: string;
  /**
  * Revoke the certificate when the resource is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#revoke DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#revoke}
  */
  readonly revoke?: boolean | cdktf.IResolvable;
  /**
  * Role in Vault to use when issuing TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#role DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#role}
  */
  readonly role: string;
  /**
  * RolloutRestartTargets should be configured whenever the application(s) consuming the Vault secret does not support dynamically reloading a rotated secret. In that case one, or more RolloutRestartTarget(s) can be configured here. The Operator will trigger a 'rollout-restart' for each target whenever the Vault secret changes between reconciliation events. See RolloutRestartTarget for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#rollout_restart_targets DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#rollout_restart_targets}
  */
  readonly rolloutRestartTargets?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets[] | cdktf.IResolvable;
  /**
  * TTL for the certificate; sets the expiration date. If not specified the Vault role's default, backend default, or system default TTL is used, in that order. Cannot be larger than the mount's max TTL. Note: this only has an effect when generating a CA cert or signing a CA cert, not when generating a CSR for an intermediate CA. Should be in duration notation e.g. 120s, 2h, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#ttl DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#ttl}
  */
  readonly ttl?: string;
  /**
  * The requested URI SANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#uri_sans DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#uri_sans}
  */
  readonly uriSans?: string[];
  /**
  * User ID (OID 0.9.2342.19200300.100.1.1) Subject values to be placed on the signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#user_i_ds DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#user_i_ds}
  */
  readonly userIDs?: string[];
  /**
  * VaultAuthRef to the VaultAuth resource, can be prefixed with a namespace, eg: 'namespaceA/vaultAuthRefB'. If no namespace prefix is provided it will default to the namespace of the VaultAuth CR. If no value is specified for VaultAuthRef the Operator will default to the 'default' VaultAuth, configured in the operator's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#vault_auth_ref DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest#vault_auth_ref}
  */
  readonly vaultAuthRef?: string;
}

export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.altNames),
    clear: cdktf.booleanToTerraform(struct!.clear),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    destination: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationToTerraform(struct!.destination),
    exclude_cn_from_sans: cdktf.booleanToTerraform(struct!.excludeCnFromSans),
    expiry_offset: cdktf.stringToTerraform(struct!.expiryOffset),
    format: cdktf.stringToTerraform(struct!.format),
    ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSans),
    issuer_ref: cdktf.stringToTerraform(struct!.issuerRef),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    not_after: cdktf.stringToTerraform(struct!.notAfter),
    other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.otherSans),
    private_key_format: cdktf.stringToTerraform(struct!.privateKeyFormat),
    revoke: cdktf.booleanToTerraform(struct!.revoke),
    role: cdktf.stringToTerraform(struct!.role),
    rollout_restart_targets: cdktf.listMapper(dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsToTerraform, false)(struct!.rolloutRestartTargets),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uriSans),
    user_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIDs),
    vault_auth_ref: cdktf.stringToTerraform(struct!.vaultAuthRef),
  }
}


export function dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.altNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clear: {
      value: cdktf.booleanToHclTerraform(struct!.clear),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination",
    },
    exclude_cn_from_sans: {
      value: cdktf.booleanToHclTerraform(struct!.excludeCnFromSans),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiry_offset: {
      value: cdktf.stringToHclTerraform(struct!.expiryOffset),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer_ref: {
      value: cdktf.stringToHclTerraform(struct!.issuerRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    not_after: {
      value: cdktf.stringToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.otherSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_key_format: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoke: {
      value: cdktf.booleanToHclTerraform(struct!.revoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollout_restart_targets: {
      value: cdktf.listMapperHcl(dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsToHclTerraform, false)(struct!.rolloutRestartTargets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uriSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vault_auth_ref: {
      value: cdktf.stringToHclTerraform(struct!.vaultAuthRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._altNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.altNames = this._altNames;
    }
    if (this._clear !== undefined) {
      hasAnyValues = true;
      internalValueResult.clear = this._clear;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._excludeCnFromSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeCnFromSans = this._excludeCnFromSans;
    }
    if (this._expiryOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryOffset = this._expiryOffset;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._ipSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSans = this._ipSans;
    }
    if (this._issuerRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerRef = this._issuerRef;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._otherSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSans = this._otherSans;
    }
    if (this._privateKeyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFormat = this._privateKeyFormat;
    }
    if (this._revoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.revoke = this._revoke;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._rolloutRestartTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutRestartTargets = this._rolloutRestartTargets?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uriSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriSans = this._uriSans;
    }
    if (this._userIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIDs = this._userIDs;
    }
    if (this._vaultAuthRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultAuthRef = this._vaultAuthRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._altNames = undefined;
      this._clear = undefined;
      this._commonName = undefined;
      this._destination.internalValue = undefined;
      this._excludeCnFromSans = undefined;
      this._expiryOffset = undefined;
      this._format = undefined;
      this._ipSans = undefined;
      this._issuerRef = undefined;
      this._mount = undefined;
      this._namespace = undefined;
      this._notAfter = undefined;
      this._otherSans = undefined;
      this._privateKeyFormat = undefined;
      this._revoke = undefined;
      this._role = undefined;
      this._rolloutRestartTargets.internalValue = undefined;
      this._ttl = undefined;
      this._uriSans = undefined;
      this._userIDs = undefined;
      this._vaultAuthRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._altNames = value.altNames;
      this._clear = value.clear;
      this._commonName = value.commonName;
      this._destination.internalValue = value.destination;
      this._excludeCnFromSans = value.excludeCnFromSans;
      this._expiryOffset = value.expiryOffset;
      this._format = value.format;
      this._ipSans = value.ipSans;
      this._issuerRef = value.issuerRef;
      this._mount = value.mount;
      this._namespace = value.namespace;
      this._notAfter = value.notAfter;
      this._otherSans = value.otherSans;
      this._privateKeyFormat = value.privateKeyFormat;
      this._revoke = value.revoke;
      this._role = value.role;
      this._rolloutRestartTargets.internalValue = value.rolloutRestartTargets;
      this._ttl = value.ttl;
      this._uriSans = value.uriSans;
      this._userIDs = value.userIDs;
      this._vaultAuthRef = value.vaultAuthRef;
    }
  }

  // alt_names - computed: false, optional: true, required: false
  private _altNames?: string[]; 
  public get altNames() {
    return this.getListAttribute('alt_names');
  }
  public set altNames(value: string[]) {
    this._altNames = value;
  }
  public resetAltNames() {
    this._altNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames;
  }

  // clear - computed: false, optional: true, required: false
  private _clear?: boolean | cdktf.IResolvable; 
  public get clear() {
    return this.getBooleanAttribute('clear');
  }
  public set clear(value: boolean | cdktf.IResolvable) {
    this._clear = value;
  }
  public resetClear() {
    this._clear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearInput() {
    return this._clear;
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

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // exclude_cn_from_sans - computed: false, optional: true, required: false
  private _excludeCnFromSans?: boolean | cdktf.IResolvable; 
  public get excludeCnFromSans() {
    return this.getBooleanAttribute('exclude_cn_from_sans');
  }
  public set excludeCnFromSans(value: boolean | cdktf.IResolvable) {
    this._excludeCnFromSans = value;
  }
  public resetExcludeCnFromSans() {
    this._excludeCnFromSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCnFromSansInput() {
    return this._excludeCnFromSans;
  }

  // expiry_offset - computed: false, optional: true, required: false
  private _expiryOffset?: string; 
  public get expiryOffset() {
    return this.getStringAttribute('expiry_offset');
  }
  public set expiryOffset(value: string) {
    this._expiryOffset = value;
  }
  public resetExpiryOffset() {
    this._expiryOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryOffsetInput() {
    return this._expiryOffset;
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
  private _ipSans?: string[]; 
  public get ipSans() {
    return this.getListAttribute('ip_sans');
  }
  public set ipSans(value: string[]) {
    this._ipSans = value;
  }
  public resetIpSans() {
    this._ipSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSansInput() {
    return this._ipSans;
  }

  // issuer_ref - computed: false, optional: true, required: false
  private _issuerRef?: string; 
  public get issuerRef() {
    return this.getStringAttribute('issuer_ref');
  }
  public set issuerRef(value: string) {
    this._issuerRef = value;
  }
  public resetIssuerRef() {
    this._issuerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRefInput() {
    return this._issuerRef;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
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

  // not_after - computed: false, optional: true, required: false
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // other_sans - computed: false, optional: true, required: false
  private _otherSans?: string[]; 
  public get otherSans() {
    return this.getListAttribute('other_sans');
  }
  public set otherSans(value: string[]) {
    this._otherSans = value;
  }
  public resetOtherSans() {
    this._otherSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSansInput() {
    return this._otherSans;
  }

  // private_key_format - computed: false, optional: true, required: false
  private _privateKeyFormat?: string; 
  public get privateKeyFormat() {
    return this.getStringAttribute('private_key_format');
  }
  public set privateKeyFormat(value: string) {
    this._privateKeyFormat = value;
  }
  public resetPrivateKeyFormat() {
    this._privateKeyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFormatInput() {
    return this._privateKeyFormat;
  }

  // revoke - computed: false, optional: true, required: false
  private _revoke?: boolean | cdktf.IResolvable; 
  public get revoke() {
    return this.getBooleanAttribute('revoke');
  }
  public set revoke(value: boolean | cdktf.IResolvable) {
    this._revoke = value;
  }
  public resetRevoke() {
    this._revoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeInput() {
    return this._revoke;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // rollout_restart_targets - computed: false, optional: true, required: false
  private _rolloutRestartTargets = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargetsList(this, "rollout_restart_targets", false);
  public get rolloutRestartTargets() {
    return this._rolloutRestartTargets;
  }
  public putRolloutRestartTargets(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecRolloutRestartTargets[] | cdktf.IResolvable) {
    this._rolloutRestartTargets.internalValue = value;
  }
  public resetRolloutRestartTargets() {
    this._rolloutRestartTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutRestartTargetsInput() {
    return this._rolloutRestartTargets.internalValue;
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
  private _uriSans?: string[]; 
  public get uriSans() {
    return this.getListAttribute('uri_sans');
  }
  public set uriSans(value: string[]) {
    this._uriSans = value;
  }
  public resetUriSans() {
    this._uriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSansInput() {
    return this._uriSans;
  }

  // user_i_ds - computed: false, optional: true, required: false
  private _userIDs?: string[]; 
  public get userIDs() {
    return this.getListAttribute('user_i_ds');
  }
  public set userIDs(value: string[]) {
    this._userIDs = value;
  }
  public resetUserIDs() {
    this._userIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIDsInput() {
    return this._userIDs;
  }

  // vault_auth_ref - computed: false, optional: true, required: false
  private _vaultAuthRef?: string; 
  public get vaultAuthRef() {
    return this.getStringAttribute('vault_auth_ref');
  }
  public set vaultAuthRef(value: string) {
    this._vaultAuthRef = value;
  }
  public resetVaultAuthRef() {
    this._vaultAuthRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAuthRefInput() {
    return this._vaultAuthRef;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest k8s_secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest}
*/
export class DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest k8s_secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_hashicorp_com_vault_pki_secret_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultPkiSecretV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
